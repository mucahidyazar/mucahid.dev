'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useLocale} from 'next-intl'

import {cn} from '@/utils'

interface INavbarItemProps {
  label: string
  path: string
  icon?: React.ReactNode
  className?: string
  onMouseOver?: () => void
  onMouseOut?: () => void
}
export function NavbarItem({path, label, icon, ...rest}: INavbarItemProps) {
  const pathname = usePathname()
  const locale = useLocale()

  const isActive = () => {
    if (path === '/' && (pathname === '/' || pathname === `/${locale}`))
      return true
    if (path === '/' && (pathname !== '/' || pathname === `/${locale}`))
      return false

    return pathname.includes(path)
  }

  return (
    <Link
      href={path}
      key={label}
      className={cn(
        'flex items-center gap-1 font-normal text-primary duration-200 hover:text-opacity-80',
        isActive()
          ? 'rotate-[3deg] bg-primary px-4 py-0.5 text-background'
          : '',
      )}
      {...(isActive() ? {'data-card-initial': ''} : {})}
      {...rest}
    >
      {icon && icon}
      {label}
    </Link>
  )
}
