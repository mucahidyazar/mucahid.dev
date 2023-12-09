'use client'

import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

import {cn} from '@/utils'

import {Navbar} from '../Navbar'

export function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <header
      className={cn(
        'mx-auto mb-8 mt-28 flex w-fit flex-col justify-center p-4 xl:p-0',
        !isHomePage &&
          'mt-8 w-full max-w-full items-center justify-between md:flex-row lg:max-w-6xl',
      )}
    >
      <Link
        href="/"
        className={cn(
          'mb-2 flex items-center justify-center',
          !isHomePage && 'md:mb-0 md:block',
        )}
      >
        <Image
          src="/svg/full-logo.svg"
          alt="logo"
          width={400}
          height={80}
          className="cursor-pointer"
        />
      </Link>
      <Navbar />
    </header>
  )
}
