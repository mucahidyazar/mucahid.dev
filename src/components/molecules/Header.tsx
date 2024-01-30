'use client'

import Link from 'next/link'

import {cn} from '@/utils'

import {AppTools} from '../atoms/AppTools'
import {Icon} from '../atoms/icon/icon'
import {Navbar} from '../Navbar'

export function Header() {
  return (
    <header
      className={cn(
        'mx-auto mt-6 flex w-full flex-col justify-center gap-6 p-4 pb-0 md:mx-0 md:mt-0 md:justify-start md:gap-12 xl:px-0',
      )}
    >
      <div className="flex justify-between">
        <Link
          href="/"
          className={cn(
            'flex w-28 cursor-pointer items-center justify-center md:w-48',
          )}
        >
          <Icon
            name="full-logo"
            className="cursor-pointer"
            fill="hsl(var(--secondary))"
            viewBox="0 0 59 11"
          />
        </Link>
        <AppTools className="static" />
      </div>

      <Navbar />
      <div className="absolute -bottom-16 left-0 right-0 h-16 w-full bg-gradient-to-b from-background to-transparent" />
    </header>
  )
}
