import React, { useState } from 'react'
import { FileText, ExternalLink } from 'lucide-react'

const basePath = import.meta.env.BASE_URL

const achievements = [
  {
    title: 'Introduction to IoT and Digital Transformation',
    issuer: 'St. Dominic College of Asia · Cisco Networking Academy',
    date: 'Feb 2026',
    pdf: `${basePath}certificates/introduction-to-iot.pdf`,
    image: `${basePath}certificates/introduction-to-iot.png`,
  },
  {
    title: 'Introduction to AI Agents',
    issuer: 'DataCamp',
    date: 'Feb 2026',
    pdf: `${basePath}certificates/certificate.pdf`,
    image: `${basePath}certificates/certificate.png`,
  },
  {
    title: 'Introduction to GitHub Concepts',
    issuer: 'DataCamp',
    date: 'Feb 2026',
    pdf: `${basePath}certificates/certificate-1.pdf`,
    image: `${basePath}certificates/certificate-1.png`,
  },
  {
    title: 'Artificial Intelligence',
    issuer: 'Certified Professional',
    date: 'Jun 2026',
    pdf: `${basePath}certificates/cert-72091353645.pdf`,
    image: `${basePath}certificates/cert-72091353645.png`,
  },
  {
    title: 'PowerPoint 2019 Associate',
    issuer: 'Microsoft Office Specialist',
    date: 'May 2024',
    pdf: `${basePath}certificates/cert-69991327421.pdf`,
    image: `${basePath}certificates/cert-69991327421.png`,
  },
]

const AchievementCard = ({ item }) => {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <a
      href={item.pdf}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-border hover:border-primary/40 transition-colors overflow-hidden"
    >
      <div className="aspect-[4/3] bg-card-hover overflow-hidden border-b border-border">
        {!imageFailed ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FileText size={32} className="text-primary/50" />
          </div>
        )}
      </div>
      <div className="p-3 flex gap-2 items-start">
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold text-text mb-0.5 group-hover:text-primary transition-colors leading-snug">
            {item.title}
          </h3>
          <p className="text-xs text-muted">{item.issuer}</p>
          <p className="text-xs text-primary/80 mt-0.5">{item.date}</p>
        </div>
        <ExternalLink
          size={14}
          className="text-muted shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </div>
    </a>
  )
}

const AchievementsSection = () => {
  return (
    <div>
      <h2 className="section-title">Achievements</h2>
      <div className="section-underline" />
      <p className="text-sm text-muted mb-5 max-w-xl">
        Certifications and milestones — click to view certificate.
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        {achievements.map((item) => (
          <AchievementCard key={item.pdf} item={item} />
        ))}
      </div>
    </div>
  )
}

export default AchievementsSection
