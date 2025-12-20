import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Landing from './pages/Landing'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ValuePropsPage from './pages/ValuePropsPage'

function App() {
  return (
    <Router>
      <CustomCursor />
      <div className="relative overflow-hidden">
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/value" element={<ValuePropsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
