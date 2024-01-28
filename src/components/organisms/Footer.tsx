import Image from 'next/image'

import {ME, SocialLinks} from '@/constants'
import {getSocialLink} from '@/utils/getSocialLink'

export function Footer() {
  return (
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
  )
}
