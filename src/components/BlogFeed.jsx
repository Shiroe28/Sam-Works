import React from 'react'
import { Link } from 'react-router-dom'
import { formatBlogDate, sortBlogPosts } from '../data/blog'

const BlogCard = ({ post, activeSlug }) => {
  const isActive = activeSlug === post.slug

  return (
    <article className={`blog-card${isActive ? ' blog-card-active' : ''}`}>
      <Link to={`/blog/${post.slug}`} className="blog-card-link">
        <time dateTime={post.date} className="blog-card-date">
          {formatBlogDate(post.date)}
        </time>
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <span className="blog-card-continue">Continue reading</span>
      </Link>
    </article>
  )
}

const BlogFeed = ({ items, activeSlug, showViewAll = false, viewAllTo = '/blog' }) => {
  const sorted = sortBlogPosts(items)

  return (
    <div className="blog-feed-block">
      {showViewAll ? (
        <div className="blog-feed-toolbar">
          <Link to={viewAllTo} className="blog-feed-view-all">
            All field notes →
          </Link>
        </div>
      ) : null}
      <div className="blog-feed">
        {sorted.map((post) => (
          <BlogCard key={post.slug} post={post} activeSlug={activeSlug} />
        ))}
      </div>
    </div>
  )
}

export default BlogFeed
