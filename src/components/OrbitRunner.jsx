import React, { useEffect, useState } from 'react'
import { Play, RotateCcw } from 'lucide-react'

const OrbitRunner = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [isJumping, setIsJumping] = useState(false)
  const [obstaclePosition, setObstaclePosition] = useState(105)
  const [score, setScore] = useState(0)

  const jump = () => {
    if (!isRunning) setIsRunning(true)
    if (isJumping) return
    setIsJumping(true)
    window.setTimeout(() => setIsJumping(false), 430)
  }

  const restart = () => {
    setScore(0)
    setObstaclePosition(105)
    setIsRunning(true)
  }

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        jump()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  })

  useEffect(() => {
    if (!isRunning) return undefined
    const timer = window.setInterval(() => {
      setObstaclePosition((position) => {
        if (position <= -8) {
          setScore((current) => current + 1)
          return 108
        }
        return position - 2.45
      })
    }, 48)
    return () => window.clearInterval(timer)
  }, [isRunning])

  useEffect(() => {
    if (isRunning && obstaclePosition > 12 && obstaclePosition < 25 && !isJumping) setIsRunning(false)
  }, [isRunning, isJumping, obstaclePosition])

  return <aside className="orbit-runner" aria-label="Orbit Runner mini game">
    <div className="orbit-runner-header"><span>MINI BREAK</span><b>ORBIT RUNNER</b><span>{String(score).padStart(2, '0')}</span></div>
    <div className="orbit-runner-stage" onClick={jump} role="button" tabIndex="0" onKeyDown={(event) => { if (event.key === 'Enter') jump() }} aria-label="Jump over the signal blocks">
      <div className="orbit-stars" />
      <div className={`orbit-character ${isJumping ? 'orbit-character-jumping' : ''}`}><i>◉</i><i>◉</i></div>
      <div className="orbit-obstacle" style={{ left: `${obstaclePosition}%` }} />
      <div className="orbit-ground" />
      {!isRunning && <p className="orbit-message">{score ? 'Signal lost' : 'Tap to start'}</p>}
    </div>
    <div className="orbit-runner-controls"><button type="button" onClick={jump}><Play size={13} /> Jump</button><button type="button" onClick={restart} aria-label="Restart Orbit Runner"><RotateCcw size={14} /></button><span>Space / tap</span></div>
  </aside>
}

export default OrbitRunner
