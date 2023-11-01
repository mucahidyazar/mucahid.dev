import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bekten Usubaliev`s web and portfolio site',
    short_name: 'Bekten',
    description: 'Bekten Usubaliev is a painter and artist based in Bishek, Kyrgyzstan. He is known for his paintings of the Kyrgyz people and their culture.',
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