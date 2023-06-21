import './global.css'

import {Inter} from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import {Chip, HomeArticle, HomeSection} from '@/components'
import {Toaster} from '@/components/molecules/Toaster'
import {Navbar} from '@/components/Navbar'
import {LINKS} from '@/mocks'
import {TrpcProvider} from '@/trpc/TrpcProvider'
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
        <nav className="fixed top-0 w-full">
          <ul className="flex items-center justify-center gap-2 gap-x-4 p-2 w-fit mx-auto bg-gray-500 bg-opacity-40 hover:bg-opacity-20 rounded-b-md -translate-y-6 hover:-translate-y-0 duration-150 cursor-pointer hover:z-10 relative">
            {LINKS.map(link => (
              <a
                href={link.url}
                key={link.url}
                className="hover:scale-105 duration-150 flex items-center justify-center opacity-30 hover:opacity-100"
              >
                <Image
                  src={`/svg/socials/${link.icon}.svg`}
                  alt={link.label}
                  width={16}
                  height={16}
                />
              </a>
            ))}
            <div className="w-fit p-1 bg-gray-500 rounded-b opacity-40 hover:opacity-100 absolute top-0 translate-y-[35px]">
              <div className="box-border flex cursor-pointer rounded-[9px] bg-gradient-to-br from-primary to-sky-500 p-[2px] antialiased">
                <span className="box-border flex w-full items-center justify-center rounded-[8px] bg-white bg-opacity-[.96] text-sm overflow-hidden font-light transition-colors duration-300 hover:bg-sky-100">
                  <Image src="/mucahid.png" alt="logo" width={40} height={40} />
                </span>
              </div>
            </div>
          </ul>
        </nav>
        <header className="flex flex-col justify-center mx-auto w-fit mt-28 mb-12 p-4 sm:p-0">
          <Link href="/">
            <Image
              src="/svg/full-logo.svg"
              alt="logo"
              width={400}
              height={80}
              className="mb-4 cursor-pointer"
            />
          </Link>
          <Navbar />
        </header>
        <main className="max-w-4xl mx-auto lg:p-0 px-4 flex-grow">
          <div className="sm:w-2/3 flex flex-col gap-4">
            <p>
              I create accessible, user-friendly web applications with the best
              efficient solutions and best practices of the frontend world for
              SAAS projects. I`m currently working{' '}
              <a className="link" href="https://smartgift.com">
                @smartgift
              </a>
            </p>

            <HomeSection id="downloads">
              <HomeArticle
                title="Download"
                content={
                  <Chip
                    content={
                      <a href="/resume.pdf" download>
                        Resume
                      </a>
                    }
                  />
                }
              />
            </HomeSection>
          </div>
          <div className="w-full h-[1px] bg-white opacity-10 my-8"></div>
          <TrpcProvider>{children}</TrpcProvider>
        </main>
        <footer className="max-w-4xl mx-auto py-8 px-4 w-full lg:px-0">
          <div className="flex justify-between items-center w-full">
            <p className="opacity-40 text-xs">
              Created in 2022 by Mucahid Yazar
            </p>

            <ul className="flex gap-2">
              {LINKS.map(link => (
                <a
                  href={link.url}
                  key={link.url}
                  className="hover:scale-105 duration-150 flex items-center justify-center opacity-40 hover:opacity-60"
                >
                  <Image
                    src={`/svg/socials/${link.icon}.svg`}
                    alt={link.label}
                    width={16}
                    height={16}
                  />
                </a>
              ))}
            </ul>
          </div>
        </footer>

        <Toaster />
      </body>
    </html>
  )
}
