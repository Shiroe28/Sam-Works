import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://formsubmit.co/ajax/sam.richmond.go@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          'Business/App Name': formData.businessName || 'N/A',
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _captcha: 'false'
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', businessName: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className="py-12 md:py-16 px-4 sm:px-8 lg:px-16 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-secondary">Let's Work Together</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto px-4">
            Have a project in mind or just want to connect? I'm open to freelance, collaboration, or full-time opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Left Side - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
              
              {/* Key Icon SVG */}
              <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                {/* Key Body */}
                <circle cx="100" cy="150" r="60" stroke="#8B5CF6" strokeWidth="4" fill="none" opacity="0.3"/>
                <circle cx="100" cy="150" r="45" stroke="#8B5CF6" strokeWidth="3" fill="none" opacity="0.5"/>
                <circle cx="100" cy="150" r="25" fill="#8B5CF6" opacity="0.7"/>
                
                {/* Key Shaft */}
                <rect x="140" y="145" width="180" height="10" fill="#8B5CF6" opacity="0.6" rx="5"/>
                
                {/* Key Teeth */}
                <rect x="240" y="135" width="20" height="30" fill="#8B5CF6" opacity="0.7" rx="3"/>
                <rect x="270" y="125" width="20" height="40" fill="#8B5CF6" opacity="0.7" rx="3"/>
                <rect x="300" y="135" width="20" height="30" fill="#8B5CF6" opacity="0.7" rx="3"/>
                
                {/* Dotted Trail */}
                <circle cx="350" cy="100" r="4" fill="#A78BFA" opacity="0.6"/>
                <circle cx="365" cy="85" r="4" fill="#A78BFA" opacity="0.5"/>
                <circle cx="380" cy="70" r="4" fill="#A78BFA" opacity="0.4"/>
                
                <circle cx="350" cy="200" r="4" fill="#A78BFA" opacity="0.6"/>
                <circle cx="365" cy="215" r="4" fill="#A78BFA" opacity="0.5"/>
                <circle cx="380" cy="230" r="4" fill="#A78BFA" opacity="0.4"/>
                
                <circle cx="40" cy="100" r="4" fill="#A78BFA" opacity="0.6"/>
                <circle cx="25" cy="85" r="4" fill="#A78BFA" opacity="0.5"/>
                <circle cx="10" cy="70" r="4" fill="#A78BFA" opacity="0.4"/>
              </svg>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-text">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all text-text placeholder:text-muted"
                  placeholder="ex. Anonymous"
                />
              </div>

              {/* Business Name */}
              <div>
                <label htmlFor="businessName" className="block text-sm font-semibold mb-2 text-text">
                  Web/App Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all text-text placeholder:text-muted"
                  placeholder="ex. Hakbang AI Powered"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-text">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all text-text placeholder:text-muted"
                placeholder="ex. Anonymous@domain.com"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-text">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all text-text resize-none placeholder:text-muted"
                placeholder="Looking for a collaboration, freelance work, or just want to say hi? Type away!"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full sm:w-auto px-8 py-4 rounded-full text-background font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                isSubmitting 
                  ? 'bg-muted cursor-not-allowed' 
                  : 'bg-secondary hover:bg-primary'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={20} />
            </motion.button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
              >
                ✗ Failed to send message. Please try again or email me directly at sam.richmond.go@gmail.com
              </motion.div>
            )}
          </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
