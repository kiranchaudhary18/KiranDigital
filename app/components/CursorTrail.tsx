'use client'

import { useState, useEffect } from 'react'

const CursorTrail = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor trail */}
      <div
        className="fixed pointer-events-none z-50 w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full mix-blend-difference"
        style={{
          left: position.x - 8,
          top: position.y - 8,
          transition: 'all 0.1s ease-out'
        }}
      />
      
      {/* Secondary trail */}
      <div
        className="fixed pointer-events-none z-40 w-8 h-8 border border-primary/50 rounded-full"
        style={{
          left: position.x - 16,
          top: position.y - 16,
          transition: 'all 0.2s ease-out'
        }}
      />
    </>
  )
}

export default CursorTrail