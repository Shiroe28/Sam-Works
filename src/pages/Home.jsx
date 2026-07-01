import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import SectionNav, { sections } from '../components/SectionNav'
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

const Home = () => {
  const [activeSection, setActiveSection] = useState('about')
  const [mainMinHeight, setMainMinHeight] = useState(undefined)
  const sidebarRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  const syncMainHeight = useCallback(() => {
    if (sidebarRef.current) {
      setMainMinHeight(sidebarRef.current.offsetHeight)
    }
  }, [])

  const navigateToSection = useCallback((id) => {
    if (sections.some((s) => s.id === id)) {
      setActiveSection(id)
    }
  }, [])

  useEffect(() => {
    const target = routeToSection[location.pathname]
    if (target) {
      setActiveSection(target)
      if (location.pathname !== '/') {
        navigate('/', { replace: true })
      }
    }
  }, [location.pathname, navigate])

  useEffect(() => {
    syncMainHeight()

    const sidebar = sidebarRef.current
    if (!sidebar) return

    const observer = new ResizeObserver(syncMainHeight)
    observer.observe(sidebar)
    window.addEventListener('resize', syncMainHeight)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', syncMainHeight)
    }
  }, [activeSection, syncMainHeight])

  const ActiveComponent = sectionComponents[activeSection] || AboutSection

  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 lg:p-5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 lg:gap-5 lg:items-start">
        <Sidebar ref={sidebarRef} />

        <main
          className="flex-1 w-full min-w-0 flex flex-col"
          style={mainMinHeight ? { minHeight: `${mainMinHeight}px` } : undefined}
        >
          <div className="section-panel flex flex-col flex-1 h-full">
            <SectionNav activeSection={activeSection} onNavigate={navigateToSection} />
            <div className="page-content flex-1">
              <ActiveComponent />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
