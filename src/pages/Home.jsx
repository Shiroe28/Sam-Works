import React, { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, FileText, Github, Linkedin, Mail, MapPin, Moon, Phone, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'
import GitHubContributions from '../components/GitHubContributions'
import OrbitRunner from '../components/OrbitRunner'
import RippleButton from '../components/RippleButton'
import BlogFeed from '../components/BlogFeed'
import ProjectListSection from '../components/ProjectListSection'
import { featuredBlogPosts } from '../data/blog'
import { featuredProjects } from '../data/projects'

const basePath = import.meta.env.BASE_URL

const credentials = [
  ['Discovering Entrepreneurship', 'St. Dominic College of Asia · Cisco Networking Academy · 2026', 'certificates/discovering-entrepreneurship.pdf'],
  ['Introduction to IoT & Digital Transformation', 'Cisco Networking Academy · 2026', 'certificates/introduction-to-iot.pdf'],
  ['Introduction to AI Agents', 'DataCamp · 2026', 'certificates/certificate.pdf'],
  ['Introduction to GitHub Concepts', 'DataCamp · 2026', 'certificates/certificate-1.pdf'],
  ['Artificial Intelligence', 'Certified Professional · 2026', 'certificates/cert-72091353645.pdf'],
  ['PowerPoint 2019 Associate', 'Microsoft Office Specialist · 2024', 'certificates/cert-69991327421.pdf'],
]

const skills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'Flutter', 'Dart', 'PHP', 'MySQL', 'MongoDB', 'PostgreSQL', 'Firebase', 'Supabase', 'Git', 'OpenAI API']

const skillDetails = {
  React: 'Component-based interfaces for responsive, maintainable web applications.',
  JavaScript: 'The core language used to create interactive web experiences.',
  TypeScript: 'JavaScript with safer types for easier-to-maintain product code.',
  'Node.js': 'A JavaScript runtime for fast, scalable server-side applications.',
  Express: 'A lightweight Node.js framework for APIs and backend services.',
  Flutter: 'A toolkit for polished, cross-platform mobile applications.',
  Dart: 'The language behind Flutter, optimized for smooth application UIs.',
  PHP: 'A proven server-side language for web applications and integrations.',
  MySQL: 'A reliable relational database for structured application data.',
  MongoDB: 'A flexible document database suited to evolving product data.',
  PostgreSQL: 'A powerful relational database for robust, data-heavy systems.',
  Firebase: 'Managed backend services for authentication, data, and hosting.',
  Supabase: 'An open-source backend platform built around PostgreSQL.',
  Git: 'Version control for safely tracking and collaborating on code changes.',
  'OpenAI API': 'AI capabilities for helpful, context-aware product features.',
}

const Marker = ({ children }) => <p className="dossier-marker">{children}</p>

const ThemeToggle = ({ onToggleTheme }) => (
  <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle light and dark mode" title="Toggle theme">
    <Sun className="theme-icon theme-icon-sun" size={15} /><Moon className="theme-icon theme-icon-moon" size={14} />
  </button>
)

