import React from 'react'
import { FileText, ExternalLink } from 'lucide-react'

const basePath = import.meta.env.BASE_URL

const achievements = [
  {
    title: 'Introduction to IoT and Digital Transformation',
    issuer: 'St. Dominic College of Asia · Cisco Networking Academy',
    date: 'Feb 2026',
    pdf: `${basePath}certificates/introduction-to-iot.pdf`,
  },
  {
    title: 'Introduction to AI Agents',
    issuer: 'DataCamp',
    date: 'Feb 2026',
    pdf: `${basePath}certificates/certificate.pdf`,
  },
  {
    title: 'Introduction to GitHub Concepts',
    issuer: 'DataCamp',
    date: 'Feb 2026',
    pdf: `${basePath}certificates/certificate-1.pdf`,
  },
  {
    title: 'Artificial Intelligence',
    issuer: 'Certified Professional',
    date: 'Jun 2026',
    pdf: `${basePath}certificates/cert-72091353645.pdf`,
  },
  {
    title: 'PowerPoint 2019 Associate',
    issuer: 'Microsoft Office Specialist',
    date: 'May 2024',
    pdf: `${basePath}certificates/cert-69991327421.pdf`,
  },
]

const AchievementCard = ({ item }) => {
  return (
    <a
      href={item.pdf}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-4 p-4 rounded-xl border border-border hover:border-primary/40 transition-colors"
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-card-hover border border-border shrink-0 flex items-center justify-center group-hover:border-primary/30 transition-colors">
        <FileText size={26} className="text-primary/70 group-hover:text-primary transition-colors" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold text-text mb-1 group-hover:text-primary transition-colors leading-snug">
          {item.title}
        </h3>
        <p className="text-xs text-muted mb-1">{item.issuer}</p>
        <p className="text-xs text-primary/80">{item.date}</p>
      </div>
      <ExternalLink
        size={16}
        className="text-muted shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
      />
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
