import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import SectionNav, { sections } from '../components/SectionNav'
import ScrollIndicator from '../components/ScrollIndicator'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import AchievementsSection from '../components/AchievementsSection'
import GallerySection from '../components/GallerySection'
import ContactSection from '../components/ContactSection'

const sectionComponents = {
  about: AboutSection,
  skills: SkillsSection,
  projects: ProjectsSection,
  achievements: AchievementsSection,
  gallery: GallerySection,
  contact: ContactSection,
}

const routeToSection = {
  '/': 'about',
  '/about': 'about',
  '/projects': 'projects',
  '/value': 'contact',
  '/contact': 'contact',
}

const SCROLL_CHARGE = 0.09
const TRANSITION_MS = 650

const Home = () => {
  const [activeSection, setActiveSection] = useState('about')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [panelHeight, setPanelHeight] = useState(undefined)
  const contentRef = useRef(null)
  const sidebarRef = useRef(null)
  const progressRef = useRef(0)
  const isTransitioning = useRef(false)
  const location = useLocation()
  const navigate = useNavigate()

  const syncPanelHeight = useCallback(() => {
    if (sidebarRef.current) {
      setPanelHeight(sidebarRef.current.offsetHeight)
    }
  }, [])

  const resetProgress = useCallback(() => {
    progressRef.current = 0
    setScrollProgress(0)
  }, [])

  const isContentScrollable = useCallback((content) => {
    return content.scrollHeight > content.clientHeight + 2
  }, [])

  const syncProgressFromScroll = useCallback(() => {
    const content = contentRef.current
    if (!content) return

    if (isContentScrollable(content)) {
      const maxScroll = content.scrollHeight - content.clientHeight
      const p = maxScroll > 0 ? content.scrollTop / maxScroll : 0
      progressRef.current = p
      setScrollProgress(p)
    }
  }, [isContentScrollable])

  const goToSection = useCallback((id, scrollToBottom = false) => {
    if (!sections.some((s) => s.id === id) || isTransitioning.current) return

    isTransitioning.current = true
    setActiveSection(id)

    requestAnimationFrame(() => {
      const content = contentRef.current
      if (content) {
        if (scrollToBottom) {
          content.scrollTop = content.scrollHeight
          progressRef.current = 1
          setScrollProgress(1)
        } else {
          content.scrollTop = 0
          resetProgress()
        }
      } else {
        resetProgress()
      }
    })

    setTimeout(() => {
      isTransitioning.current = false
    }, TRANSITION_MS)
  }, [resetProgress])

  const navigateToSection = useCallback((id) => {
    goToSection(id)
  }, [goToSection])

  useEffect(() => {
    const target = routeToSection[location.pathname]
    if (target) {
      setActiveSection(target)
      resetProgress()
      if (location.pathname !== '/') {
        navigate('/', { replace: true })
      }
    }
  }, [location.pathname, navigate, resetProgress])

  useEffect(() => {
    syncPanelHeight()
    resetProgress()

    const sidebar = sidebarRef.current
    if (!sidebar) return

    const observer = new ResizeObserver(syncPanelHeight)
    observer.observe(sidebar)
    window.addEventListener('resize', syncPanelHeight)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', syncPanelHeight)
    }
  }, [activeSection, syncPanelHeight, resetProgress])

  useEffect(() => {
    const content = contentRef.current
    if (!content) return

    const handleContentScroll = () => {
      syncProgressFromScroll()
    }

    const resizeObserver = new ResizeObserver(() => {
      syncProgressFromScroll()
    })

    content.addEventListener('scroll', handleContentScroll, { passive: true })
    resizeObserver.observe(content)

    const childObserver = new MutationObserver(() => {
      requestAnimationFrame(syncProgressFromScroll)
    })
    childObserver.observe(content, { childList: true, subtree: true })

    requestAnimationFrame(syncProgressFromScroll)

    return () => {
      content.removeEventListener('scroll', handleContentScroll)
      resizeObserver.disconnect()
      childObserver.disconnect()
    }
  }, [activeSection, syncProgressFromScroll])

  useEffect(() => {
    const content = contentRef.current
    if (!content) return

    const handleWheel = (e) => {
      if (isTransitioning.current) {
        e.preventDefault()
        return
      }

      const currentIndex = sections.findIndex((s) => s.id === activeSection)
      const scrollable = isContentScrollable(content)
      const maxScroll = content.scrollHeight - content.clientHeight
      const atTop = content.scrollTop <= 1
      const atBottom = content.scrollTop >= maxScroll - 1

      if (e.deltaY > 0) {
        if (scrollable && !atBottom) {
          e.preventDefault()
          content.scrollTop = Math.min(maxScroll, content.scrollTop + e.deltaY)
          syncProgressFromScroll()
          return
        }

        e.preventDefault()
        const base = scrollable && atBottom ? 1 : progressRef.current
        progressRef.current = Math.min(1, base + SCROLL_CHARGE)
        setScrollProgress(progressRef.current)

        if (progressRef.current >= 1 && currentIndex < sections.length - 1) {
          goToSection(sections[currentIndex + 1].id)
        }
      } else if (e.deltaY < 0) {
        if (scrollable && !atTop) {
          e.preventDefault()
          content.scrollTop = Math.max(0, content.scrollTop + e.deltaY)
          syncProgressFromScroll()
          return
        }

        e.preventDefault()
        const base = scrollable && atTop ? 0 : progressRef.current
        progressRef.current = Math.max(0, base - SCROLL_CHARGE)
        setScrollProgress(progressRef.current)

        if (progressRef.current <= 0 && currentIndex > 0) {
          goToSection(sections[currentIndex - 1].id, true)
        }
      }
    }

    content.addEventListener('wheel', handleWheel, { passive: false })
    return () => content.removeEventListener('wheel', handleWheel)
  }, [activeSection, goToSection, syncProgressFromScroll, isContentScrollable])

  const ActiveComponent = sectionComponents[activeSection] || AboutSection

  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 lg:p-5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 lg:gap-5 lg:items-start">
        <Sidebar ref={sidebarRef} />

        <main
          className="flex-1 w-full min-w-0 overflow-hidden"
          style={panelHeight ? { height: `${panelHeight}px` } : undefined}
        >
          <div className="section-panel flex flex-col h-full overflow-hidden">
            <SectionNav activeSection={activeSection} onNavigate={navigateToSection} />

            <div className="relative flex-1 min-h-0 overflow-hidden">
              <div ref={contentRef} className="page-scroll page-content h-full pr-4">
                <ActiveComponent />
              </div>
              <ScrollIndicator progress={scrollProgress} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
