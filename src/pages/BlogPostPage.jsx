import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import BlogArticleBody from '../components/BlogArticleBody'
import BlogShell from '../components/BlogShell'
import { formatBlogDate, getBlogPost } from '../data/blog'

const basePath = import.meta.env.BASE_URL

const BlogPostPage = ({ onToggleTheme }) => {
  const { slug } = useParams()
  const post = getBlogPost(slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <BlogShell activeSlug={slug} onToggleTheme={onToggleTheme} backTo="/blog" backLabel="BLOG INDEX">
      <article className="blog-article">
        <p className="dossier-marker blog-article-date">{formatBlogDate(post.date)}</p>
        <h1>{post.title}</h1>
        <p className="blog-article-lede">{post.excerpt}</p>
        <BlogArticleBody blocks={post.body} basePath={basePath} />
      </article>
    </BlogShell>
  )
}

export default BlogPostPage
