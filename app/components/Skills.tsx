'use client'

import { useState, useEffect, useRef } from 'react'
import { Code2, Database, Wrench, Heart, Monitor, Server, Palette, Users } from 'lucide-react'

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([])
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Monitor,
      color: 'from-primary to-purple-600',
      skills: [
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'CSS3', level: 90, icon: '🎨' },
        { name: 'JavaScript', level: 92, icon: '⚡' },
        { name: 'React', level: 88, icon: '⚛️' },
        { name: 'Next.js', level: 82, icon: '▲' },
        { name: 'Tailwind CSS', level: 85, icon: '💨' },
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-secondary to-pink-600',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Express.js', level: 83, icon: '🚂' },
        { name: 'MongoDB', level: 80, icon: '🍃' },
        { name: 'MySQL', level: 75, icon: '🐬' },
        { name: 'REST APIs', level: 88, icon: '🔌' },
        { name: 'PostgreSQL', level: 78, icon: '🐘' },
        { name: 'Prisma', level: 76, icon: '🔷' },
        { name: 'Supabase', level: 74, icon: '🧩' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'from-accent to-cyan-600',
      skills: [
        { name: 'Git', level: 90, icon: '📦' },
        { name: 'GitHub', level: 88, icon: '🐙' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Figma', level: 70, icon: '🎨' },
        { name: 'Postman', level: 85, icon: '📮' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Problem Solving', level: 92, icon: '🧩' },
        { name: 'Team Collaboration', level: 88, icon: '🤝' },
        { name: 'Communication', level: 85, icon: '💬' },
        { name: 'Leadership', level: 82, icon: '👑' },
        { name: 'Time Management', level: 90, icon: '⏰' }
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate skills with staggered delay
          skillCategories.forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              const delay = (categoryIndex * 500) + (skillIndex * 100)
              setTimeout(() => {
                setAnimatedSkills(prev => [...prev, skill.name])
              }, delay)
            })
          })
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <div
                key={categoryIndex}
                className="glass-effect p-8 rounded-2xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-textPrimary">{category.title}</h3>
                    <p className="text-textSecondary">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const isAnimated = animatedSkills.includes(skill.name)
                    const isHovered = hoveredSkill === skill.name

                    return (
                      <div
                        key={skillIndex}
                        className={`group transition-all duration-500 ${
                          isAnimated ? 'animate-fade-in' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${skillIndex * 0.1}s` }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {/* Skill Item */}
                        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/10 transition-all duration-300">
                          <span className="text-2xl group-hover:scale-110 transition-transform">
                            {skill.icon}
                          </span>
                          <span className="font-medium text-textPrimary group-hover:text-primary transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Skill Summary */}
        <div className="mt-16 text-center">
          <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-textPrimary mb-4 flex items-center justify-center gap-3">
              <Heart className="text-primary" size={28} />
              What I Love About Development
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 size={28} className="text-white" />
                </div>
                <h4 className="font-semibold text-textPrimary mb-2">Clean Code</h4>
                <p className="text-textSecondary text-sm">
                  Writing maintainable, scalable, and efficient code that stands the test of time
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette size={28} className="text-white" />
                </div>
                <h4 className="font-semibold text-textPrimary mb-2">UI/UX Design</h4>
                <p className="text-textSecondary text-sm">
                  Creating intuitive and beautiful user interfaces that provide excellent user experiences
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={28} className="text-white" />
                </div>
                <h4 className="font-semibold text-textPrimary mb-2">Problem Solving</h4>
                <p className="text-textSecondary text-sm">
                  Tackling complex challenges and finding innovative solutions through technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills