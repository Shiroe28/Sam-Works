import React, { useEffect, useState } from 'react'

const Meteors = ({ number = 16, minDelay = .2, maxDelay = 4, minDuration = 3, maxDuration = 8, angle = 215 }) => {
  const [meteorStyles, setMeteorStyles] = useState([])

  useEffect(() => {
    setMeteorStyles(Array.from({ length: number }, () => ({
      '--angle': `${-angle}deg`,
      '--meteor-x': `${Math.floor(Math.random() * 110) - 5}%`,
      animationDelay: `${Math.random() * (maxDelay - minDelay) + minDelay}s`,
      animationDuration: `${Math.random() * (maxDuration - minDuration) + minDuration}s`,
    })))
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle])

  return <div className="meteors" aria-hidden="true">{meteorStyles.map((style, index) => <span key={index} className="meteor" style={style}><i /></span>)}</div>
}

export default Meteors
