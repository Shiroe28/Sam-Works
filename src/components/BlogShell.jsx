import React from 'react'
import { ArrowLeft, ArrowUpRight, Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'
import BlogSidebar from './BlogSidebar'
import { blogPosts } from '../data/blog'

const BlogShell = ({
  activeSlug,
  onToggleTheme,
  backTo = '/#blog',
  backLabel = 'BACK TO PORTFOLIO',
  children,
}) => (
  <main className="dossier blog-shell">
    <header className="dossier-header">
      <Link to="/" className="dossier-mark">
        SRG<span>•</span>
      </Link>
      <p>BLOG</p>
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
        <Link to={backTo}>
          {backLabel} <ArrowLeft size={14} />
        </Link>
      </div>
    </header>

    <div className="blog-layout">
      <BlogSidebar posts={blogPosts} activeSlug={activeSlug} />
      <div className="blog-main">
        <div className="blog-main-inner">{children}</div>
      </div>
    </div>

    <footer className="dossier-footer">
      <p>© {new Date().getFullYear()} Sam Richmond Go</p>
      <Link to="/contact">
        Start a conversation <ArrowUpRight size={16} />
      </Link>
    </footer>
  </main>
)

export default BlogShell
