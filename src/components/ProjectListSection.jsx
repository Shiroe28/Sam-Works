import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import ImageLightbox from './ImageLightbox'
import {
  projectHref,
  projectImageUrl,
  projectLinkLabel,
} from '../data/projects'

const ProjectRow = ({ project, basePath, onPreviewImage }) => {
  const href = projectHref(project)
  const linkLabel = projectLinkLabel(project)
  const imageUrl = projectImageUrl(project, basePath)

  const handleClick = (event) => {
    if (href) return
    if (imageUrl) {
      event.preventDefault()
      onPreviewImage({ title: project.title, image: imageUrl, link: href })
    }
  }

  const inner = (
    <>
      <div className="project-row-main">
        <div className="project-row-title-line">
          <h3>{project.title}</h3>
          {project.badge ? <span className="project-badge">{project.badge}</span> : null}
        </div>
        <p className="project-row-desc">{project.description}</p>
      </div>
      {linkLabel ? (
        <span className="project-row-link">
          {linkLabel}
          <ArrowUpRight size={14} aria-hidden />
        </span>
      ) : imageUrl ? (
        <span className="project-row-link project-row-link-muted">
          Preview
          <ArrowUpRight size={14} aria-hidden />
        </span>
      ) : null}
    </>
  )

  if (href) {
    return (
      <a
        className="project-row"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    )
  }

  return (
    <button
      type="button"
      className="project-row"
      onClick={handleClick}
      disabled={!imageUrl}
    >
      {inner}
    </button>
  )
}

const ProjectListSection = ({
  items,
  showViewAll = false,
  viewAllTo = '/projects',
}) => {
  const basePath = import.meta.env.BASE_URL
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="project-list-block">
      <div className="project-list-header">
        <h2 className="project-list-heading">Projects</h2>
        {showViewAll ? (
          <Link to={viewAllTo} className="project-list-view-all">
            View All
            <ArrowUpRight size={14} aria-hidden />
          </Link>
        ) : null}
      </div>

      <div className="project-list">
        {items.map((project) => (
          <ProjectRow
            key={project.slug}
            project={project}
            basePath={basePath}
            onPreviewImage={setLightbox}
          />
        ))}
      </div>

      {lightbox ? (
        <ImageLightbox
          image={lightbox.image}
          title={lightbox.title}
          link={lightbox.link}
          onClose={() => setLightbox(null)}
        />
      ) : null}
    </div>
  )
}

export default ProjectListSection
