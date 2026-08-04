import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'

const basename = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '') || undefined

function App() {
  const [isNightMode, setIsNightMode] = useState(() => localStorage.getItem('theme') === 'night')
  const toggleTheme = () => setIsNightMode((value) => !value)

  useEffect(() => {
    document.documentElement.classList.toggle('theme-night', isNightMode)
    localStorage.setItem('theme', isNightMode ? 'night' : 'day')
  }, [isNightMode])

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home onToggleTheme={toggleTheme} />} />
        <Route path="/about" element={<Home onToggleTheme={toggleTheme} />} />
        <Route path="/projects" element={<Home onToggleTheme={toggleTheme} />} />
        <Route path="/value" element={<Home onToggleTheme={toggleTheme} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
