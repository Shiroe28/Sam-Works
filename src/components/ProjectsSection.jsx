import React, { useState } from 'react'
import { ZoomIn } from 'lucide-react'
import ImageLightbox from './ImageLightbox'

const basePath = import.meta.env.BASE_URL

const projects = [
  {
    title: 'Aura',
    description: 'Personal development app with todo lists, goal tracking, and daily journaling.',
    image: `${basePath}Aura.png`,
    category: 'Mobile',
    liveLink: '#',
  },
  {
    title: 'Hakbang',
    description: 'IT career guide with admin dashboard and AI-powered recommendations.',
    image: `${basePath}Hakbang.png`,
    category: 'Mobile',
    liveLink: '#',
  },
  {
    title: 'Equity',
    description: 'Shop analytics dashboard for real-time business insights and profit tracking.',
    image: `${basePath}Equity.png`,
    category: 'Mobile',
    liveLink: '#',
  },
  {
    title: 'REVU',
    description: 'Mobile flashcard app for effective learning with deck management.',
    image: `${basePath}Revu.png`,
    category: 'Mobile',
    liveLink: '#',
  },
  {
    title: 'PersoFit',
    description: 'Full-stack fitness tracker with workout plans and progress analytics.',
    image: `${basePath}Persofit.png`,
    category: 'Website',
    liveLink: '#',
  },
]

const filters = ['All', 'Mobile', 'Website']

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <div>
      <h2 className="section-title">Projects</h2>
      <div className="section-underline" />

      <div className="flex flex-wrap gap-3 sm:gap-4 mb-4">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`text-sm transition-colors ${
              activeFilter === filter
                ? 'text-primary font-medium'
                : 'text-muted hover:text-text'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {filteredProjects.map((project) => (
          <article key={project.title} className="group">
            <button
              type="button"
              onClick={() => setLightbox(project)}
              className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-card-hover mb-1.5 cursor-pointer"
              aria-label={`View ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <ZoomIn
                  size={22}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </button>
            <h3 className="font-medium text-text text-sm leading-tight">{project.title}</h3>
            <p className="text-xs text-muted mt-0.5">{project.category}</p>
          </article>
        ))}
      </div>

      {lightbox && (
        <ImageLightbox
          image={lightbox.image}
          title={lightbox.title}
          link={lightbox.liveLink}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  )
}

export default ProjectsSection
