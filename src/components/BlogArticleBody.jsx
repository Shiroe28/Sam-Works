import React from 'react'

/** @param {{ text: string, href?: string, external?: boolean }} segment */
function renderSegment(segment, index) {
  if (!segment.href) {
    return <React.Fragment key={index}>{segment.text}</React.Fragment>
  }
  const external = segment.external !== false
  return (
    <a
      key={index}
      href={segment.href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {segment.text}
    </a>
  )
}

/**
 * @param {import('../data/blog').BlogBodyBlock[] | undefined} blocks
 * @param {string} basePath
 */
export default function BlogArticleBody({ blocks, basePath }) {
  if (!blocks?.length) return null

  return (
    <div className="blog-article-body">
      {blocks.map((block, index) => {
        if (block.type === 'figure') {
          const src = block.src.startsWith('http') ? block.src : `${basePath}${block.src}`
          return (
            <figure key={index} className="blog-figure">
              <img src={src} alt={block.alt} loading="lazy" />
              {block.caption ? <figcaption>{block.caption}</figcaption> : null}
            </figure>
          )
        }

        if (block.type === 'heading') {
          return (
            <h2 key={index} className="blog-article-h2">
              {block.text}
            </h2>
          )
        }

        if (block.type === 'paragraph') {
          return (
            <p key={index}>
              {block.segments.map((segment, segmentIndex) =>
                renderSegment(segment, segmentIndex),
              )}
            </p>
          )
        }

        if (block.type === 'list') {
          return (
            <ul key={index} className="blog-article-list">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        }

        return null
      })}
    </div>
  )
}
