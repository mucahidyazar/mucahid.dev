import { MetadataRoute } from 'next'

import { env } from '@/configs/env.mjs'
import { ME } from '@/constants'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${ME.fullName}'s web and portfolio site`,
    short_name: env.NEXT_PUBLIC_APP_URL,
    description: `${ME.firstName} creates accessible, user-friendly web applications with the best efficient solutions and best practices of the frontend world for SAAS projects.`,
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