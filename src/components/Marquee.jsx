import React from 'react'

const Marquee = () => {
  const skills = [
    'FRONTEND DEVELOPMENT',
    'FULL-STACK',
    'WEB DESIGN',
    'UI/UX',
    'REACT',
    'NODE.JS',
    'TAILWIND CSS',
  ]

  return (
    <div className="relative overflow-hidden bg-border py-6 border-y border-border">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set */}
        {skills.map((skill, index) => (
          <span
            key={`first-${index}`}
            className="text-xl sm:text-2xl font-bold text-muted mx-8"
          >
            {skill} •
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {skills.map((skill, index) => (
          <span
            key={`second-${index}`}
            className="text-xl sm:text-2xl font-bold text-muted mx-8"
          >
            {skill} •
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
