import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'

const basename = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '') || undefined

const PageTransition = ({ children }) => (
  <motion.div
    className="page-transition"
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

const AppRoutes = ({ onToggleTheme }) => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home onToggleTheme={onToggleTheme} /></PageTransition>} />
        <Route path="/about" element={<PageTransition><Home onToggleTheme={onToggleTheme} /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Home onToggleTheme={onToggleTheme} /></PageTransition>} />
        <Route path="/value" element={<PageTransition><Home onToggleTheme={onToggleTheme} /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage onToggleTheme={onToggleTheme} /></PageTransition>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [isNightMode, setIsNightMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme !== null ? savedTheme === 'night' : true
  })
  const toggleTheme = () => {
    const updateTheme = () => setIsNightMode((value) => !value)
    if (document.startViewTransition) {
      document.startViewTransition(updateTheme)
    } else {
      updateTheme()
    }
  }

  useEffect(() => {
    document.documentElement.classList.toggle('theme-night', isNightMode)
    localStorage.setItem('theme', isNightMode ? 'night' : 'day')
  }, [isNightMode])

  return (
    <Router basename={basename} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppRoutes onToggleTheme={toggleTheme} />
    </Router>
  )
}

export default App
