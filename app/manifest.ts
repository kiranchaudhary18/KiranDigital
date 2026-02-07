import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kiran Dekaliya - Full Stack Developer',
    short_name: 'Kiran Dekaliya',
    description: 'Full Stack Developer specializing in modern web technologies. Experienced in React, Next.js, Node.js, and cloud solutions.',
    start_url: '/',
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
    ],
    categories: ['portfolio', 'development', 'technology'],
    lang: 'en',
    orientation: 'portrait',
  }
}