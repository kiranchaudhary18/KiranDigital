'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Twitter, Instagram, Sparkles } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kiran.chaudhary.cg@gmail.com',
      href: 'mailto:kiran.chaudhary.cg@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '9106003382',
      href: 'tel:9106003382'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ahmedabad, Gujarat',
      href: '#'
    }
  ]

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/kiranchaudhary18', color: 'hover:text-gray-300' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/chaudharykiran16/', color: 'hover:text-blue-400' },
    { icon: Twitter, label: 'Twitter', href: 'https://x.com/dekaliya_kiran', color: 'hover:text-cyan-400' },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formsubmit.co/ajax/kiran.chaudhary.cg@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: 'false'
        })
      })

      const data = await response.json()
      
      if (data.success === 'true' || response.ok) {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setIsSubmitting(false)
      alert('Failed to send message. Please try contacting directly at kiran.chaudhary.cg@gmail.com')
    }
  }

  return (
    <section id="contact" className="py-20 px-6 relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-primary" size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Let&apos;s Work Together</span>
          </h2>
          <p className="text-textSecondary text-lg">Have a project in mind? Let&apos;s make it happen!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Form */}
          <div className="w-full">
            <div className="glass p-6 md:p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl font-bold text-textPrimary mb-6">Send Me a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-textPrimary mb-2">Message Sent!</h4>
                  <p className="text-textSecondary">
                    Thank you for your message. I&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-textPrimary font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-cardBg border ${
                        errors.name ? 'border-red-500' : 'border-primary/20'
                      } rounded-lg text-textPrimary focus:outline-none focus:border-primary transition-colors`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-textPrimary font-medium mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-cardBg border ${
                        errors.email ? 'border-red-500' : 'border-primary/20'
                      } rounded-lg text-textPrimary focus:outline-none focus:border-primary transition-colors`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label htmlFor="subject" className="block text-textPrimary font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-cardBg border ${
                        errors.subject ? 'border-red-500' : 'border-primary/20'
                      } rounded-lg text-textPrimary focus:outline-none focus:border-primary transition-colors`}
                      placeholder="Project Inquiry"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-textPrimary font-medium mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 bg-cardBg border ${
                        errors.message ? 'border-red-500' : 'border-primary/20'
                      } rounded-lg text-textPrimary focus:outline-none focus:border-primary transition-colors resize-none`}
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="glass p-6 md:p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl font-bold text-textPrimary mb-6">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 bg-black/10 rounded-xl hover:bg-black/20 transition-all group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-textPrimary">{info.label}</h4>
                        <p className="text-textSecondary">{info.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-6 md:p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl font-bold text-textPrimary mb-6">Follow Me</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-4 py-3 bg-cardBg rounded-xl text-textSecondary transition-all duration-300 ${social.color} hover:scale-105`}
                      title={social.label}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Info */}
            <div className="glass p-6 md:p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-textPrimary mb-4">Let&apos;s Collaborate</h3>
              <p className="text-textSecondary leading-relaxed mb-4">
                I&apos;m always excited to work on new projects and bring innovative ideas to life. 
                Whether you need a full-stack web application, a responsive website, or technical consultation, 
                I&apos;m here to help.
              </p>
              <div className="flex items-center gap-2 text-accent">
                <CheckCircle size={16} />
                <span className="text-sm font-medium">Usually responds within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact