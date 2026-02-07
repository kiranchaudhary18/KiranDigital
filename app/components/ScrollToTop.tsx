'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 p-3 bg-gradient-to-br from-primary to-secondary text-white rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-110 group"
      title="Scroll to top"
    >
      <ChevronUp 
        size={24} 
        className="group-hover:animate-bounce" 
      />
    </button>
  )
}

export default ScrollToTop