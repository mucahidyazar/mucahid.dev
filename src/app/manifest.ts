import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mucahid Yazar`s web and portfolio site',
    short_name: 'mucahid.dev',
    description: 'Mucahid creates accessible, user-friendly web applications with the best efficient solutions and best practices of the frontend world for SAAS projects.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}