import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export const RippleButton = React.forwardRef(
  (
    {
      className,
      contentClassName,
      children,
      rippleColor = 'var(--ripple-color, rgba(21, 36, 31, 0.22))',
      duration = '600ms',
      onClick,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef(null)
    const [buttonRipples, setButtonRipples] = useState([])

    const createRipple = (coords) => {
      const button = internalRef.current
      if (!button) return
      const rect = button.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      let x = rect.width / 2 - size / 2
      let y = rect.height / 2 - size / 2

      if (coords && typeof coords.clientX === 'number' && typeof coords.clientY === 'number') {
        x = coords.clientX - rect.left - size / 2
        y = coords.clientY - rect.top - size / 2
      } else if (coords && typeof coords.x === 'number' && typeof coords.y === 'number') {
        x = coords.x
        y = coords.y
      }

      const newRipple = { x, y, size, key: Date.now() + Math.random() }
      setButtonRipples((prevRipples) => [...prevRipples, newRipple])
    }

    useImperativeHandle(ref, () => {
      const element = internalRef.current || {}
      return Object.assign(element, {
        triggerRipple: (coords) => createRipple(coords),
        button: internalRef.current,
      })
    })

    const handleClick = (event) => {
      createRipple(event)
      onClick?.(event)
    }

    useEffect(() => {
      let timeout = null

      if (buttonRipples.length > 0) {
        const lastRipple = buttonRipples[buttonRipples.length - 1]
        timeout = setTimeout(() => {
          setButtonRipples((prevRipples) =>
            prevRipples.filter((ripple) => ripple.key !== lastRipple.key)
          )
        }, parseInt(duration, 10))
      }

      return () => {
        if (timeout !== null) {
          clearTimeout(timeout)
        }
      }
    }, [buttonRipples, duration])

    const isWorkCard = className?.includes('work-card')

    return (
      <button
        className={cn(
          'relative flex cursor-pointer items-center justify-center overflow-hidden text-center',
          className
        )}
        onClick={handleClick}
        ref={internalRef}
        {...props}
      >
        <div
          className={cn(
            'relative z-10 w-full pointer-events-none',
            isWorkCard ? 'h-full flex flex-col justify-between' : 'flex items-center justify-center',
            contentClassName
          )}
        >
          {children}
        </div>
        <span className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {buttonRipples.map((ripple) => (
            <span
              className="animate-rippling absolute rounded-full pointer-events-none"
              key={ripple.key}
              style={{
                width: `${ripple.size}px`,
                height: `${ripple.size}px`,
                top: `${ripple.y}px`,
                left: `${ripple.x}px`,
                backgroundColor: rippleColor,
                transform: 'scale(0)',
                '--duration': duration,
              }}
            />
          ))}
        </span>
      </button>
    )
  }
)

RippleButton.displayName = 'RippleButton'

export default RippleButton
