import React, { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import lastCredImage from '../../LastCred.png'

const basePath = import.meta.env.BASE_URL

const projects = [
  { title: 'Aura', tag: 'PERSONAL GROWTH', description: 'Goals, tasks, and daily journaling in one focused mobile space.', detail: 'Aura helps people keep personal goals, task lists, and daily reflections in one calm, useful place.', stack: 'Flutter · Firebase', image: 'Aura.png' },
  { title: 'Hakbang', tag: 'CAREER GUIDE', description: 'An IT career guide with administration tools and AI recommendations.', detail: 'A guided career companion for IT students, combining curated paths, an admin dashboard, and tailored AI recommendations.', stack: 'Flutter · AI · Firebase', image: 'Hakbang.png' },
  { title: 'Equity', tag: 'ANALYTICS', description: 'Live business insights and profit tracking for shop owners.', detail: 'Equity brings essential business signals together so shop owners can understand performance and profit at a glance.', stack: 'Flutter · Analytics', image: 'Equity.png' },
  { title: 'REVU', tag: 'EDUCATION', description: 'A flashcard experience with deck management for better learning.', detail: 'A focused study tool designed around flexible flashcard decks and a friction-free learning routine.', stack: 'Flutter · Mobile', image: 'Revu.png' },
  { title: 'PersoFit', tag: 'FITNESS', description: 'Workout plans and progress analytics in a full-stack web app.', detail: 'PersoFit pairs structured workout plans with progress analytics, giving users a clearer view of their fitness journey.', stack: 'React · Node.js', image: 'Persofit.png' },
  { title: 'LastCred', tag: 'GAME EXPERIENCE', description: 'A neon isometric arcade survival game where every second is a decision.', detail: 'LastCred is a fast-paced arena survival concept built around responsive combat feedback, wave escalation, and a vivid neon atmosphere.', stack: 'Three.js · JavaScript', image: lastCredImage },
]

const credentials = [
  ['Introduction to IoT & Digital Transformation', 'Cisco Networking Academy · 2026', 'certificates/introduction-to-iot.pdf'],
  ['Introduction to AI Agents', 'DataCamp · 2026', 'certificates/certificate.pdf'],
  ['Introduction to GitHub Concepts', 'DataCamp · 2026', 'certificates/certificate-1.pdf'],
  ['Artificial Intelligence', 'Certified Professional · 2026', 'certificates/cert-72091353645.pdf'],
  ['PowerPoint 2019 Associate', 'Microsoft Office Specialist · 2024', 'certificates/cert-69991327421.pdf'],
]

const skills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'Flutter', 'Dart', 'PHP', 'MySQL', 'MongoDB', 'PostgreSQL', 'Firebase', 'Supabase', 'Git', 'OpenAI API']

const Marker = ({ children }) => <p className="dossier-marker">{children}</p>

const ProjectShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [direction, setDirection] = useState(1)
  const carouselRef = useRef(null)
  const projectCardRefs = useRef([])
  const activeProject = projects[activeIndex]

  const revealProject = (index) => {
    projectCardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  }

  const move = (step) => {
    const nextIndex = (activeIndex + step + projects.length) % projects.length
    setDirection(step)
    setActiveIndex(nextIndex)
    revealProject(nextIndex)
  }

  const selectProject = (index) => {
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
    revealProject(index)
    setIsOpen(true)
  }

  const selectViewerProject = (index) => {
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
    revealProject(index)
  }

  const scrollProjects = (step) => {
    carouselRef.current?.scrollBy({ left: carouselRef.current.clientWidth * step * 0.78, behavior: 'smooth' })
  }

  return <>
    <div className="carousel-controls" aria-label="Project carousel controls"><span>SCROLL TO EXPLORE</span><div><button type="button" onClick={() => scrollProjects(-1)} aria-label="Previous projects"><ArrowLeft size={15} /></button><button type="button" onClick={() => scrollProjects(1)} aria-label="Next projects"><ArrowRight size={15} /></button></div></div>
    <div className="work-carousel" ref={carouselRef}>
      {projects.map((project, index) => <button ref={(element) => { projectCardRefs.current[index] = element }} className={`work-card ${index === activeIndex ? 'work-card-active' : ''}`} key={project.title} onClick={() => selectProject(index)}><span className="work-index">0{index + 1}</span><div><small>{project.tag}</small><h3>{project.title}</h3><p>{project.description}</p><em>{project.stack}</em></div><span className="work-open">View <ArrowUpRight size={14} /></span></button>)}
    </div>
    <AnimatePresence>
      {isOpen && <motion.div className="project-viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="viewer-toolbar"><span>PROJECT FILE / 0{activeIndex + 1}</span><button onClick={() => setIsOpen(false)} aria-label="Close project viewer">Close <X size={16} /></button></div>
        <div className="viewer-stage">
          <button className="viewer-arrow viewer-arrow-left" onClick={() => move(-1)} aria-label="Previous project"><ArrowLeft size={20} /></button>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div className="viewer-content" key={activeProject.title} custom={direction} initial={{ opacity: 0, x: direction * 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: direction * -28 }} transition={{ duration: .28, ease: 'easeOut' }}>
              <div className="viewer-image"><img src={activeProject.image.startsWith('/') ? activeProject.image : `${basePath}${activeProject.image}`} alt={`${activeProject.title} project screenshot`} /></div>
              <div className="viewer-copy"><p className="dossier-marker">{activeProject.tag}</p><h3>{activeProject.title}</h3><p>{activeProject.detail}</p><span>{activeProject.stack}</span><div className="viewer-counter"><b>0{activeIndex + 1}</b> / 0{projects.length}</div></div>
            </motion.div>
          </AnimatePresence>
          <button className="viewer-arrow viewer-arrow-right" onClick={() => move(1)} aria-label="Next project"><ArrowRight size={20} /></button>
        </div>
        <div className="viewer-steps">{projects.map((project, index) => <button key={project.title} onClick={() => selectViewerProject(index)} className={index === activeIndex ? 'step-active' : ''} aria-label={`View ${project.title}`} />)}</div>
      </motion.div>}
    </AnimatePresence>
  </>
}

