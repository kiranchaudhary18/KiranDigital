'use client'

import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Award, Calendar, TrendingUp } from 'lucide-react'

const Education = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'CodingGita × Rai University Ahmedabad',
      duration: '2024 - Ongoing',
      grade: 'CGPA: 9.30/10',
      achievements: [
        'Currently in 4th Semester',
        'Building solid foundation in core technologies',
        'Active participation in hands-on projects'
      ]
    },
    {
      degree: 'Higher Secondary Education (HSC) - Science',
      institution: 'Shri Swastik Higher Secondary School, Palanpur',
      duration: '2022 - 2024',
      grade: 'Percentile Rank: 69.17',
      achievements: [
        'Focused approach during higher secondary education',
        'Strong foundation in Mathematics and Computer Science',
        'Completed with solid academic performance'
      ]
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Shri T.D.Shah Vidhyalay, Palanpur',
      duration: '2020 - 2022',
      grade: 'Percentile Rank: 84.17',
      achievements: [
        'Strong academic foundation',
        'Consistent performance throughout the year',
        'Demonstrated dedication and focus in studies'
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            if (!visibleItems.includes(index)) {
              setVisibleItems(prev => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    const items = sectionRef.current?.querySelectorAll('.education-item')
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [visibleItems])

  return (
    <section id="education" ref={sectionRef} className="py-20 px-6 relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <GraduationCap className="text-primary" size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            The academic journey that shaped my knowledge and skills
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {education.map((edu, index) => {
              const isVisible = visibleItems.includes(index)
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`education-item relative flex ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-darkBg shadow-lg flex items-center justify-center z-10">
                    <GraduationCap size={16} className="text-white" />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      isLeft ? 'md:pr-8' : 'md:pl-8'
                    }`}
                  >
                    <div
                      className={`glass p-8 rounded-2xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 ${
                        isVisible
                          ? `animate-slide-${isLeft ? 'right' : 'left'}`
                          : 'opacity-0 translate-x-8'
                      }`}
                      style={{
                        animationDelay: `${index * 0.2}s`
                      }}
                    >
                      {/* Duration Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full mb-4">
                        <Calendar size={16} className="text-primary" />
                        <span className="text-sm font-medium text-textPrimary">
                          {edu.duration}
                        </span>
                      </div>

                      {/* Degree */}
                      <h3 className="text-xl font-bold text-textPrimary mb-2">
                        {edu.degree}
                      </h3>

                      {/* Institution */}
                      <p className="text-textSecondary font-medium mb-3">
                        {edu.institution}
                      </p>

                      {/* Grade */}
                      <div className="flex items-center gap-2 mb-4">
                        <Award size={16} className="text-accent" />
                        <span className="text-accent font-semibold">
                          {edu.grade}
                        </span>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-textPrimary flex items-center gap-2">
                          <TrendingUp size={16} className="text-secondary" />
                          Key Highlights
                        </h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="text-textSecondary text-sm flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-2xl border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-textPrimary mb-4 flex items-center justify-center gap-3">
              <TrendingUp className="text-primary" size={28} />
              Current Focus
            </h3>
            <p className="text-textSecondary leading-relaxed">
              Currently pursuing B.Tech in Computer Science, focusing on advanced web development, 
              algorithms, and building real-world projects. Always eager to learn new technologies 
              and contribute to innovative solutions.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <span className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full text-sm font-medium text-textPrimary">
                Data Structures & Algorithms
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full text-sm font-medium text-textPrimary">
                Full Stack Development
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education