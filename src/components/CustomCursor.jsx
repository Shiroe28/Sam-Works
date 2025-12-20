import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile/tablet
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Don't render custom cursor on mobile/tablet
  if (isMobile) return null

  return (
    <>
      {/* Main cursor dot - solid, stays exactly under mouse */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{ 
          backgroundColor: '#8B5CF6',
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 30,
          mass: 0.3
        }}
      />

      {/* Trailing ring - larger with lag/spring effect */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border-2"
        animate={{
          x: mousePosition.x - (isHovering ? 30 : 16),
          y: mousePosition.y - (isHovering ? 30 : 16),
          width: isHovering ? '60px' : '32px',
          height: isHovering ? '60px' : '32px',
          borderColor: '#A78BFA',
          backgroundColor: isHovering ? 'rgba(139, 92, 246, 0.15)' : 'transparent',
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.8
        }}
      />
    </>
  )
}

export default CustomCursor
