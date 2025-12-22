import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={24} />, href: 'https://github.com/Shiroe28', label: 'GitHub' },
    { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/sam-richmond-go-25b0bb352', label: 'LinkedIn' },
    { icon: <Instagram size={24} />, href: 'https://www.facebook.com/githubshiroe28', label: 'Facebook' },
    { icon: <Mail size={24} />, href: 'mailto:markkevinromero.works@gmail.com', label: 'Email' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 md:py-12 px-4 sm:px-8 lg:px-16 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
        {/* Left - Logo and Email */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Sam Works
            </h3>
            <div className="flex gap-4 mb-4">
              {socialLinks.slice(0, 4).map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-muted hover:text-primary transition-colors duration-200"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <a
              href="mailto:sam.richmond.go@gmail.com"
              className="text-sm text-muted hover:text-primary transition-colors duration-200 block mb-2"
            >
              sam.richmond.go@gmail.com
            </a>
            <p className="text-sm text-muted">
              © {currentYear} Sam Works. All rights reserved.
            </p>
          </motion.div>

          {/* Right - Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="hidden md:block md:text-right"
          >
            <h4 className="text-sm font-bold text-text mb-4 uppercase tracking-wider">Socials</h4>
            <div className="space-y-2">
              <a href="https://github.com/Shiroe28" target="_blank" rel="noopener noreferrer" className="block text-muted hover:text-primary transition-colors duration-200">Github</a>
              <a href="https://www.facebook.com/githubshiroe28" target="_blank" rel="noopener noreferrer" className="block text-muted hover:text-primary transition-colors duration-200">Facebook</a>
              <a href="https://www.linkedin.com/in/sam-richmond-go-25b0bb352" target="_blank" rel="noopener noreferrer" className="block text-muted hover:text-primary transition-colors duration-200">LinkedIn</a>
            </div>
          </motion.div>
        </div>
      </footer>
    )
  }
  
  export default Footer
