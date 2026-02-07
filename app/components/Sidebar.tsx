'use client'

import { useState, useEffect } from 'react'
import { Home, User, GraduationCap, Code2, Briefcase, Award, Mail, Github, Linkedin, Twitter, Menu, X } from 'lucide-react'

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'skills', icon: Code2, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'certificates', icon: Award, label: 'Certificates' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/kiranchaudhary18', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/chaudharykiran16/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/dekaliya_kiran', label: 'Twitter' },
    { icon: Mail, href: 'mailto:kiran.chaudhary.cg@gmail.com', label: 'Email' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 200

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop
          const bottom = top + section.offsetHeight
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(navItems[index].id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-3 glass-effect rounded-lg text-textPrimary hover:text-primary transition-colors"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-[280px] md:w-[100px] glass-effect border-r border-primary/20 z-40 transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full py-8 px-4">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/50">
              KD
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative w-full flex flex-col items-center py-4 px-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-textSecondary hover:text-primary hover:bg-primary/5'
                  }`}
                  title={item.label}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute left-0 w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-r-full animate-slide-right" />
                  )}
                  
                  <Icon size={24} className="mb-1" />
                  <span className="text-xs font-medium">{item.label}</span>
                  
                  {/* Tooltip for desktop */}
                  <div className="hidden md:block absolute left-full ml-4 px-2 py-1 bg-cardBg text-textPrimary text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    {item.label}
                  </div>
                </button>
              )
            })}
          </nav>

          {/* Social Links */}
          <div className="mt-auto">
            <div className="space-y-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex justify-center w-full p-3 text-textSecondary hover:text-primary transition-colors duration-300 rounded-lg hover:bg-primary/5"
                    title={link.label}
                  >
                    <Icon size={20} />
                    {/* Social link tooltip */}
                    <div className="hidden md:block absolute left-full ml-4 px-2 py-1 bg-cardBg text-textPrimary text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                      {link.label}
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar