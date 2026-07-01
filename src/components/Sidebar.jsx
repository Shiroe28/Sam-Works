import React, { forwardRef } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from 'lucide-react'

const basePath = import.meta.env.BASE_URL

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sam.richmond.go@gmail.com',
    href: 'mailto:sam.richmond.go@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '0960 202 2402',
    href: 'tel:+639602022402',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Imus, Cavite, Philippines',
  },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/Shiroe28', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sam-richmond-go-25b0bb352', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://www.facebook.com/githubshiroe28', label: 'Facebook' },
]

const Sidebar = forwardRef(function Sidebar(_, ref) {
  return (
    <aside
      ref={ref}
      className="card p-5 flex flex-col items-center text-center w-full lg:w-72 shrink-0 lg:sticky lg:top-5 lg:self-start"
    >
      <div className="w-full max-w-[220px] sm:max-w-[240px] aspect-square rounded-xl overflow-hidden mb-4 border border-border">
        <img
          src={`${basePath}sam.jpg`}
          alt="Sam Richmond Go"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <h1 className="text-lg sm:text-xl font-bold text-text tracking-tight leading-tight">
        Sam Richmond Go
      </h1>
      <span className="mt-1.5 px-3 py-1 text-[11px] text-muted border border-border rounded-full">
        Full-Stack Developer
      </span>

      <div className="w-full h-px bg-border my-4" />

      <ul className="w-full space-y-3.5 text-left">
        {contactItems.map(({ icon: Icon, label, value, href }) => (
          <li key={label} className="flex items-start gap-2.5">
            <div className="icon-box !w-9 !h-9">
              <Icon size={16} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-muted mb-0.5">{label}</p>
              {href ? (
                <a href={href} className="text-xs text-text hover:text-primary transition-colors truncate block">
                  {value}
                </a>
              ) : (
                <p className="text-xs text-text">{value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex gap-2 mt-auto pt-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="icon-box !w-9 !h-9 hover:border-primary/50 hover:text-secondary transition-colors"
          >
            <Icon size={15} />
          </a>
        ))}
      </div>
    </aside>
  )
})

export default Sidebar
