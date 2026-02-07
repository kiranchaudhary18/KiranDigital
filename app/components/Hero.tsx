'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Download, Sparkles, Briefcase, Award, Code2, Terminal, Trophy } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const roles = [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Tech Explorer'
  ]

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRoleIndex, roles])

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1ixuvV_AFNlaYOkrP_Aurwzy_jZmLRUrR/view?usp=sharing', '_blank')
  }

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-bg opacity-20" aria-hidden="true"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-primary/30 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-4 border-secondary/30 rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 border-4 border-accent/30 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rotate-45 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Greeting */}
        <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in">
          <Sparkles className="text-primary animate-pulse" size={20} aria-hidden="true" />
          <p className="text-textSecondary text-lg">Hello, I'm</p>
        </div>

        {/* Name - Main H1 */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-down">
          <span className="text-gradient">Kiran Dekaliya</span>
        </h1>

        {/* Typing Animation - Subtitle */}
        <div className="h-16 mb-8 flex items-center justify-center">
          <p className="text-2xl md:text-4xl font-semibold text-textPrimary" role="banner" aria-live="polite">
            {displayText}
            <span className="animate-pulse" aria-hidden="true">|</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto mb-12 animate-fade-in leading-relaxed">
          Crafting elegant solutions to complex problems. Passionate about creating beautiful, 
          functional, and user-centric digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <button
            onClick={scrollToProjects}
            className="btn-primary px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Sparkles size={20} />
            Explore My Work
          </button>
          <button
            onClick={handleDownloadResume}
            className="btn-primary px-8 py-4 border-2 border-primary text-textPrimary rounded-full font-semibold hover:bg-primary/10 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Code2 className="text-primary" size={32} />
            </div>
            <div className="text-2xl font-bold text-textPrimary">10+</div>
            <div className="text-textSecondary">Technologies</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Briefcase className="text-secondary" size={32} />
            </div>
            <div className="text-2xl font-bold text-textPrimary">10+</div>
            <div className="text-textSecondary">Projects</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Award className="text-accent" size={32} />
            </div>
            <div className="text-2xl font-bold text-textPrimary">10+</div>
            <div className="text-textSecondary">Certificates</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Terminal className="text-primary" size={32} />
            </div>
            <div className="text-2xl font-bold text-textPrimary">200+</div>
            <div className="text-textSecondary">LeetCode</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-textSecondary hover:text-primary transition-colors cursor-pointer" size={32} />
        </div>
      </div>
    </section>
  )
}

export default Hero