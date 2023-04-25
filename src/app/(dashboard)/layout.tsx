import Image from 'next/image'

import {Navbar} from '@/components/Navbar'
import {LINKS} from '@/mocks'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <nav className="fixed top-0 w-full">
        <ul className="flex items-center justify-center gap-2 gap-x-4 p-2 w-fit mx-auto bg-gray-500 bg-opacity-40 hover:bg-opacity-20 rounded-b-md -translate-y-6 hover:-translate-y-0 duration-150 cursor-pointer">
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
      </nav>
      <header className="flex items-center justify-between mx-auto py-10 gap-20 container">
        <Image
          src="/svg/full-logo.svg"
          alt="logo"
          width={400}
          height={80}
          className="w-40 h-8"
        />
        <Navbar />
      </header>
      <main className="container mx-auto flex-grow">{children}</main>
      <footer className="max-w-4xl mx-auto py-8 px-4 w-full lg:px-0">
        <div className="flex justify-between items-center w-full">
          <p className="opacity-40 text-xs">Created in 2022 by Mucahid Yazar</p>

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
    </>
  )
}
