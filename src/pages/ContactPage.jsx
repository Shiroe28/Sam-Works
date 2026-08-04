import React, { useState } from 'react'
import { ArrowLeft, ArrowUpRight, Mail, Send } from 'lucide-react'
import { Link } from 'react-router-dom'

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', projectType: '', budget: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => setFormData((current) => ({ ...current, [event.target.name]: event.target.value }))

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch('https://formsubmit.co/ajax/sam.richmond.go@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Name: formData.name,
          Company: formData.company || 'Not provided',
          Email: formData.email,
          'Project type': formData.projectType || 'Not specified',
          Budget: formData.budget || 'Not specified',
          Message: formData.message,
          _subject: `New portfolio enquiry from ${formData.name}`,
          _captcha: 'false',
        }),
      })
      if (!response.ok) throw new Error('Unable to send')
      setStatus('success')
      setFormData({ name: '', company: '', email: '', projectType: '', budget: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return <main className="contact-page dossier">
    <header className="dossier-header">
      <Link to="/" className="dossier-mark">SRG<span>•</span></Link>
      <p>NEW PROJECT ENQUIRY</p>
      <div className="header-actions"><Link to="/">BACK <ArrowLeft size={14} /></Link></div>
    </header>

    <section className="contact-intro">
      <div><p className="dossier-marker">05 — START A CONVERSATION</p><h1>Let&apos;s make<br /><i>something useful.</i></h1></div>
      <p>Tell me a little about your project. Your details go directly to my email, and I&apos;ll get back to you as soon as I can.</p>
    </section>

    <section className="contact-layout">
      <aside className="contact-aside"><p className="dossier-marker">DIRECT LINE</p><a href="mailto:sam.richmond.go@gmail.com"><Mail size={16} /> sam.richmond.go@gmail.com <ArrowUpRight size={14} /></a><p>For freelance work, product ideas, collaborations, and full-time opportunities.</p></aside>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>Name<input name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" /></label>
          <label>Email<input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" /></label>
          <label>Company / organization <span>optional</span><input name="company" value={formData.company} onChange={handleChange} placeholder="Company name" /></label>
          <label>Project type <span>optional</span><input name="projectType" value={formData.projectType} onChange={handleChange} placeholder="Website, mobile app, etc." /></label>
        </div>
        <label>Budget range <span>optional</span><input name="budget" value={formData.budget} onChange={handleChange} placeholder="Your estimated budget" /></label>
        <label>Tell me about the project<textarea name="message" value={formData.message} onChange={handleChange} required rows="6" placeholder="What are you looking to build? Include goals, timing, and anything else that helps." /></label>
        <button className="send-button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'SENDING…' : 'SEND ENQUIRY'} <Send size={16} /></button>
        {status === 'success' && <p className="form-status success">Thanks — your message has been sent directly to Sam&apos;s email.</p>}
        {status === 'error' && <p className="form-status error">Something went wrong. Please email sam.richmond.go@gmail.com directly.</p>}
      </form>
    </section>
  </main>
}

export default ContactPage
