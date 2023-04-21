import './global.css'

import {Metadata} from 'next'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export function generateMetadata(): Metadata {
  const title = 'Mucahid Yazar - Frontend developer | mucahid.dev'
  const description =
    'I create accessible, user-friendly web applications with the best efficient solutions and best practices of the frontend world for SAAS projects.'

  return {
    title,
    description,
    authors: [{name: 'Mucahid Yazar', url: 'https://mucahid.dev'}],
    viewport: 'width=device-width, initial-scale=1',
    openGraph: {
      title,
      description,
      type: 'website',
      // type: 'article',
      // publishedTime: format(new Date(new Date()), 'yyyy-MM-dd'),
      // tags: [
      //   'frontend',
      //   'developer',
      //   'react',
      //   'typescript',
      //   'javascript',
      //   'nextjs',
      //   'tailwindcss',
      // ],
      locale: 'en_US',
      images: 'https://mucahid.dev/api/og',
    },
    twitter: {
      title,
      description,
      card: 'summary',
      site: 'https://mucahid.dev',
      creator: 'Mucahid Yazar',
      siteId: 'mucahid.dev',
      creatorId: 'mucahidyazar',
      images: 'https://mucahid.dev/api/og',
    },
    icons: {icon: '/favicon-32x32.png', apple: '/apple-touch-icon.png'},
    manifest: '/site.webmanifest',
    themeColor: '#ffffff',
  }
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${inter.className} flex flex-col text-gray-300 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
