import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  SiHtml5, SiCss3, SiJavascript, SiExpress, SiReact,
  SiDart, SiFlutter, SiAndroid,
  SiFirebase, SiMongodb, SiPostgresql, SiSupabase, SiSqlite, SiOpenai, SiPostman
} from 'react-icons/si'
import { FaNodeJs, FaJava, FaGitAlt, FaGithub, FaKey, FaServer, FaCode } from 'react-icons/fa'
import { TbRouter, TbBrandCSharp, TbBrandVscode, TbPalette, TbPackage } from 'react-icons/tb'
import { BiPackage } from 'react-icons/bi'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const navigate = useNavigate()

  const techCategories = [
    {
      name: 'Web Development',
      color: 'bg-blue-500',
      techs: [
        { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', Icon: SiCss3, color: '#1572B6' },
        { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
        { name: 'Express.js', Icon: SiExpress, color: '#000000' },
        { name: 'React Admin', Icon: SiReact, color: '#61DAFB' },
        { name: 'Render', Icon: FaServer, color: '#46E3B7' },
      ]
    },
    {
      name: 'Mobile Development',
      color: 'bg-green-500',
      techs: [
        { name: 'Java', Icon: FaJava, color: '#007396' },
        { name: 'C#', Icon: TbBrandCSharp, color: '#239120' },
        { name: 'Dart', Icon: SiDart, color: '#0175C2' },
        { name: 'Flutter', Icon: SiFlutter, color: '#02569B' },
        { name: 'Android Studio', Icon: SiAndroid, color: '#3DDC84' },
        { name: 'Material Design', Icon: TbPalette, color: '#757575' },
        { name: 'Riverpod', Icon: BiPackage, color: '#8B5CF6' },
        { name: 'GoRouter', Icon: TbRouter, color: '#00D9FF' },
      ]
    },
    {
      name: 'Backend / APIs',
      color: 'bg-purple-500',
      techs: [
        { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
        { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
        { name: 'Supabase', Icon: SiSupabase, color: '#3ECF8E' },
        { name: 'SQLite', Icon: SiSqlite, color: '#003B57' },
        { name: 'OpenAI API', Icon: SiOpenai, color: '#412991' },
        { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
      ]
    },
    {
      name: 'Tools / General Development',
      color: 'bg-orange-500',
      techs: [
        { name: 'VS Code', Icon: TbBrandVscode, color: '#007ACC' },
        { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
        { name: 'Github', Icon: FaGithub, color: '#181717' },
        { name: 'JWT', Icon: FaKey, color: '#000000' },
        { name: 'C++', Icon: FaCode, color: '#00599C' },
      ]
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-16 md:py-20 px-4 sm:px-8 lg:px-16 flex items-center bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto w-full space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Who Am I<span className="text-primary">?</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-8 md:mb-12"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-start mb-12 md:mb-16">
          {/* Left: Description - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed">
              I'm a <span className="text-text font-semibold">Full-Stack Developer</span> passionate 
              about turning ideas into experiences. With expertise in modern web technologies, 
              I create scalable, performant applications that solve real-world problems.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed">
              From concept to deployment, I focus on writing clean, maintainable code while 
              delivering exceptional user experiences. Whether it's a dynamic web app or a 
              responsive landing page, I bring ideas to life with precision and creativity.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button
                onClick={() => navigate('/projects')}
                className="inline-block px-6 sm:px-8 py-2 sm:py-3 glass hover:bg-primary/20 rounded-full text-text font-semibold transition-all duration-200 text-sm sm:text-base"
              >
                View My Work
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Stack by Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">
            Tech Stack<span className="text-primary">.</span>
          </h3>
          <p className="text-base sm:text-lg text-muted mb-8 md:mb-12">A collection of technologies organized by domain</p>
          
          <div className="space-y-8">
            {techCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + catIndex * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-6 h-6 rounded-full ${category.color}`}></div>
                  <h4 className="text-xl font-bold text-text">{category.name}</h4>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                  {category.techs.map((tech, techIndex) => {
                    const IconComponent = tech.Icon
                    return (
                      <motion.div
                        key={techIndex}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-[#1C1C2A] rounded-lg p-4 text-center hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                          <IconComponent 
                            className="text-3xl transition-colors" 
                            style={{ color: tech.color }}
                          />
                        </div>
                        <p className="text-xs text-muted group-hover:text-text transition-colors">
                          {tech.name}
                        </p>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
