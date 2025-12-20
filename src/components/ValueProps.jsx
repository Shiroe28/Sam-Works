import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Users, CheckCircle } from 'lucide-react'

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
    <section id="value-props" className="py-16 px-8 sm:px-12 lg:px-16" ref={ref}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            What You Get Working With Me<span className="text-primary">.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            More than code—real solutions that perform
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-xl p-8 hover:bg-primary/10 transition-all duration-300 group cursor-pointer"
            >
              {/* Glow effect on hover */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-full"></div>
                <div className="relative text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ValueProps
