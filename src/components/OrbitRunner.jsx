import React, { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'
import Meteors from './Meteors'

const getSeason = (score) => {
  if (score < 25) return { name: 'ORBIT', className: 'orbit-season-orbit' }
  const seasons = [
    { name: 'WINTER', className: 'orbit-season-winter' },
    { name: 'SUMMER', className: 'orbit-season-summer' },
    { name: 'AUTUMN', className: 'orbit-season-autumn' },
    { name: 'SPRING', className: 'orbit-season-spring' },
  ]
  return seasons[Math.floor((score - 25) / 25) % seasons.length]
}

const createObstacle = (score, position, id) => {
  const season = getSeason(score).name.toLowerCase()
  const isShip = score >= 8 && Math.random() > .62
  const variants = {
    orbit: ['signal'],
    winter: ['snowman', 'yeti'],
    summer: ['cactus', 'sun-orb'],
    autumn: ['pumpkin', 'branch'],
    spring: ['flower', 'bee'],
  }
  const variant = isShip ? `${season}-ship` : variants[season][Math.floor(Math.random() * variants[season].length)]
  return { id, type: isShip ? 'ship' : 'trap', season, variant, position }
}

const OrbitRunner = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [isJumping, setIsJumping] = useState(false)
  const [isCrouching, setIsCrouching] = useState(false)
  const [obstacles, setObstacles] = useState([{ id: 1, type: 'trap', season: 'orbit', variant: 'signal', position: 105 }])
  const [score, setScore] = useState(0)
  const playerRef = useRef(null)
  const obstacleRefs = useRef(new Map())
  const season = getSeason(score)

  const jump = () => {
    if (!isRunning || isJumping) return
    setIsJumping(true)
    window.setTimeout(() => setIsJumping(false), 430)
  }

  const restart = () => {
    setScore(0)
    setIsJumping(false)
    setIsCrouching(false)
    setObstacles([createObstacle(0, 105, Date.now())])
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
          const spacing = 22 + Math.random() * 16
          moved.push(createObstacle(score, lastObstacle ? lastObstacle.position + spacing : 105, Date.now() + Math.random()))
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
    if (!isRunning || !playerRef.current) return undefined
    const player = playerRef.current.getBoundingClientRect()
    const collided = obstacles.some((obstacle) => {
      const obstacleElement = obstacleRefs.current.get(obstacle.id)
      if (!obstacleElement) return false
      const target = obstacleElement.getBoundingClientRect()
      const horizontalOverlap = player.left + 4 < target.right - 2 && player.right - 4 > target.left + 2
      const verticalOverlap = player.top + 3 < target.bottom - 2 && player.bottom - 3 > target.top + 2
      return horizontalOverlap && verticalOverlap
    })
    if (collided) setIsRunning(false)
  }, [isRunning, isJumping, isCrouching, obstacles])

  return <aside className="orbit-runner" aria-label="Orbit Runner mini game">
    <div className="orbit-runner-header"><span>MINI BREAK · {season.name}</span><b>FOURSEASON RUNNER</b><span>SCORE {String(score).padStart(2, '0')}</span></div>
    <div className={`orbit-runner-stage ${season.className}`} onClick={jump} role="button" tabIndex="0" onKeyDown={(event) => { if (event.key === 'Enter') jump() }} aria-label="Jump over traps and crouch below spacecraft">
      <div className="orbit-season-scene" />
      <Meteors />
      <div ref={playerRef} className={`orbit-character ${isJumping ? 'orbit-character-jumping' : ''} ${isCrouching ? 'orbit-character-crouching' : ''}`}><i>◉</i><i>◉</i></div>
      {obstacles.map((obstacle) => <div key={obstacle.id} ref={(element) => { if (element) obstacleRefs.current.set(obstacle.id, element); else obstacleRefs.current.delete(obstacle.id) }} className={`orbit-obstacle orbit-obstacle-${obstacle.type} orbit-obstacle-${obstacle.variant}`} style={{ left: `${obstacle.position}%` }} />)}
      <div className="orbit-ground" />
      <strong className="orbit-score">{String(score).padStart(2, '0')}</strong>
      {!isRunning && <p className="orbit-message">{score ? 'Signal lost — restart to try again' : 'Press start to run'}</p>}
    </div>
    <div className="orbit-runner-controls"><button type="button" onClick={restart}><Play size={13} /> {isRunning ? 'Restart' : 'Start'}</button><button type="button" onClick={jump} disabled={!isRunning}>Jump</button><button type="button" onPointerDown={() => setIsCrouching(true)} onPointerUp={() => setIsCrouching(false)} onPointerLeave={() => setIsCrouching(false)} disabled={!isRunning}>Crouch</button><span className="orbit-keyboard-hint">Space / tap · Shift to crouch</span><span className="orbit-touch-hint">Tap Jump · hold Crouch</span></div>
  </aside>
}

export default OrbitRunner
