import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'

const basename = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '') || undefined

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/value" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
