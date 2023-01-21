'use client'
import './global.css'

import { Inter } from '@next/font/google'
import { QueryClientProvider } from '@tanstack/react-query'
import Image from 'next/image'
import { ApolloProvider } from '@apollo/client'

import { LINKS } from '@/mocks'
import { Chip, HomeArticle, HomeSection, Navbar } from '@/components'
import { apolloClient, tanstackReactQueryClient } from '@/configs'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={tanstackReactQueryClient}>
      <ApolloProvider client={apolloClient}>
        <html lang="en">
          {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
          <head />
          <body
            className={`${inter.className} flex flex-col text-gray-300 overflow-x-hidden`}
          >
            <div className="fixed top-0 w-full">
              <ul className="flex items-center justify-center gap-2 gap-x-4 p-2 w-fit mx-auto bg-gray-500 bg-opacity-10 hover:bg-opacity-20 rounded-b-md -translate-y-6 hover:-translate-y-0 duration-150 cursor-pointer">
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
              </ul>
            </div>
            <header className="flex flex-col justify-center mx-auto w-fit mt-20 mb-8 p-4 sm:p-0">
              <Image
                src="/svg/full-logo.svg"
                alt="logo"
                width={400}
                height={80}
                className="mb-4"
              />
              <Navbar />
            </header>
            <main className="max-w-4xl mx-auto lg:p-0 px-4 flex-grow">
              <div className="sm:w-2/3 flex flex-col gap-4">
                <p>
                  I create accessible, user-friendly web applications with the best efficient solutions and best practices of the frontend world for SAAS projects. I`m currently working{' '}
                  <a className="link" href="https://smartgift.com">
                    @smartgift
                  </a>
                </p>

                <HomeSection id="downloads">
                  <HomeArticle
                    title='Download'
                    content={(
                      <Chip
                        content={(
                          <a href="/resume.pdf" download>
                            Resume
                          </a>
                        )}
                      />
                    )}
                  />
                </HomeSection>
              </div>
              <div className="w-full h-[1px] bg-white opacity-10 my-8"></div>
              {children}
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
          </body>
        </html>
      </ApolloProvider>
    </QueryClientProvider>
  )
}
