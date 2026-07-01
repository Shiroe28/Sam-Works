import React, { useEffect } from 'react'
import { X } from 'lucide-react'

const ImageLightbox = ({ image, title, link, onClose, hideFooter = false }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-muted hover:text-text transition-colors"
          aria-label="Close"
        >
          <X size={22} />
        </button>

        <div className="card overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full max-h-[80vh] object-contain bg-background"
          />
          {!hideFooter && (
            <div className="px-4 py-3 flex items-center justify-between gap-4 border-t border-border">
              <h3 className="font-semibold text-text text-sm">{title}</h3>
              {link && link !== '#' ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:text-secondary transition-colors shrink-0"
                >
                  View Project →
                </a>
              ) : (
                <span className="text-xs text-muted shrink-0">Demo link coming soon</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ImageLightbox
