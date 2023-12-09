'use client'
import Image from 'next/image'
import Link from 'next/link'

import {cn} from '@/utils'

interface ISectionLink {
  href?: string | object
  children?: React.ReactNode
  logo?: string
  text?: string
  active?: boolean
}
export function SectionLink({
  href = '#',
  text = '',
  logo,
  children,
  active = false,
}: ISectionLink) {
  return (
    <Link
      href={href}
      className={cn(
        'link flex items-center gap-2',
        active && '!text-green-500',
      )}
    >
      {logo && <Image src={logo} alt={text} width={20} height={20} />}
      {text || children}
    </Link>
  )
}
