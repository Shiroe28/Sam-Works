import React, { useState } from 'react'

const InteractiveGridPattern = ({ width = 32, height = 32, squares = [24, 10], className = '', squaresClassName = '', activeSquare, onActiveSquareChange }) => {
  const [internalHoveredSquare, setInternalHoveredSquare] = useState(null)
  const [horizontal, vertical] = squares
  const hoveredSquare = activeSquare ?? internalHoveredSquare
  const setHoveredSquare = (square) => {
    setInternalHoveredSquare(square)
    onActiveSquareChange?.(square)
  }

  return <svg viewBox={`0 0 ${width * horizontal} ${height * vertical}`} preserveAspectRatio="none" className={`interactive-grid-pattern ${className}`} aria-hidden="true">
    {Array.from({ length: horizontal * vertical }).map((_, index) => {
      const x = (index % horizontal) * width
      const y = Math.floor(index / horizontal) * height
      return <rect key={index} x={x} y={y} width={width} height={height} className={`interactive-grid-square ${hoveredSquare === index ? 'interactive-grid-square-active' : ''} ${squaresClassName}`} onMouseEnter={() => setHoveredSquare(index)} onMouseLeave={() => setHoveredSquare(null)} />
    })}
  </svg>
}

export default InteractiveGridPattern
