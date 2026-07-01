import React, { useState } from 'react'
import { Send } from 'lucide-react'
import LocationMap from './LocationMap'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
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
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          'Business/App Name': formData.businessName || 'N/A',
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _captcha: 'false',
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', businessName: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <div>
      <h2 className="section-title">Contact</h2>
      <div className="section-underline" />
      <p className="text-sm text-muted mb-6 max-w-xl">
        Have a project in mind or just want to connect? I'm available for freelance projects, partnerships, or full-time opportunities.
      </p>

      <LocationMap />

      <h3 className="text-sm uppercase tracking-widest text-muted mt-8 mb-4">Contact Form</h3>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs text-muted mb-1.5">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="businessName" className="block text-xs text-muted mb-1.5">Web/App Name</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="input-field"
              placeholder="ex. Hakbang AI Powered"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-xs text-muted mb-1.5">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="you@domain.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs text-muted mb-1.5">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="input-field resize-none"
            placeholder="Available for collaborations and freelance opportunities..."
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors ${
              isSubmitting
                ? 'bg-muted/30 text-muted cursor-not-allowed'
                : 'bg-primary hover:bg-accent text-white'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <Send size={16} />
          </button>

          {submitStatus === 'success' && (
            <p className="text-xs text-green-400">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-xs text-red-400">Failed to send. Email sam.richmond.go@gmail.com directly.</p>
          )}
        </div>
      </form>

      <p className="text-xs text-muted mt-10 pt-6 border-t border-border">
        © {new Date().getFullYear()} Sam Richmond Go. All rights reserved.
      </p>
    </div>
  )
}

export default ContactSection
