import React, { useState } from 'react'
import { Camera } from 'lucide-react'
import ImageLightbox from './ImageLightbox'

const basePath = import.meta.env.BASE_URL

// Add photos to public/gallery/ and list them here
const galleryImages = [
  { src: `${basePath}gallery/1.jpg`, alt: 'Seminar photo', caption: 'Tech Seminar' },
  { src: `${basePath}gallery/2.jpg`, alt: 'Event photo', caption: 'Developer Meetup' },
  { src: `${basePath}gallery/3.jpg`, alt: 'Workshop photo', caption: 'Workshop' },
  { src: `${basePath}gallery/4.jpg`, alt: 'Conference photo', caption: 'Conference' },
  { src: `${basePath}gallery/5.jpg`, alt: 'Seminar photo', caption: 'Seminar' },
  { src: `${basePath}gallery/6.jpg`, alt: 'Event photo', caption: 'Networking' },
]

const GalleryCard = ({ src, alt, caption, onClick }) => {
  const [failed, setFailed] = useState(false)

  return (
    <button
      type="button"
      onClick={onClick}
      className="text-left group w-full"
    >
      <div className="aspect-[4/3] rounded-lg overflow-hidden bg-card-hover">
        {!failed ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-1 text-muted p-2">
            <Camera size={20} className="text-primary/40" />
            <span className="text-[10px] text-center leading-tight">{caption}</span>
          </div>
        )}
      </div>
      <p className="text-xs font-medium text-text mt-1 truncate">{caption}</p>
    </button>
  )
}

const GallerySection = () => {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div>
      <h2 className="section-title">Gallery</h2>
      <div className="section-underline" />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {galleryImages.map((img) => (
          <GalleryCard
            key={img.src}
            {...img}
            onClick={() => setLightbox(img)}
          />
        ))}
      </div>

      {lightbox && (
        <ImageLightbox
          image={lightbox.src}
          title={lightbox.caption}
          onClose={() => setLightbox(null)}
          hideFooter
        />
      )}
    </div>
  )
}

export default GallerySection
