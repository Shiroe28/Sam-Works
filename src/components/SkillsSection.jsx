import React from 'react'

const techCategories = [
  {
    name: 'Web',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Vite', 'Node.js', 'Express.js'],
  },
  {
    name: 'Mobile',
    techs: ['Flutter', 'Dart', 'React Native', 'Expo', 'Java', 'C#', 'Android Studio'],
  },
  {
    name: 'Backend & Database',
    techs: ['PHP', 'MySQL', 'MongoDB', 'PostgreSQL', 'Firebase', 'Supabase', 'SQLite'],
  },
  {
    name: 'Tools & APIs',
    techs: ['VS Code', 'Git', 'GitHub', 'OpenAI API', 'Postman', 'Vercel'],
  },
]

const SkillsSection = () => {
  return (
    <div>
      <h2 className="section-title">Tech Stack</h2>
      <div className="section-underline" />

      <div className="space-y-5">
        {techCategories.map((category) => (
          <div
            key={category.name}
            className="rounded-lg border border-border/70 bg-card-hover/40 px-4 py-3.5"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1 h-3 rounded-full bg-primary" />
              <h3 className="text-[10px] uppercase tracking-widest text-primary/90 font-medium">
                {category.name}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {category.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs text-text/85 bg-background rounded-md border border-border/80 hover:border-primary/30 hover:text-text transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsSection
