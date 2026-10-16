import React from 'react'
import BlogFeed from '../components/BlogFeed'
import BlogShell from '../components/BlogShell'
import { blogPosts } from '../data/blog'

const BlogAllPage = ({ onToggleTheme }) => (
  <BlogShell onToggleTheme={onToggleTheme}>
    <header className="blog-index-intro">
      <p className="dossier-marker">Field notes</p>
      <h1>
        Random things
        <br />
        <i>that happen.</i>
      </h1>
      <p className="blog-index-blurb">
        Small updates, dev diary bits, and whatever else is on my mind. Pick an entry from the list or
        start reading below.
      </p>
    </header>
    <BlogFeed items={blogPosts} />
  </BlogShell>
)

export default BlogAllPage
