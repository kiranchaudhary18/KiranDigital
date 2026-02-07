'use client'

import { useState, useEffect, useRef } from 'react'
import { ExternalLink, Github, Filter, FileText, Video, X } from 'lucide-react'
import Image from 'next/image'

interface Project {
  title: string
  category: string
  description: string
  image: string
  tech: string[]
  liveUrl?: string
  codeUrl?: string
  apiDocsUrl?: string
  demoVideoUrl?: string
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState<typeof projects>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [manuallyFlippedCards, setManuallyFlippedCards] = useState<number[]>([])
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [currentVideoUrl, setCurrentVideoUrl] = useState('')
  const [isVideoLoading, setIsVideoLoading] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const isTouchDevice = useRef(false)

  const filters = ['All', 'MERN', 'Other']

  const projects = [
    {
      title: 'Tattoos_studio_website',
      category: 'MERN',
      description: 'Designed and developed a user-friendly platform where tattoo lovers can discover styles, find artists, and learn about tattoo care. Integrated a virtual preview feature to enhance decision-making.',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1767986231/Gemini_Generated_Image_tscffbtscffbtscf_as4mit.png',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      liveUrl: 'https://tattoos-dreamers-studio.onrender.com/',
      codeUrl: 'https://github.com/kiranchaudhary18/tattoos_website',
      apiDocsUrl: 'https://documenter.getpostman.com/view/39216531/2sAYX2P4dZ',
      demoVideoUrl: 'https://www.youtube.com/watch?v=iLgs_iYD_4c'
    },
    {
      title: 'MediConnect - HealthCare Platform',
      category: 'MERN',
      description: 'Developed a role-based healthcare web application featuring separate dashboards for Doctors, Patients, and Students. Included real-time chat, appointment management, analytics, and an AI assistant to enhance user interaction and learning experience',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
      liveUrl: 'https://www.mediconnecthub.in/',
      codeUrl: 'https://github.com/kiranchaudhary18/MediConnect',
      apiDocsUrl: 'https://documenter.getpostman.com/view/39216531/2sB3dVNTGX',
      demoVideoUrl: '#'
    },
    {
      title: 'Ecommerce-forever',
      category: 'MERN',
      description: 'A modern full-stack fashion e-commerce application featuring dynamic product filtering, responsive layouts, consistent image handling, and a complete product detail and cart flow.',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1767986615/Gemini_Generated_Image_h1dvxih1dvxih1dv_jd4a1i.png',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Stripe', 'Razorpay'],
      liveUrl: 'https://forever360.in/',
      codeUrl: 'https://github.com/kiranchaudhary18/Ecommerce-app',
      apiDocsUrl: 'https://documenter.getpostman.com/view/39216531/2sBXVeFXoG',
      demoVideoUrl: 'https://youtu.be/d-qHYIlwKHE'
    },
    {
      title: 'ConvoHub — Real-Time Chat & Group Communication Platform',
      category: 'MERN',
      description: 'A modern full-stack real-time chat application featuring one-to-one and group messaging, live message delivery with WebSockets, secure authentication, interactive SaaS-style UI, and an email-based user invite system.',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1770270006/Gemini_Generated_Image_u5hcjsu5hcjsu5hc_dikn5v.png',
      tech: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Tailwind CSS', 'JWT'],
      liveUrl: 'https://www.convohub.in/',
      codeUrl: 'https://github.com/kiranchaudhary18/ConvoHub',
      apiDocsUrl: 'https://documenter.getpostman.com/view/39216531/2sBXc8nhpT',
      demoVideoUrl: 'https://youtu.be/d-qHYIlwKHE'
    },
    {
      title: 'GearGuard - Hackathon Project',
      category: 'MERN',
      description: 'Designed a full-stack Maintenance ERP system with role-based access and Kanban/calendar workflows for efficient asset and maintenance management.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      liveUrl: 'https://gearguard-qpbj.onrender.com/login',
      codeUrl: 'https://github.com/kiranchaudhary18/OdooXadani',
      apiDocsUrl: 'https://documenter.getpostman.com/view/39216531/2sBXVeGCzQ',
      demoVideoUrl: 'https://drive.google.com/file/d/1JetVrzQsU51tw1rL5dr11Vbtm0acdaT_/view?usp=sharing'
    },
    {
      title: 'Code Review & Bug Finder',
      category: 'MERN',
      description: 'AI-powered Code Review tool that detects bugs, security issues, and optimizes your code — with refactoring and full review history built using the MERN stack + Groq API.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      tech: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
      liveUrl: 'https://code-review-and-bug-finder-in-rx4a.onrender.com/',
      codeUrl: 'https://github.com/kiranchaudhary18/code_review_and_bug_finder'
    },
    {
      title: 'Habit-Tracker',
      category: 'In this use Supabase',
      description: 'A React app to search meals, Harry Potter characters, cocktails, and bank info using multiple public APIs — fast and dynamic UI.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop',
      tech: ['Next.js', 'MongoDB', 'Markdown', 'Auth0'],
      liveUrl: 'https://ai-habit-tracker-45qa.onrender.com',
      codeUrl: 'https://github.com/kiranchaudhary18/Habit_Tracker'
    },
    {
      title: 'API Explorer Hub',
      category: 'React',
      description: 'A React app to search meals, Harry Potter characters, cocktails, and bank info using multiple public APIs — fast and dynamic UI.',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753954845/AJfQ9KR4NI61mWhshnNJXFzO3caqqk2adqqAS92yby4OdTXLFhCxSAQuheOlv4NqOD2wztsWxtDtgTDfa_6Tpal95bCXZakF3A_cBoe8SiZmkYc4gu_lKUhkdUs2T8b9UkpAgQv3yC0GAEddvb87nSwSIqsAw7MwqBYEUjVnZsfL7znTuVUY_1_txupui_moedzc.png',
      tech: ['React', 'Express.js', 'REST API'],
      liveUrl: 'https://react-api-1.onrender.com/',
      codeUrl: 'https://github.com/kiranchaudhary18/React-API'
    },
    {
      title: 'Meme-generator',
      category: 'React',
      description: 'A meme generator that lets users upload or choose images, customize text styles, and download memes instantly.',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1767985896/Screenshot_2026-01-10_004226_l5btua.png',
      tech: ['React', 'REST API', 'Gemini API'],
      liveUrl: 'https://meme-generator-pi-sepia.vercel.app/',
      codeUrl: 'https://github.com/kiranchaudhary18/Meme-generator'
    },
    {
      title: 'YouPlayX',
      category: 'React',
      description: 'A Youtube clone in React with real time video search and playback using the YouTube API- clean and Responsive UI',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753941530/Y19wYWQsd18yMDAsaF8zMDA_2_a1bkss.png',
      tech: ['React', 'REST API', 'Express'],
      liveUrl: 'https://youtube-com-1.onrender.com/',
      codeUrl: 'https://github.com/kiranchaudhary18/youtube.com'
    },
    {
      title: 'Cartoon NetWork',
      category: 'Clone',
      description: 'A fun and interactive website clone of the Cartoon Network homepage, built purely with HTML and CSS.',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753954396/cartton_evgbvg_1_i43ioq.png',
      tech: ['HTML', 'CSS'],
      liveUrl: 'https://cartoon-website-1.netlify.app/',
      codeUrl: 'https://github.com/kiranchaudhary18/youtube.com'
    },
    {
      title: 'DigiGold',
      category: 'Clone',
      description: 'A clean and modern landing page for a digital gold platform, designed to be fully responsive using HTML and CSS.',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753954556/digigold_tijeho_1_um7bq0.png',
      tech: ['HTML', 'CSS'],
      liveUrl: 'https://digigold-1.netlify.app/',
      codeUrl: 'https://github.com/kiranchaudhary18/digigold'
    },
    {
      title: 'CodingGita Clone in FIGMA',
      category: 'UI/UX',
      description: 'A UI/UX design prototype for a food delivery application, created with Figma to ensure a seamless user experience.',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753956418/codinggita-logo_urbgxt_ocbtxz.png',
      tech: ['FIGMA'],
      liveUrl: 'https://www.figma.com/proto/E6bEiKGItd1H4CJyOPvKkQ/Food?page-id=0%3A1&node-id=37-360&starting-point-node-id=37%3A360&t=UH6IWR19sFSCTdtW-1'
    }
  ]

  const openVideoModal = (videoUrl: string) => {
    setIsVideoModalOpen(true)
    setIsVideoLoading(true)
    
    let embedUrl = videoUrl

    if (videoUrl.includes('drive.google.com/file/d/')) {
      const fileId = videoUrl.match(/\/d\/(.+?)\//)?.[1] || videoUrl.split('/d/')[1]?.split('/')[0]
      embedUrl = `https://drive.google.com/file/d/${fileId}/preview`
    } else if (videoUrl.includes('youtu.be/')) {
      const id = videoUrl.split('youtu.be/')[1].split(/[?&]/)[0]
      embedUrl = `https://www.youtube.com/embed/${id}`
    } else if (videoUrl.includes('youtube.com/watch')) {
      const match = videoUrl.match(/[?&]v=([^&]+)/)
      const id = match?.[1]
      if (id) embedUrl = `https://www.youtube.com/embed/${id}`
    }

    if (embedUrl.includes('youtube.com/embed/') && !embedUrl.includes('autoplay')) {
      embedUrl = `${embedUrl}${embedUrl.includes('?') ? '&' : '?'}autoplay=1`
    }

    setCurrentVideoUrl(embedUrl)
  }

  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
    setCurrentVideoUrl('')
    setIsVideoLoading(false)
  }

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects)
    } else if (activeFilter === 'MERN') {
      setFilteredProjects(projects.filter(p => p.category === 'MERN'))
    } else if (activeFilter === 'Other') {
      setFilteredProjects(projects.filter(p => p.category !== 'MERN'))
    }
  }, [activeFilter])

  const setFlip = (index: number, value: boolean) => {
    setFlippedCards(prev => {
      const has = prev.includes(index)
      if (value && !has) return [...prev, index]
      if (!value && has) return prev.filter(i => i !== index)
      return prev
    })
  }

  useEffect(() => {
    const prefersNoHover = window.matchMedia('(hover: none)').matches
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    isTouchDevice.current = prefersNoHover || hasTouch

    if (!isTouchDevice.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute('data-card-index'))
          if (Number.isNaN(idx)) return
          
          if (entry.isIntersecting && !manuallyFlippedCards.includes(idx)) {
            setFlip(idx, true)
            setTimeout(() => {
              if (!manuallyFlippedCards.includes(idx)) {
                setFlip(idx, false)
              }
            }, 1400)
          }
        })
      },
      { threshold: 0.25, rootMargin: '0px 0px -20% 0px' }
    )

    const cards = sectionRef.current?.querySelectorAll('.project-card')
    cards?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [filteredProjects, manuallyFlippedCards])

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 relative" aria-labelledby="projects-heading">
      {/* Section Divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-textSecondary text-lg">Explore my recent work and creations</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" role="group" aria-labelledby="filter-label">
          <span id="filter-label" className="sr-only">Filter projects by category:</span>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                  : 'glass-effect text-textSecondary hover:text-primary'
              }`}
            >
              <Filter size={18} aria-hidden="true" />
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {filteredProjects.map((project, index) => {
            const isFlipped = flippedCards.includes(index)
            
            return (
              <article
                key={index}
                role="listitem"
                className="project-card h-96 [perspective:1000px]"
                data-card-index={index}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setFlip(index, true)}
                onMouseLeave={() => setFlip(index, false)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                    isFlipped ? '[transform:rotateY(180deg)]' : ''
                  }`}
                >
                  {/* Front Face */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] glass-effect rounded-2xl overflow-hidden shadow-xl">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.category} project screenshot showing ${project.description.slice(0, 100)}`}
                        width={400}
                        height={192}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                        quality={80}
                      />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-textPrimary mb-3 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-textSecondary text-sm line-clamp-3 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech: string, techIndex: number) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] glass-effect rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                    <div className="p-6 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-textPrimary mb-3">
                          {project.title}
                        </h3>
                        
                        {/* Project Description */}
                        <div className="mb-4">
                          <p className="text-textSecondary text-sm leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm font-semibold text-textPrimary mb-2">Technologies:</h4>
                            <div className="flex flex-wrap gap-1">
                              {project.tech.map((tech: string, techIndex: number) => (
                                <span
                                  key={techIndex}
                                  className="px-2 py-1 bg-primary/20 text-textPrimary text-xs rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex gap-2">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 py-2 px-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                            >
                              <ExternalLink size={16} />
                              Live Demo
                            </a>
                          )}
                          {project.codeUrl && (
                            <a
                              href={project.codeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 py-2 px-3 border border-primary text-primary rounded-lg text-sm font-semibold hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
                            >
                              <Github size={16} />
                              Code
                            </a>
                          )}
                        </div>
                        
                        {(project.apiDocsUrl || project.demoVideoUrl) && (
                          <div className="flex gap-2">
                            {project.apiDocsUrl && (
                              <a
                                href={project.apiDocsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-2 px-3 border border-accent text-accent rounded-lg text-sm font-semibold hover:bg-accent/10 transition-all flex items-center justify-center gap-2"
                              >
                                <FileText size={16} />
                                API Docs
                              </a>
                            )}
                            {project.demoVideoUrl && project.demoVideoUrl !== '#' && (
                              <button
                                onClick={() => openVideoModal(project.demoVideoUrl)}
                                className="flex-1 py-2 px-3 border border-secondary text-secondary rounded-lg text-sm font-semibold hover:bg-secondary/10 transition-all flex items-center justify-center gap-2"
                              >
                                <Video size={16} />
                                Demo Video
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4 bg-cardBg rounded-2xl overflow-hidden">
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all"
            >
              <X size={24} />
            </button>
            
            <div className="aspect-video">
              {isVideoLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-darkBg">
                  <div className="loading-spinner"></div>
                </div>
              )}
              <iframe
                src={currentVideoUrl}
                title="Demo Video"
                className="w-full h-full"
                allowFullScreen
                onLoad={() => setIsVideoLoading(false)}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects