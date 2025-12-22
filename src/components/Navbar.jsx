import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigate = (path) => {
    navigate(path)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-4' : 'py-4 md:py-6'
        }`}
      >
        <div className="px-4 sm:px-8 lg:px-16 flex items-center justify-between">
          <motion.button
            onClick={() => handleNavigate('/')}
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sam Works
          </motion.button>

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text p-2"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-40 w-full sm:w-80 glass backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-6">
              <motion.button
                onClick={() => handleNavigate('/about')}
                className="text-text hover:text-primary transition-colors duration-200 font-medium py-4 text-left text-xl border-b border-border"
                whileTap={{ scale: 0.95 }}
              >
                About Me
              </motion.button>
              <motion.button
                onClick={() => handleNavigate('/projects')}
                className="text-text hover:text-primary transition-colors duration-200 font-medium py-4 text-left text-xl border-b border-border"
                whileTap={{ scale: 0.95 }}
              >
                Projects
              </motion.button>
              <motion.button
                onClick={() => handleNavigate('/value')}
                className="mt-6 px-6 py-3 bg-primary hover:bg-secondary rounded-full text-text transition-colors duration-200 font-medium text-center text-lg"
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
