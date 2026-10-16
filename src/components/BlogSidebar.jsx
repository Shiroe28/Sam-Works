import React from 'react'
import { Link } from 'react-router-dom'
import { formatBlogDate, sortBlogPosts } from '../data/blog'

const BlogSidebar = ({ posts, activeSlug }) => {
  const sorted = sortBlogPosts(posts)

  return (
    <aside className="blog-sidebar" aria-label="Blog entries">
      <p className="dossier-marker blog-sidebar-label">All entries</p>
      <nav className="blog-sidebar-nav">
        {sorted.map((post) => {
          const isActive = activeSlug === post.slug
          return (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className={`blog-sidebar-link${isActive ? ' blog-sidebar-link-active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
              <span>{post.title}</span>
            </Link>
          )
        })}
      </nav>
      <Link to="/blog" className="blog-sidebar-index">
        View as index
      </Link>
    </aside>
  )
}

export default BlogSidebar
