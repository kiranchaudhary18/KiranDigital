'use client'

import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import Loader from './components/Loader'
import CursorTrail from './components/CursorTrail'

export default function HomePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="dark">
      <div className="bg-darkBg min-h-screen text-textPrimary">
        <CursorTrail />
        
        {/* Header/Navigation */}
        <header role="banner">
          <Sidebar />
        </header>
        
        {/* Main Content */}
        <main className="ml-0 md:ml-[100px] transition-all duration-300" role="main">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        
        {/* Utility Components */}
        <ScrollToTop />
      </div>
    </div>
  )
}