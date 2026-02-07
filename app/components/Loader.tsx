'use client'

import { useState, useEffect } from 'react'
import { Sparkles, Code } from 'lucide-react'

const Loader = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-darkBg z-50 flex flex-col items-center justify-center">
      {/* Animated Logo */}
      <div className="mb-8 relative">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white font-bold text-4xl shadow-2xl shadow-primary/50 animate-pulse">
          KD
        </div>
        <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent blur-xl opacity-50 animate-ping"></div>
      </div>

      {/* Loading Text */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-textPrimary mb-2 flex items-center gap-2 justify-center">
          <Sparkles className="animate-spin text-primary" size={24} />
          Loading Portfolio
          <Code className="animate-pulse text-secondary" size={24} />
        </h2>
        <p className="text-textSecondary">Preparing something amazing...</p>
      </div>

      {/* Progress Bar */}
      <div className="w-80 max-w-sm">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-textSecondary">Progress</span>
          <span className="text-sm text-primary font-semibold">{progress}%</span>
        </div>
        <div className="h-2 bg-cardBg rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          >
            <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Loading States */}
      <div className="mt-6 text-center">
        <div className="text-sm text-textSecondary">
          {progress < 30 && 'Initializing...'}
          {progress >= 30 && progress < 60 && 'Loading Components...'}
          {progress >= 60 && progress < 90 && 'Setting up Experience...'}
          {progress >= 90 && 'Almost Ready!'}
        </div>
      </div>
    </div>
  )
}

export default Loader