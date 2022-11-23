import './global.css'

import {Inter} from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../src/components/Navbar'

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${inter.className} text-gray-300 overflow-x-hidden`}>
        <header className="mx-auto w-fit mt-20 mb-8 p-4 sm:p-0">
          <Image src="/svg/full-logo.svg" alt="logo" width={400} height={80} />
          <Navbar />
        </header>
        <main className="max-w-4xl mx-auto lg:p-0 px-4">
          <div className="sm:w-2/3 flex flex-col gap-8 mb-8">
            <p>
              Hey, I am Mucahid Yazar, a fanatical middle earth lover, a
              passionate software developer, a curious learner and a human
              being. Working{' '}
              <a className="link" href="https://smartgift.com">
                @smartgift
              </a>
            </p>
            <div className="w-full h-[1px] bg-white opacity-10"></div>
          </div>
          {children}
        </main>
        <footer className="max-w-4xl mx-auto py-8">
          <div className="w-full h-[1px] bg-white opacity-10"></div>
        </footer>
      </body>
    </html>
  )
}
