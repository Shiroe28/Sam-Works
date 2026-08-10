import React, { useEffect, useState } from 'react'
import { Play } from 'lucide-react'
import Meteors from './Meteors'

const OrbitRunner = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [isJumping, setIsJumping] = useState(false)
  const [isCrouching, setIsCrouching] = useState(false)
  const [obstacles, setObstacles] = useState([{ id: 1, type: 'trap', position: 105 }])
  const [score, setScore] = useState(0)

  const jump = () => {
    if (!isRunning || isJumping) return
    setIsJumping(true)
    window.setTimeout(() => setIsJumping(false), 430)
  }

  const restart = () => {
    setScore(0)
    setIsJumping(false)
    setIsCrouching(false)
    setObstacles([{ id: Date.now(), type: 'trap', position: 105 }])
    setIsRunning(true)
  }

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        jump()
      }
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        if (isRunning) setIsCrouching(true)
      }
    }
    const onKeyUp = (event) => {
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') setIsCrouching(false)
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    return () => { window.removeEventListener('keydown', onKeyDown); window.removeEventListener('keyup', onKeyUp) }
  }, [isRunning, isJumping])

  useEffect(() => {
    if (!isRunning) return undefined
    const timer = window.setInterval(() => {
      setObstacles((current) => {
        const speed = .78 + Math.min(score * .045, 1.15)
        const moved = current.map((obstacle) => ({ ...obstacle, position: obstacle.position - speed })).filter((obstacle) => obstacle.position > -12)
        const lastObstacle = moved[moved.length - 1]
        if (!lastObstacle || lastObstacle.position < 73) {
          const canSpawnShip = score >= 8
          const type = canSpawnShip && Math.random() > .62 ? 'ship' : 'trap'
          const spacing = 22 + Math.random() * 16
          moved.push({ id: Date.now() + Math.random(), type, position: lastObstacle ? lastObstacle.position + spacing : 105 })
        }
        return moved
      })
    }, 48)
    return () => window.clearInterval(timer)
  }, [isRunning, score])

  useEffect(() => {
    if (!isRunning) return undefined
    const timer = window.setInterval(() => setScore((current) => current + 1), 1000)
    return () => window.clearInterval(timer)
  }, [isRunning])

  useEffect(() => {
    const collision = obstacles.some((obstacle) => {
      // The runner occupies roughly 17–21% of the stage; keep the hitbox close to it.
      const isNearCharacter = obstacle.position > 15 && obstacle.position < 21.5
      if (!isNearCharacter) return false
      return obstacle.type === 'ship' ? !isCrouching : !isJumping
    })
    if (isRunning && collision) setIsRunning(false)
  }, [isRunning, isJumping, isCrouching, obstacles])

  return <aside className="orbit-runner" aria-label="Orbit Runner mini game">
    <div className="orbit-runner-header"><span>MINI BREAK</span><b>ORBIT RUNNER</b><span>SCORE {String(score).padStart(2, '0')}</span></div>
    <div className="orbit-runner-stage" onClick={jump} role="button" tabIndex="0" onKeyDown={(event) => { if (event.key === 'Enter') jump() }} aria-label="Jump over traps and crouch below spacecraft">
      <Meteors />
      <div className={`orbit-character ${isJumping ? 'orbit-character-jumping' : ''} ${isCrouching ? 'orbit-character-crouching' : ''}`}><i>◉</i><i>◉</i></div>
      {obstacles.map((obstacle) => <div key={obstacle.id} className={`orbit-obstacle orbit-obstacle-${obstacle.type}`} style={{ left: `${obstacle.position}%` }} />)}
      <div className="orbit-ground" />
      <strong className="orbit-score">{String(score).padStart(2, '0')}</strong>
      {!isRunning && <p className="orbit-message">{score ? 'Signal lost — restart to try again' : 'Press start to run'}</p>}
    </div>
    <div className="orbit-runner-controls"><button type="button" onClick={restart}><Play size={13} /> {isRunning ? 'Restart' : 'Start'}</button><button type="button" onClick={jump} disabled={!isRunning}>Jump</button><button type="button" onPointerDown={() => setIsCrouching(true)} onPointerUp={() => setIsCrouching(false)} onPointerLeave={() => setIsCrouching(false)} disabled={!isRunning}>Crouch</button><span className="orbit-keyboard-hint">Space / tap · Shift to crouch</span><span className="orbit-touch-hint">Tap Jump · hold Crouch</span></div>
  </aside>
}

export default OrbitRunner
