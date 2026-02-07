import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kiran Dekaliya - Full Stack Developer Portfolio',
    short_name: 'Kiran Dekaliya',
    description: 'Experienced Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Creating innovative web applications with modern technologies.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#0F172A',
    theme_color: '#8B5CF6',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    categories: ['portfolio', 'development', 'technology', 'business'],
    lang: 'en-US',
    orientation: 'portrait-primary',
    prefer_related_applications: false,
    dir: 'ltr',
  }
}