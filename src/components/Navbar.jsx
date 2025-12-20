import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'py-6'
      }`}
    >
      <div className="px-8 sm:px-12 lg:px-16 flex items-center justify-between">
        <motion.button
          onClick={() => navigate('/')}
          className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block"
          whileHover={{ scale: 1.05 }}
        >
          Sam Works
        </motion.button>

        {/* Navigation Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => navigate('/about')}
            className="text-text hover:text-primary transition-colors duration-200 font-medium"
          >
            About Me
          </button>
          <button
            onClick={() => navigate('/projects')}
            className="text-text hover:text-primary transition-colors duration-200 font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => navigate('/value')}
            className="px-6 py-2 bg-primary hover:bg-secondary rounded-full text-text transition-colors duration-200 font-medium"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
