import React from 'react'
import {
  SiHtml5, SiCss3, SiJavascript, SiExpress, SiReact,
  SiDart, SiFlutter, SiAndroid,
  SiFirebase, SiMongodb, SiPostgresql, SiSupabase, SiSqlite, SiOpenai, SiPostman,
  SiPhp, SiMysql,
  SiTypescript, SiNextdotjs, SiTailwindcss, SiVercel, SiExpo, SiVite,
} from 'react-icons/si'
import { FaNodeJs, FaJava, FaGitAlt, FaGithub } from 'react-icons/fa'
import { TbBrandCSharp, TbBrandVscode } from 'react-icons/tb'

const techCategories = [
  {
    name: 'Web',
    techs: [
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', Icon: SiCss3, color: '#1572B6' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff' },
      { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Vite', Icon: SiVite, color: '#646CFF' },
      { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
      { name: 'Express', Icon: SiExpress, color: '#ffffff' },
    ],
  },
  {
    name: 'Mobile',
    techs: [
      { name: 'Flutter', Icon: SiFlutter, color: '#02569B' },
      { name: 'Dart', Icon: SiDart, color: '#0175C2' },
      { name: 'React Native', Icon: SiReact, color: '#61DAFB' },
      { name: 'Expo', Icon: SiExpo, color: '#ffffff' },
      { name: 'Java', Icon: FaJava, color: '#007396' },
      { name: 'C#', Icon: TbBrandCSharp, color: '#239120' },
      { name: 'Android', Icon: SiAndroid, color: '#3DDC84' },
    ],
  },
  {
    name: 'Backend & DB',
    techs: [
      { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
      { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
      { name: 'Supabase', Icon: SiSupabase, color: '#3ECF8E' },
      { name: 'SQLite', Icon: SiSqlite, color: '#003B57' },
    ],
  },
  {
    name: 'Tools',
    techs: [
      { name: 'VS Code', Icon: TbBrandVscode, color: '#007ACC' },
      { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', Icon: FaGithub, color: '#ffffff' },
      { name: 'OpenAI', Icon: SiOpenai, color: '#412991' },
      { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
      { name: 'Vercel', Icon: SiVercel, color: '#ffffff' },
    ],
  },
]

const SkillsSection = () => {
  return (
    <div>
      <h2 className="section-title">Tech Stack</h2>
      <div className="section-underline" />

      <div className="space-y-5">
        {techCategories.map((category) => (
          <div key={category.name}>
            <h3 className="text-xs uppercase tracking-widest text-muted mb-2.5">{category.name}</h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
              {category.techs.map(({ name, Icon, color }) => (
                <div
                  key={name}
                  title={name}
                  className="flex flex-col items-center gap-1.5 p-2.5 sm:p-3 rounded-lg bg-card-hover border border-border/50"
                >
                  <Icon className="text-xl sm:text-2xl" style={{ color }} />
                  <span className="text-[10px] sm:text-xs text-muted text-center leading-tight truncate w-full">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsSection
