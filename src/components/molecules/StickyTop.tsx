import Image from 'next/image'
import Link from 'next/link'

import {ME, SocialLinks} from '@/constants'
import {getSocialLink} from '@/utils/getSocialLink'

import {Icon} from '../atoms/icon/icon'

export function StickyTop() {
  return (
    <div className="absolute inset-0 flex h-fit w-full flex-col justify-center">
      <ul className="mx-auto flex w-full cursor-pointer items-center justify-center gap-2 gap-x-4 rounded-b-md bg-foreground p-2 text-background duration-150 hover:z-10 md:w-fit">
        {Object.entries(ME.social).map(([platform, id]) => (
          <a
            href={getSocialLink(platform as SocialLinks, id)}
            key={platform}
            className="flex items-center justify-center opacity-60 duration-150 hover:scale-105 hover:opacity-100"
          >
            <Icon name={platform} size="sm" />
          </a>
        ))}
      </ul>
      <Link
        className="mx-auto inline-block rounded-b bg-foreground p-1"
        href="/"
      >
        <Image
          src="/me.png"
          alt="logo"
          width={40}
          height={40}
          className="rounded object-cover"
        />
      </Link>
    </div>
  )
}
