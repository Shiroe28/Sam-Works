import React from 'react'

const ScrollIndicator = ({ progress }) => {
  const thumbTop = Math.max(0, Math.min(100, progress * 100))
  const thumbHeight = 36 + progress * 52

  return (
    <div className="scroll-indicator" aria-hidden="true">
      <div className="scroll-indicator-track">
        <div
          className="scroll-indicator-thumb"
          style={{
            top: `calc(${thumbTop}% - ${progress * thumbHeight}px)`,
            height: `${thumbHeight}px`,
          }}
        />
      </div>
    </div>
  )
}

export default ScrollIndicator