const Home = ({ onToggleTheme }) => {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0)
  const skillButtonRefs = useRef([])
  const activeSkill = skills[activeSkillIndex]
  const moveSkill = (step) => {
    const nextIndex = (activeSkillIndex + step + skills.length) % skills.length
    setActiveSkillIndex(nextIndex)
    skillButtonRefs.current[nextIndex]?.triggerRipple?.()
  }

  return <main className="dossier">
    <header className="dossier-header">
      <a href="#top" className="dossier-mark">SRG<span>•</span></a>
      <p>PERSONAL PORTFOLIO / 2026</p>
      <div className="header-actions"><ThemeToggle onToggleTheme={onToggleTheme} /><Link to="/contact">AVAILABLE FOR WORK <ArrowUpRight size={14} /></Link></div>
    </header>

    <section id="top" className="masthead">
      <div className="masthead-title"><Marker>01 — INTRODUCTION</Marker><h1>SAM<br />RICHMOND<br /><i>GO</i></h1></div>
      <div className="masthead-image" onDoubleClick={onToggleTheme} role="button" tabIndex="0" onKeyDown={(event) => { if (event.key === 'Enter') onToggleTheme() }}><img src={`${basePath}sam.jpg`} alt="Sam Richmond Go" /><span>FULL-STACK<br />DEVELOPER</span></div>
      <div className="masthead-note"><p>Based in</p><strong>Imus, Cavite<br />Philippines</strong><p className="note-bottom">Making useful digital products from a rough idea to a working experience.</p></div>
    </section>

    <section className="snapshot">
      <div className="snapshot-intro"><Marker>A SHORT NOTE</Marker><p>Software Engineer specializing in complex backend architectures and hardware-to-software integrations. I build scalable, production-ready systems using Next.js, React Native, and Supabase.</p></div>
      <div className="snapshot-detail"><Marker>CONTACT</Marker><a href="mailto:sam.richmond.go@gmail.com"><Mail size={15} /> sam.richmond.go@gmail.com</a><a href="tel:+639602022402"><Phone size={15} /> 0960 202 2402</a><p><MapPin size={15} /> Imus, Cavite, Philippines</p></div>
      <div className="snapshot-detail"><Marker>AROUND THE WEB</Marker><a href="https://github.com/Shiroe28" target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/in/sam-richmond-go-25b0bb352" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} /></a><a href={`${basePath}resume.pdf`} target="_blank" rel="noreferrer"><FileText size={15} /> Resume <ArrowUpRight size={13} /></a></div>
    </section>

    <section id="projects" className="work-section work-section-list">
      <div className="section-banner project-section-banner">
        <p className="dossier-marker">02 — SELECTED WORK</p>
        <h2>
          Things I&apos;ve
          <br />
          <span>made so far.</span>
        </h2>
        <p>Featured builds — team products, mobile apps, and experiments.</p>
      </div>
      <ProjectListSection items={featuredProjects} showViewAll viewAllTo="/projects" />
    </section>

    <GitHubContributions />

    <section className="details-section">
      <div id="stack" className="detail-panel stack-panel"><Marker>04 — TOOLKIT</Marker><h2>A practical<br />set of tools.</h2><div className="tool-explorer"><div><p className="tool-explorer-label">{String(activeSkillIndex + 1).padStart(2, '0')} / {String(skills.length).padStart(2, '0')}</p><h3>{activeSkill}</h3><p>{skillDetails[activeSkill]}</p></div><div className="tool-explorer-controls"><RippleButton type="button" onClick={() => moveSkill(-1)} aria-label="Previous tool"><ArrowLeft size={16} /></RippleButton><RippleButton type="button" onClick={() => moveSkill(1)} aria-label="Next tool"><ArrowRight size={16} /></RippleButton></div></div><div className="skill-cloud" aria-label="All tools">{skills.map((skill, index) => <RippleButton ref={(element) => { skillButtonRefs.current[index] = element }} type="button" key={skill} className={index === activeSkillIndex ? 'skill-active' : ''} onClick={() => setActiveSkillIndex(index)} aria-pressed={index === activeSkillIndex}>{skill}</RippleButton>)}</div></div>
      <div id="credentials" className="detail-panel"><Marker>05 — CERTIFICATES</Marker><div className="certificate-list">{credentials.map(([name, issuer, file], index) => <a key={name} href={`${basePath}${file}`} target="_blank" rel="noreferrer"><b>0{index + 1}</b><span>{name}<small>{issuer}</small></span><ArrowUpRight size={15} /></a>)}</div><div className="closing-note"><p>CURRENTLY EXPLORING</p><strong>AI-enabled products, scalable mobile experiences, and better ways to turn everyday problems into useful tools.</strong></div></div>
    </section>

    <section id="blog" className="work-section work-section-list blog-home-section">
      <div className="section-banner project-section-banner">
        <p className="dossier-marker">06 — FIELD NOTES</p>
        <h2>
          Random things
          <br />
          <span>that happen.</span>
        </h2>
        <p>Short posts — dev diary, small wins, and whatever&apos;s going on.</p>
      </div>
      <BlogFeed items={featuredBlogPosts} showViewAll viewAllTo="/blog" />
    </section>

    <section className="orbit-runner-section"><p className="dossier-marker">07 — QUICK BREAK</p><OrbitRunner /></section>

    <footer className="dossier-footer"><p>© {new Date().getFullYear()} Sam Richmond Go</p><Link to="/contact">Start a conversation <ArrowUpRight size={16} /></Link></footer>
  </main>
}

export default Home
