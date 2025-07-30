import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: '/private/',
      },
    ],
    sitemap: 'https://pixelnft.top/sitemap.xml',
    host: 'https://pixelnft.top',
  }
} 