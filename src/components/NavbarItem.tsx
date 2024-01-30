'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useLocale} from 'next-intl'

import {cn} from '@/utils'

interface INavbarItemProps {
  label: string
  path: string
}
export function NavbarItem(
  item: INavbarItemProps & React.HTMLProps<HTMLLIElement>,
) {
  const pathname = usePathname()
  const locale = useLocale()

  const isActive = () => {
    if (item.path === '/' && (pathname === '/' || pathname === `/${locale}`))
      return true
    if (item.path === '/' && (pathname !== '/' || pathname === `/${locale}`))
      return false

    return pathname.includes(item.path)
  }

  return (
    <Link
      href={item.path}
      key={item.label}
      className={cn(
        'font-normal text-primary duration-200 hover:text-opacity-80',
        isActive()
          ? 'rotate-[3deg] bg-primary px-4 py-0.5 text-background'
          : '',
      )}
      {...(isActive() ? {'data-card-initial': ''} : {})}
      {...(item as any)}
    >
      {item.label}
    </Link>
  )
}
