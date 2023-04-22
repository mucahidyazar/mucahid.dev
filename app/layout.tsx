import './global.css'

import {Inter} from 'next/font/google'

import {prepareMetadata} from '@/utils'

const inter = Inter({subsets: ['latin']})

export function generateMetadata() {
  return prepareMetadata()
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
