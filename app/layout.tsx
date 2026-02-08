import React from 'react'
import { Metadata } from 'next'
import './styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Kiran Dekaliya - Full Stack Developer | Modern Web Solutions',
    template: '%s | Kiran Dekaliya - Full Stack Developer',
  },
  description: 'Experienced Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Creating innovative web applications with modern technologies. Based in India, available for freelance and full-time opportunities.',
  keywords: [
    'Kiran Dekaliya',
    'Kiran Chaudhary',
    'Full Stack Developer India',
    'React Developer',
    'Next.js Developer', 
    'Node.js Developer',
    'MERN Stack Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Web Development Services',
    'Frontend Development',
    'Backend Development',
    'MongoDB Developer',
    'Express.js Developer',
    'Portfolio Website',
    'Web Designer',
    'UI/UX Developer',
    'Freelance Developer',
    'Software Engineer',
    'API Development',
    'Database Design',
    'Responsive Web Design',
    'Modern Web Technologies'
  ],
  authors: [{ name: 'Kiran Dekaliya', url: 'https://kirandekaliya.in' }],
  creator: 'Kiran Dekaliya',
  publisher: 'Kiran Dekaliya',
  metadataBase: new URL('https://kirandekaliya.in'),
  alternates: {
    canonical: '/',
  },
  category: 'Portfolio',
  classification: 'Business',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kirandekaliya.in',
    title: 'Kiran Dekaliya - Full Stack Developer | Modern Web Solutions',
    description: 'Experienced Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Creating innovative web applications with modern technologies.',
    siteName: 'Kiran Dekaliya - Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kiran Dekaliya - Full Stack Developer Portfolio Website',
        type: 'image/jpeg',
      },
      {
        url: '/og-image-square.jpg',
        width: 600,
        height: 600,
        alt: 'Kiran Dekaliya - Full Stack Developer',
        type: 'image/jpeg',
      },
    ],
    videos: [
      {
        url: '/portfolio-intro.mp4',
        width: 1280,
        height: 720,
        type: 'video/mp4',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kirandekaliya',
    creator: '@kirandekaliya',
    title: 'Kiran Dekaliya - Full Stack Developer | Modern Web Solutions',
    description: 'Experienced Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Creating innovative web applications with modern technologies.',
    images: {
      url: '/twitter-image.jpg',
      alt: 'Kiran Dekaliya - Full Stack Developer Portfolio',
      width: 1200,
      height: 630,
      type: 'image/jpeg',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  icons: {
    icon: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1767778166/Screenshot_247_oqkowy.png',
    shortcut: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1767778166/Screenshot_247_oqkowy.png',
    apple: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1767778166/Screenshot_247_oqkowy.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <head>
        {/* Essential preconnects for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Critical CSS and viewport optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Dynamic theme color based on user preference */}
        <meta name="theme-color" content="#8B5CF6" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#8B5CF6" media="(prefers-color-scheme: light)" />
        <meta name="msapplication-TileColor" content="#8B5CF6" />
        
        {/* Preload critical resources for performance */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className="antialiased">
        {children}
        {/* Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Person',
                  '@id': 'https://kirandekaliya.in/#person',
                  name: 'Kiran Dekaliya',
                  jobTitle: 'Full Stack Developer',
                  description: 'Experienced Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB',
                  url: 'https://kirandekaliya.in',
                  image: 'https://kirandekaliya.in/profile-image.jpg',
                  sameAs: [
                    'https://github.com/kiranchaudhary18',
                    'https://linkedin.com/in/kiran-dekaliya',
                    'https://twitter.com/kirandekaliya'
                  ],
                  knowsAbout: [
                    'React',
                    'Next.js',
                    'Node.js',
                    'MongoDB',
                    'JavaScript',
                    'TypeScript',
                    'Web Development',
                    'Full Stack Development'
                  ],
                  hasOccupation: {
                    '@type': 'Occupation',
                    name: 'Full Stack Developer',
                    occupationLocation: {
                      '@type': 'Place',
                      name: 'India'
                    },
                    skills: ['React', 'Next.js', 'Node.js', 'MongoDB', 'JavaScript', 'TypeScript']
                  }
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://kirandekaliya.in/#website',
                  url: 'https://kirandekaliya.in',
                  name: 'Kiran Dekaliya - Full Stack Developer Portfolio',
                  description: 'Portfolio website showcasing full stack development projects and skills',
                  publisher: {
                    '@id': 'https://kirandekaliya.in/#person'
                  },
                  inLanguage: 'en-US'
                },
                {
                  '@type': 'Organization',
                  '@id': 'https://kirandekaliya.in/#organization',
                  name: 'Kiran Dekaliya',
                  alternateName: 'Kiran Dekaliya Development',
                  url: 'https://kirandekaliya.in',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://kirandekaliya.in/logo.png'
                  },
                  founder: {
                    '@id': 'https://kirandekaliya.in/#person'
                  }
                }
              ]
            })
          }}
        />
      </body>
    </html>
  )
}