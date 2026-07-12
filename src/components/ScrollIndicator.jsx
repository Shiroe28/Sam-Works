import React, { useRef, useState, useCallback, useEffect } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

const ScrollIndicator = ({
  progress,
  scrollable,
  thumbRatio = 0.2,
  onSeek,
  onStepUp,
  onStepDown,
}) => {
  const trackRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

  const thumbHeightPercent = scrollable
    ? Math.max(12, Math.min(85, thumbRatio * 100))
    : 20 + progress * 30

  const thumbTopPercent = scrollable
    ? progress * (100 - thumbHeightPercent)
    : progress * (100 - thumbHeightPercent)

  const seekFromClientY = useCallback((clientY) => {
    const track = trackRef.current
    if (!track) return

    const rect = track.getBoundingClientRect()
    const trackHeight = rect.height
    const thumbHeight = (thumbHeightPercent / 100) * trackHeight
    const clickY = clientY - rect.top - thumbHeight / 2
    const maxTop = trackHeight - thumbHeight
    const p = maxTop > 0 ? Math.max(0, Math.min(1, clickY / maxTop)) : 0
    onSeek(p)
  }, [onSeek, thumbHeightPercent])

  const handleTrackClick = (e) => {
    if (e.target.classList.contains('scroll-indicator-thumb')) return
    seekFromClientY(e.clientY)
  }

  const handleThumbMouseDown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  useEffect(() => {
    if (!isDragging) return

    const handleMouseMove = (e) => {
      seekFromClientY(e.clientY)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, seekFromClientY])

  return (
    <div className="scroll-indicator" aria-label="Page scroll control">
      <button
        type="button"
        onClick={onStepUp}
        className="scroll-indicator-btn"
        aria-label="Scroll up"
      >
        <ChevronUp size={14} />
      </button>

      <div
        ref={trackRef}
        className="scroll-indicator-track"
        onClick={handleTrackClick}
        role="scrollbar"
        aria-valuenow={Math.round(progress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`scroll-indicator-thumb ${isDragging ? 'scroll-indicator-thumb-dragging' : ''}`}
          style={{
            top: `${thumbTopPercent}%`,
            height: `${thumbHeightPercent}%`,
          }}
          onMouseDown={handleThumbMouseDown}
          role="slider"
          aria-label="Drag to scroll"
        />
      </div>

      <button
        type="button"
        onClick={onStepDown}
        className="scroll-indicator-btn"
        aria-label="Scroll down"
      >
        <ChevronDown size={14} />
      </button>
    </div>
  )
}

export default ScrollIndicator
