import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const textToType = 'digital experiences'
  const typingSpeed = 100

  useEffect(() => {
    if (currentIndex < textToType.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + textToType[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else if (!isComplete) {
      setIsComplete(true)
    }
  }, [currentIndex, isComplete])

  return (
    <section className="relative flex-1 flex flex-col justify-center pt-20 px-8 sm:px-12 lg:px-16">
      {/* Glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-primary opacity-20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Creating{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {displayText}
              {!isComplete && <span className="animate-pulse">|</span>}
            </span>
            <br />
            that connects & Convert.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-muted mb-12 max-w-3xl mx-auto"
        >
          Full-stack developer crafting seamless web experiences with modern technologies
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => navigate('/value')}
            className="px-8 py-4 bg-primary hover:bg-secondary rounded-full text-text font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Let's Connect
          </button>
          <button
            onClick={() => navigate('/projects')}
            className="px-8 py-4 glass hover:bg-primary/10 rounded-full text-text font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center group"
          >
            View My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
