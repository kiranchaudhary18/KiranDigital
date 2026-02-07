import React from 'react'
import { Metadata } from 'next'
import './styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Kiran Dekaliya - Full Stack Developer',
    template: '%s | Kiran Dekaliya',
  },
  description: 'Full Stack Developer specializing in modern web technologies. Experienced in React, Next.js, Node.js, and cloud solutions. Building innovative digital experiences.',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer', 
    'Node.js Developer',
    'JavaScript',
    'TypeScript',
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Kiran Dekaliya',
    'Portfolio',
    'UI/UX',
    'Problem Solver'
  ],
  authors: [{ name: 'Kiran Dekaliya' }],
  creator: 'Kiran Dekaliya',
  publisher: 'Kiran Dekaliya',
  metadataBase: new URL('https://kirandekaliya.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kirandekaliya.vercel.app',
    title: 'Kiran Dekaliya - Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web technologies. Experienced in React, Next.js, Node.js, and cloud solutions.',
    siteName: 'Kiran Dekaliya Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kiran Dekaliya - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kiran Dekaliya - Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web technologies. Experienced in React, Next.js, Node.js, and cloud solutions.',
    images: ['/twitter-image.jpg'],
    creator: '@kirandekaliya',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}