import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Users, CheckCircle } from 'lucide-react'
import { 
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiTailwindcss,
  SiVite, SiEslint, SiFlutter, SiDart, SiFirebase, SiSupabase, SiJavascript,
  SiJava, SiAndroid, SiSqlite, SiReactrouter, SiJsonwebtokens
} from 'react-icons/si'
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa'
import { TbChartBar, TbForms, TbBrandVscode } from 'react-icons/tb'

const ValueProps = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: <Code2 size={40} />,
      title: 'Engineering With Intent',
      description: 'Every line of code serves performance, clarity, and maintainability.',
    },
    {
      icon: <Users size={40} />,
      title: 'Easy to Work With',
      description: 'Fast replies, clear expectations, and zero guesswork.',
    },
    {
      icon: <CheckCircle size={40} />,
      title: 'Built to Ship',
      description: 'Production-ready results, tested and ready to scale.',
    },
  ]

  const techStack = {
    backend: [
      { name: 'Node.js', icon: <SiNodedotjs className="w-6 h-6" style={{ color: '#339933' }} /> },
      { name: 'Express.js', icon: <SiExpress className="w-6 h-6" style={{ color: '#000000' }} /> },
      { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6" style={{ color: '#47A248' }} /> },
      { name: 'Mongoose', icon: <SiMongodb className="w-6 h-6" style={{ color: '#880000' }} /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="w-6 h-6" style={{ color: '#4169E1' }} /> },
      { name: 'JWT', icon: <SiJsonwebtokens className="w-6 h-6" style={{ color: '#000000' }} /> },
      { name: 'Firebase', icon: <SiFirebase className="w-6 h-6" style={{ color: '#FFCA28' }} /> },
      { name: 'Supabase', icon: <SiSupabase className="w-6 h-6" style={{ color: '#3ECF8E' }} /> },
    ],
    frontend: [
      { name: 'React', icon: <SiReact className="w-6 h-6" style={{ color: '#61DAFB' }} /> },
      { name: 'Flutter', icon: <SiFlutter className="w-6 h-6" style={{ color: '#02569B' }} /> },
      { name: 'Dart', icon: <SiDart className="w-6 h-6" style={{ color: '#0175C2' }} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-6 h-6" style={{ color: '#06B6D4' }} /> },
      { name: 'Vite', icon: <SiVite className="w-6 h-6" style={{ color: '#646CFF' }} /> },
      { name: 'React Router', icon: <SiReactrouter className="w-6 h-6" style={{ color: '#CA4245' }} /> },
      { name: 'React Query', icon: <SiReact className="w-6 h-6" style={{ color: '#FF4154' }} /> },
      { name: 'Recharts', icon: <TbChartBar className="w-6 h-6" style={{ color: '#8884d8' }} /> },
    ],
    mobile: [
      { name: 'Android Studio', icon: <SiAndroid className="w-6 h-6" style={{ color: '#3DDC84' }} /> },
      { name: 'Java', icon: <SiJava className="w-6 h-6" style={{ color: '#007396' }} /> },
      { name: 'SQLite', icon: <SiSqlite className="w-6 h-6" style={{ color: '#003B57' }} /> },
    ],
    tools: [
      { name: 'Git', icon: <FaCode className="w-6 h-6" style={{ color: '#F05032' }} /> },
      { name: 'VS Code', icon: <TbBrandVscode className="w-6 h-6" style={{ color: '#007ACC' }} /> },
      { name: 'ESLint', icon: <SiEslint className="w-6 h-6" style={{ color: '#4B32C3' }} /> },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="value-props" className="py-12 md:py-16 px-4 sm:px-8 lg:px-16" ref={ref}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 px-2">
            What You Get Working With Me<span className="text-primary">.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto px-4">
            More than code—real solutions that perform
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-xl p-6 md:p-8 hover:bg-primary/10 transition-all duration-300 group cursor-pointer"
            >
              {/* Glow effect on hover */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-full"></div>
                <div className="relative text-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-20"
        >
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Tech Stack<span className="text-primary">.</span>
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaServer className="text-primary text-2xl" />
                <h4 className="text-lg font-bold">Backend</h4>
              </div>
              <div className="space-y-3">
                {techStack.backend.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    whileHover={{ x: 5, scale: 1.05 }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-all cursor-pointer"
                  >
                    {tech.icon}
                    <span className="text-sm text-muted">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-primary text-2xl" />
                <h4 className="text-lg font-bold">Frontend</h4>
              </div>
              <div className="space-y-3">
                {techStack.frontend.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    whileHover={{ x: 5, scale: 1.05 }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-all cursor-pointer"
                  >
                    {tech.icon}
                    <span className="text-sm text-muted">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaDatabase className="text-primary text-2xl" />
                <h4 className="text-lg font-bold">Mobile</h4>
              </div>
              <div className="space-y-3">
                {techStack.mobile.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.05 }}
                    whileHover={{ x: 5, scale: 1.05 }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-all cursor-pointer"
                  >
                    {tech.icon}
                    <span className="text-sm text-muted">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaTools className="text-primary text-2xl" />
                <h4 className="text-lg font-bold">Tools</h4>
              </div>
              <div className="space-y-3">
                {techStack.tools.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.9 + index * 0.05 }}
                    whileHover={{ x: 5, scale: 1.05 }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-all cursor-pointer"
                  >
                    {tech.icon}
                    <span className="text-sm text-muted">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ValueProps
