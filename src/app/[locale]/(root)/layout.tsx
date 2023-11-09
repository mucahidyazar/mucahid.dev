import Image from 'next/image'
import Link from 'next/link'

import {HomeArticle, HomeSection} from '@/components'
import {Navbar} from '@/components/Navbar'
import {Badge} from '@/components/ui/badge'
import {ME} from '@/constants'
import {LINKS} from '@/mocks'
import {TrpcProvider} from '@/trpc/TrpcProvider'
import {prepareMetadata} from '@/utils/prepareMetadata'

export function generateMetadata() {
  return prepareMetadata()
}

type RootLayoutProps = {
  children: React.ReactNode
}
export default async function RootLayout({children}: RootLayoutProps) {
  return (
    <div>
      <nav className="fixed top-0 w-full">
        <ul className="relative mx-auto flex w-fit -translate-y-6 cursor-pointer items-center justify-center gap-2 gap-x-4 rounded-b-md bg-gray-500 bg-opacity-40 p-2 duration-150 hover:z-10 hover:-translate-y-0 hover:bg-opacity-20">
          {LINKS.map(link => (
            <a
              href={link.url}
              key={link.url}
              className="flex items-center justify-center opacity-30 duration-150 hover:scale-105 hover:opacity-100"
            >
              <Image
                src={`/svg/socials/${link.icon}.svg`}
                alt={link.label}
                width={16}
                height={16}
              />
            </a>
          ))}
          <div className="absolute top-0 w-fit translate-y-[35px] rounded-b bg-gray-500 p-1 opacity-40 hover:opacity-100">
            <div className="from-main box-border flex cursor-pointer rounded-[9px] bg-gradient-to-br to-sky-500 p-[2px] antialiased">
              <span className="box-border flex w-full items-center justify-center overflow-hidden rounded-[8px] bg-white bg-opacity-[.96] text-sm font-light transition-colors duration-300 hover:bg-sky-100">
                <Image src="/me.png" alt="logo" width={40} height={40} />
              </span>
            </div>
          </div>
        </ul>
      </nav>
      <header className="mx-auto mb-12 mt-28 flex w-fit flex-col justify-center p-4 sm:p-0">
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
      <main className="mx-auto max-w-full flex-grow px-4 lg:max-w-4xl lg:p-0">
        <div className="flex flex-col gap-4 sm:w-2/3">
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
                <Badge variant="secondary">
                  <a href="/resume.pdf" download>
                    Resume
                  </a>
                </Badge>
              }
            />
          </HomeSection>
        </div>
        <div className="my-8 h-[1px] w-full bg-white opacity-10"></div>
        <TrpcProvider>{children}</TrpcProvider>
      </main>
      <footer className="mx-auto w-full max-w-4xl px-4 py-8 lg:px-0">
        <div className="flex w-full items-center justify-between">
          <p className="text-xs opacity-40">Created in 2022 by {ME.fullName}</p>

          <ul className="flex gap-2">
            {LINKS.map(link => (
              <a
                href={link.url}
                key={link.url}
                className="flex items-center justify-center opacity-40 duration-150 hover:scale-105 hover:opacity-60"
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
    </div>
  )
}
