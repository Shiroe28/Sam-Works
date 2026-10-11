/** @typedef {{ slug: string, title: string, description: string, badge?: string, href?: string, image?: string | null, featured?: boolean }} PortfolioProject */

/** @type {PortfolioProject[]} */
export const projects = [
  {
    slug: 'doem',
    title: "Do'Em",
    description:
      'An AI day planner that turns plain-language goals (“gym, work, study”) into a conflict-free daily timeline, with notes, history, and reusable schedules.',
    badge: '☁️ SaaS · AI planner',
    href: 'https://www.doem.online/',
    image: null,
    featured: true,
  },
  {
    slug: 'suri',
    title: 'Suri',
    description: 'iPhone scam checker powered by on-device AI — built with my team for AppBuildersPH.',
    badge: '🏆 Top 15 · AppBuildersPH 2026',
    href: 'https://www.youtube.com/watch?v=cyMo31DR3WI',
    image: null,
    featured: true,
  },
  {
    slug: 'hakbang',
    title: 'Hakbang',
    description: 'IT career guide with admin dashboard and AI-powered recommendations.',
    href: '',
    image: 'Hakbang.png',
    featured: true,
  },
  {
    slug: 'lastcred',
    title: 'LastCred',
    description: 'Neon isometric arcade survival game — every second is a decision.',
    href: '',
    image: 'LastCred.png',
    featured: true,
  },
  {
    slug: 'persofit',
    title: 'PersoFit',
    description: 'Workout plans and progress analytics in a full-stack fitness web app.',
    href: '',
    image: 'Persofit.png',
    featured: false,
  },
  {
    slug: 'aura',
    title: 'Aura',
    description: 'Goals, tasks, and daily journaling in one focused mobile space.',
    href: '',
    image: 'Aura.png',
    featured: false,
  },
  {
    slug: 'equity',
    title: 'Equity',
    description: 'Live business insights and profit tracking for shop owners.',
    href: '',
    image: 'Equity.png',
    featured: false,
  },
  {
    slug: 'revu',
    title: 'REVU',
    description: 'Flashcard experience with deck management for better learning.',
    href: '',
    image: 'Revu.png',
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function projectHref(project) {
  const href = project.href?.trim()
  if (href && href !== '#') return href
  return null
}

export function projectLinkLabel(project) {
  const href = projectHref(project)
  if (!href) return null
  try {
    const host = new URL(href).hostname.replace(/^www\./, '')
    if (host.includes('youtube.com') || host.includes('youtu.be')) return 'youtube.com'
    if (host.includes('github.com')) return 'github.com'
    return host
  } catch {
    return 'View'
  }
}

export function projectImageUrl(project, basePath) {
  if (!project.image) return null
  return `${basePath}${project.image}`
}
