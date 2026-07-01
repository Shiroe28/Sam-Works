import React from 'react'
import { Code2, Users, CheckCircle } from 'lucide-react'

const values = [
  {
    icon: Code2,
    title: 'Engineering With Intent',
    description: 'Every line of code serves performance, clarity, and maintainability.',
  },
  {
    icon: Users,
    title: 'Easy to Work With',
    description: 'Fast replies, clear expectations, and zero guesswork.',
  },
  {
    icon: CheckCircle,
    title: 'Built to Ship',
    description: 'Production-ready results, tested and ready to scale.',
  },
]

const AboutSection = () => {
  return (
    <div>
      <h2 className="section-title">About Me</h2>
      <div className="section-underline" />

      <div className="space-y-4 text-muted text-base leading-relaxed mb-6 max-w-2xl">
        <p>
          I'm a <span className="text-text font-medium">Full-Stack Developer</span> passionate
          about turning ideas into experiences. With expertise in modern web technologies,
          I create scalable, performant applications that solve real-world problems.
        </p>
        <p>
          From concept to deployment, I focus on writing clean, maintainable code while
          delivering exceptional user experiences. Whether it's a dynamic web app or a
          responsive landing page, I bring ideas to life with precision and creativity.
        </p>
      </div>

      <h3 className="text-xs uppercase tracking-widest text-muted mb-3">What You Get</h3>
      <div className="grid sm:grid-cols-3 gap-3">
        {values.map(({ icon: Icon, title, description }) => (
          <div key={title} className="p-4 rounded-lg border border-border hover:border-primary/30 transition-colors">
            <Icon size={20} className="text-primary mb-2.5" />
            <h4 className="text-sm font-semibold text-text mb-1.5">{title}</h4>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutSection
