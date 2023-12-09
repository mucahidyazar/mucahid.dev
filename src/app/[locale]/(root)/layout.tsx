import Image from 'next/image'

import {Header} from '@/components/molecules/Header'
import {ME, SocialLinks} from '@/constants'
import {getSocialLink} from '@/utils/getSocialLink'
import {prepareMetadata} from '@/utils/prepareMetadata'

export function generateMetadata() {
  return prepareMetadata()
}

type RootLayoutProps = {
  children: React.ReactNode
}
export default async function RootLayout({children}: RootLayoutProps) {
  return (
    <div className="flex h-full w-full flex-col">
      <nav className="fixed top-0 w-full">
        <ul className="relative mx-auto flex w-fit -translate-y-6 cursor-pointer items-center justify-center gap-2 gap-x-4 rounded-b-md bg-gray-500 bg-opacity-40 p-2 duration-150 hover:z-10 hover:-translate-y-0 hover:bg-opacity-20">
          {Object.entries(ME.social).map(([platform, id]) => (
            <a
              href={getSocialLink(platform as SocialLinks, id)}
              key={platform}
              className="flex items-center justify-center opacity-30 duration-150 hover:scale-105 hover:opacity-100"
            >
              <Image
                src={`/svg/socials/${platform}-icon.svg`}
                alt={platform}
                width={16}
                height={16}
              />
            </a>
          ))}
          <div className="absolute top-0 h-12 w-12 translate-y-[35px] rounded bg-gray-500 p-1 opacity-40 hover:opacity-100">
            <Image
              src="/me.png"
              alt="logo"
              width={40}
              height={40}
              className="min-w-full rounded object-cover"
            />
          </div>
        </ul>
      </nav>
      <Header />
      <main className="mx-auto w-full max-w-full flex-grow px-4 lg:max-w-6xl xl:p-0">
        {children}
      </main>
      <footer className="mx-auto w-full max-w-6xl px-4 py-8 xl:px-0">
        <div className="flex w-full items-center justify-between">
          <p className="text-xs opacity-40">Created in 2022 by {ME.fullName}</p>

          <ul className="flex gap-2">
            {Object.entries(ME.social).map(([platform, id]) => (
              <a
                href={getSocialLink(platform as SocialLinks, id)}
                key={platform}
                className="flex items-center justify-center opacity-40 duration-150 hover:scale-105 hover:opacity-60"
              >
                <Image
                  src={`/svg/socials/${platform}-icon.svg`}
                  alt={platform}
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