const Home = ({ onToggleTheme }) => (
  <main className="dossier">
    <header className="dossier-header">
      <a href="#top" className="dossier-mark">SRG<span>•</span></a>
      <p>PERSONAL PORTFOLIO / 2026</p>
      <div className="header-actions"><Link to="/contact">AVAILABLE FOR WORK <ArrowUpRight size={14} /></Link></div>
    </header>

    <section id="top" className="masthead">
      <div className="masthead-title"><Marker>01 — INTRODUCTION</Marker><h1>SAM<br />RICHMOND<br /><i>GO</i></h1></div>
      <div className="masthead-image" onDoubleClick={onToggleTheme} role="button" tabIndex="0" onKeyDown={(event) => { if (event.key === 'Enter') onToggleTheme() }}><img src={`${basePath}sam.jpg`} alt="Sam Richmond Go" /><span>FULL-STACK<br />DEVELOPER</span></div>
      <div className="masthead-note"><p>Based in</p><strong>Imus, Cavite<br />Philippines</strong><p className="note-bottom">Making useful digital products from a rough idea to a working experience.</p></div>
    </section>

    <section className="snapshot">
      <div className="snapshot-intro"><Marker>A SHORT NOTE</Marker><p>I build clear, dependable web and mobile products — with an eye on both the experience people see and the systems that make it work.</p></div>
      <div className="snapshot-detail"><Marker>CONTACT</Marker><a href="mailto:sam.richmond.go@gmail.com"><Mail size={15} /> sam.richmond.go@gmail.com</a><a href="tel:+639602022402"><Phone size={15} /> 0960 202 2402</a><p><MapPin size={15} /> Imus, Cavite, Philippines</p></div>
      <div className="snapshot-detail"><Marker>AROUND THE WEB</Marker><a href="https://github.com/Shiroe28" target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/in/sam-richmond-go-25b0bb352" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} /></a></div>
    </section>

    <section id="projects" className="work-section">
      <div className="section-banner"><Marker>02 — SELECTED WORK</Marker><h2>Things I&apos;ve made <span>so far.</span></h2><p>Six projects, shown three at a time across mobile, web, learning, analytics, fitness, and games.</p></div>
      <ProjectShowcase />
    </section>

    <section className="details-section">
      <div id="stack" className="detail-panel stack-panel"><Marker>03 — TOOLKIT</Marker><h2>A practical<br />set of tools.</h2><div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
      <div id="credentials" className="detail-panel"><Marker>04 — CERTIFICATES</Marker><div className="certificate-list">{credentials.map(([name, issuer, file], index) => <a key={name} href={`${basePath}${file}`} target="_blank" rel="noreferrer"><b>0{index + 1}</b><span>{name}<small>{issuer}</small></span><ArrowUpRight size={15} /></a>)}</div><div className="closing-note"><p>CURRENTLY EXPLORING</p><strong>AI-enabled products, scalable mobile experiences, and better ways to turn everyday problems into useful tools.</strong></div></div>
    </section>

    <footer className="dossier-footer"><p>© {new Date().getFullYear()} Sam Richmond Go</p><Link to="/contact">Start a conversation <ArrowUpRight size={16} /></Link></footer>
  </main>
)

export default Home
