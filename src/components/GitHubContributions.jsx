import React, { useEffect, useMemo, useState } from 'react'
import { ArrowUpRight, Github } from 'lucide-react'
import InteractiveGridPattern from './InteractiveGridPattern'
import OrbitRunner from './OrbitRunner'

const username = 'Shiroe28'
const apiUrl = `https://github-contributions-api.jogruber.de/v4/${username}?y=last`

const formatDate = (date) => new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(date)

const createCalendar = (contributions) => {
  const contributionMap = new Map(contributions.map((item) => [item.date, item]))
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const start = new Date(today)
  start.setDate(today.getDate() - 364 - today.getDay())

  return Array.from({ length: 53 * 7 }, (_, index) => {
    const date = new Date(start)
    date.setDate(start.getDate() + index)
    const key = date.toISOString().slice(0, 10)
    // Keep a real Date for rendering/formatting; API data also includes a date string.
    return { ...(contributionMap.get(key) ?? { count: 0, level: 0 }), date }
  })
}

const GitHubContributions = () => {
  const [contributions, setContributions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [activeDay, setActiveDay] = useState(null)
  const [activeGridSquare, setActiveGridSquare] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    fetch(apiUrl, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Unable to load contribution data')
        return response.json()
      })
      .then((data) => setContributions(data.contributions ?? []))
      .catch((error) => {
        if (error.name !== 'AbortError') setHasError(true)
      })
      .finally(() => setIsLoading(false))

    return () => controller.abort()
  }, [])

  const calendar = useMemo(() => createCalendar(contributions), [contributions])
  const total = contributions.reduce((sum, day) => sum + day.count, 0)
  const currentDay = activeDay ?? calendar[calendar.length - 1]
  const handleGridMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const column = Math.min(23, Math.max(0, Math.floor(((event.clientX - bounds.left) / bounds.width) * 24)))
    const row = Math.min(9, Math.max(0, Math.floor(((event.clientY - bounds.top) / bounds.height) * 10)))
    setActiveGridSquare(row * 24 + column)
  }

  return (
    <section className="contribution-section" aria-labelledby="github-activity-title">
      <div className="section-banner contribution-banner"><p className="dossier-marker">03 — GITHUB ACTIVITY</p><h2 id="github-activity-title">A record of<br /><span>small progress.</span></h2><p>Live public contribution activity from GitHub. Hover or focus a square to inspect a day.</p></div>
      <div className="activity-layout">
      <div className={`contribution-grid-panel ${isLoading ? 'contribution-grid-loading' : ''}`} onMouseMove={handleGridMove} onMouseLeave={() => setActiveGridSquare(null)}>
        <InteractiveGridPattern activeSquare={activeGridSquare} squares={[24, 10]} />
        <div className="contribution-grid-topline"><span><Github size={15} /> @{username}</span><a href={`https://github.com/${username}`} target="_blank" rel="noreferrer">View profile <ArrowUpRight size={13} /></a></div>
        <div className="contribution-grid" role="grid" aria-label="GitHub contribution calendar">
          {calendar.map((day, index) => <button key={day.date.toISOString()} type="button" role="gridcell" className={`contribution-cell level-${day.level ?? 0}`} style={{ '--delay': `${Math.min(index * 3, 850)}ms` }} aria-label={`${day.count} contributions on ${formatDate(day.date)}`} onMouseEnter={() => setActiveDay(day)} onFocus={() => setActiveDay(day)} />)}
        </div>
        <div className="contribution-grid-footer"><p>{hasError ? 'Live activity is temporarily unavailable.' : isLoading ? 'Loading live activity…' : `${total} contributions in the last year.`}</p><p>{currentDay?.count ?? 0} contributions · {formatDate(currentDay?.date ?? new Date())}</p></div>
      </div>
      <OrbitRunner />
      </div>
    </section>
  )
}

export default GitHubContributions
