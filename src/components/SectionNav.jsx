import React from 'react'

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

const SectionNav = ({ activeSection, onNavigate }) => {
  return (
    <nav className="flex flex-wrap gap-1 justify-end mb-3 pb-3 border-b border-border shrink-0">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => onNavigate(id)}
          className={`nav-link ${activeSection === id ? 'nav-link-active' : 'hover:text-text border border-transparent'}`}
        >
          {label}
        </button>
      ))}
    </nav>
  )
}

export default SectionNav
