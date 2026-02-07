'use client'

import { useState, useEffect, useRef } from 'react'
import { Briefcase, Award, Code2, Users, BookOpen, Music, Gamepad2, Plane, Terminal } from 'lucide-react'

const About = () => {
  const [counters, setCounters] = useState({ projects: 0, certificates: 0, technologies: 0, 'leetcode que': 0 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const stats = [
    { key: 'projects', icon: Briefcase, end: 10, label: 'Projects Completed', suffix: '+' },
    { key: 'certificates', icon: Award, end: 10, label: 'Certificates', suffix: '+' },
    { key: 'technologies', icon: Code2, end: 10, label: 'Technologies', suffix: '+' },
    { key: 'leetcode que', icon: Terminal, end: 200, label: 'Leetcode Que', suffix: '+' }
  ]

  const interests = [
    { icon: Music, label: 'Music', color: 'from-secondary to-pink-600' },
    { icon: Gamepad2, label: 'Gaming', color: 'from-accent to-cyan-600' },
    { emoji: '🏏', label: 'Cricket', color: 'from-green-500 to-blue-600' },
    { icon: Plane, label: 'Travel', color: 'from-primary to-secondary' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateCounters()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    stats.forEach((stat) => {
      let current = 0
      const increment = stat.end / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= stat.end) {
          setCounters(prev => ({ ...prev, [stat.key]: stat.end }))
          clearInterval(timer)
        } else {
          setCounters(prev => ({ ...prev, [stat.key]: Math.floor(current) }))
        }
      }, 30)
    })
  }

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 relative" aria-labelledby="about-heading">
      {/* Section Divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" aria-hidden="true"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions and exploring new technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: About Content */}
          <div className="space-y-6">
            {/* Introduction */}
            <article className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-textPrimary mb-4 flex items-center gap-3">
                <Users className="text-primary" size={28} aria-hidden="true" />
                Who I Am
              </h3>
              <p className="text-textSecondary leading-relaxed mb-4">
                I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. 
                I love creating digital solutions that not only look great but also provide exceptional user experiences.
              </p>
              <p className="text-textSecondary leading-relaxed">
                My journey in tech has been driven by curiosity and a constant desire to learn and grow. 
                I believe in writing clean, efficient code and am always excited about new challenges and opportunities 
                to make a meaningful impact.
              </p>
            </article>

            {/* Interests */}
            <article className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-textPrimary mb-6 flex items-center gap-3">
                <BookOpen className="text-secondary" size={28} aria-hidden="true" />
                My Interests
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl bg-gradient-to-br ${interest.color} bg-opacity-10 border border-white/10 hover:bg-opacity-20 transition-all duration-300 group cursor-pointer`}
                  >
                    <div className="flex items-center gap-3">
                      {interest.icon ? (
                        <interest.icon size={24} className="text-white group-hover:scale-110 transition-transform" />
                      ) : (
                        <span className="text-2xl group-hover:scale-110 transition-transform">{interest.emoji}</span>
                      )}
                      <span className="text-textPrimary font-medium">{interest.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="glass-effect p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-textPrimary mb-2">
                    {Math.floor(counters[stat.key as keyof typeof counters])}{stat.suffix}
                  </div>
                  <div className="text-textSecondary text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Personal Quote */}
        <div className="mt-16 text-center">
          <blockquote className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-textPrimary font-light italic leading-relaxed">
              &quot;The best way to predict the future is to create it. Every line of code is a step towards 
              building something meaningful and impactful.&quot;
            </p>
            <footer className="mt-4 text-textSecondary">
              — My Development Philosophy
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default About