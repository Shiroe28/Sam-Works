import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { 
  SiHtml5, SiCss3, SiJavascript, SiExpress, SiReact,
  SiDart, SiFlutter, SiAndroid,
  SiFirebase, SiMongodb, SiPostgresql, SiSupabase, SiSqlite, SiOpenai, SiPostman
} from 'react-icons/si'
import { FaNodeJs, FaJava, FaGitAlt, FaGithub, FaKey, FaServer, FaCode } from 'react-icons/fa'
import { TbRouter, TbBrandCSharp, TbBrandVscode, TbPalette } from 'react-icons/tb'
import { BiPackage } from 'react-icons/bi'

// Tech stack icon mapping
const techIcons = {
  'Flutter': <SiFlutter className="w-5 h-5" style={{ color: '#02569B' }} />,
  'Node.js': <FaNodeJs className="w-5 h-5" style={{ color: '#339933' }} />,
  'MongoDB': <SiMongodb className="w-5 h-5" style={{ color: '#47A248' }} />,
  'React Admin': <SiReact className="w-5 h-5" style={{ color: '#61DAFB' }} />,
  'OpenAI API': <SiOpenai className="w-5 h-5" style={{ color: '#412991' }} />,
  'JWT': <FaKey className="w-5 h-5" style={{ color: '#000000' }} />,
  'Supabase': <SiSupabase className="w-5 h-5" style={{ color: '#3ECF8E' }} />,
  'Riverpod': <BiPackage className="w-5 h-5" style={{ color: '#8B5CF6' }} />,
  'GoRouter': <TbRouter className="w-5 h-5" style={{ color: '#00D9FF' }} />,
  'PostgreSQL': <SiPostgresql className="w-5 h-5" style={{ color: '#4169E1' }} />,
  'Android Studio': <SiAndroid className="w-5 h-5" style={{ color: '#3DDC84' }} />,
  'Java': <FaJava className="w-5 h-5" style={{ color: '#007396' }} />,
  'Material Design': <TbPalette className="w-5 h-5" style={{ color: '#757575' }} />,
  'SQLite': <SiSqlite className="w-5 h-5" style={{ color: '#003B57' }} />,
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState('All')

  // Get base path for GitHub Pages
  const basePath = import.meta.env.BASE_URL

  const projects = [
    {
      title: 'Hakbang',
      description: 'Personal IT Career Guide - Mobile application with admin dashboard for comprehensive career management and AI-powered recommendations.',
      image: `${basePath}Hakbang.png`,
      category: 'Full-Stack',
      tech: ['Flutter', 'Node.js', 'MongoDB', 'React Admin', 'OpenAI API', 'JWT'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Equity',
      description: 'Business Helper - Shop Analytics Dashboard for real-time business insights and profit tracking across multiple platforms.',
      image: `${basePath}Equity.png`,
      category: 'Full-Stack',
      tech: ['Flutter', 'Supabase', 'Riverpod', 'GoRouter', 'PostgreSQL'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'REVU',
      description: 'Study App - Modern mobile flashcard application for effective learning with deck management and progress tracking.',
      image: `${basePath}Revu.png`,
      category: 'Frontend',
      tech: ['Android Studio', 'Java', 'Material Design', 'SQLite'],
      liveLink: '#',
      githubLink: '#',
    },
  ]
      category: 'Frontend',
      tech: ['Android Studio', 'Java', 'Material Design', 'SQLite'],
      liveLink: '#',
      githubLink: '#',
    },
  ]

  const filters = ['All', 'Frontend', 'Backend', 'Full-Stack']

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const imageVariants = {
    hover: {
      scale: 1.08,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }),
    hover: {
      scale: 1.15,
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.3 }
    }
  }

  return (
    <section id="projects" className="min-h-screen py-20 px-8 sm:px-12 lg:px-16 flex items-center bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Featured Projects<span className="text-primary">.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            A selection of my recent work
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-primary text-text shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                  : 'glass text-muted hover:text-text hover:bg-primary/20'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              layout
              whileHover={{ y: -15, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Project Image */}
              <motion.div 
                className="relative overflow-hidden h-[450px] bg-border"
                whileHover="hover"
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  variants={imageVariants}
                  className="w-full h-full object-contain"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                />
              </motion.div>

              {/* Project Info */}
              <div className="p-8">
                <motion.h3 
                  className="text-2xl font-bold mb-3"
                  whileHover={{ x: 5, color: "#8B5CF6" }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-muted text-base mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Icons */}
                <div className="flex gap-3 mb-6 flex-wrap">
                  {project.tech.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      custom={techIndex}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover="hover"
                      variants={iconVariants}
                      className="w-11 h-11 rounded-lg bg-[#1C1C2A] hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] flex items-center justify-center transition-all duration-300"
                      title={tech}
                    >
                      {techIcons[tech] || <FaCode className="w-5 h-5" style={{ color: '#8B5CF6' }} />}
                    </motion.div>
                  ))}
                </div>

                {/* Demo Link */}
                <motion.a
                  href={project.liveLink}
                  className="text-accent text-sm font-medium hover:text-primary transition-colors inline-flex items-center gap-2 group/link"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Request Demo
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ExternalLink size={16} />
                  </motion.div>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
