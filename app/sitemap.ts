import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kirandekaliya.in'
  const lastModified = new Date('2026-02-07T00:00:00.000Z')
  
  return [
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}