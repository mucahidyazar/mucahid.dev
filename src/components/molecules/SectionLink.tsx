'use client'
import Image from 'next/image'
import Link from 'next/link'

import {cn} from '@/utils'

import {Icon} from '../atoms/icon/icon'

interface ISectionLink {
  href?: string | object
  children?: React.ReactNode
  logo?: string
  icon?: string
  text?: string
  active?: boolean
}
export function SectionLink({
  href = '#',
  text = '',
  logo,
  icon,
  children,
  active = false,
}: ISectionLink) {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2 border-b border-solid border-foreground',
        active && '!text-green-500',
        logo && '!border-none',
      )}
    >
      {icon && <Icon name={icon} />}
      {logo && <Image src={logo} alt={text} width={24} height={24} />}
      {text || children}
    </Link>
  )
}
