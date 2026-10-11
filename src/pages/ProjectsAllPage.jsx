import React from 'react'
import { ArrowLeft, ArrowUpRight, Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectListSection from '../components/ProjectListSection'
import { projects } from '../data/projects'

const ProjectsAllPage = ({ onToggleTheme }) => (
  <main className="dossier projects-all-page">
    <header className="dossier-header">
      <Link to="/" className="dossier-mark">
        SRG<span>•</span>
      </Link>
      <p>ALL PROJECTS</p>
      <div className="header-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label="Toggle light and dark mode"
          title="Toggle theme"
        >
          <Sun className="theme-icon theme-icon-sun" size={15} />
          <Moon className="theme-icon theme-icon-moon" size={14} />
        </button>
        <Link to="/#projects">
          BACK TO PORTFOLIO <ArrowLeft size={14} />
        </Link>
      </div>
    </header>

    <section className="projects-all-intro section-banner">
      <p className="dossier-marker">02 — SELECTED WORK</p>
      <h2>
        Everything I&apos;ve
        <br />
        <span>shipped.</span>
      </h2>
      <p>
        Team builds, mobile apps, web products, and experiments. Click a row to open a live link or
        preview screenshots.
      </p>
    </section>

    <section className="work-section projects-all-list">
      <ProjectListSection items={projects} showViewAll={false} />
    </section>

    <footer className="dossier-footer">
      <p>© {new Date().getFullYear()} Sam Richmond Go</p>
      <Link to="/contact">
        Start a conversation <ArrowUpRight size={16} />
      </Link>
    </footer>
  </main>
)

export default ProjectsAllPage
