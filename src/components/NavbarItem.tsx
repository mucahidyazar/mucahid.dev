'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'

import {cn} from '@/utils'

interface INavbarItemProps {
  label: string
  path: string
}
export function NavbarItem(item: INavbarItemProps) {
  const pathname = usePathname()

  const isActive = () => {
    if (item.path === '/' && pathname === '/') return true
    if (item.path === '/' && pathname !== '/') return false

    return pathname.includes(item.path)
  }

  return (
    <li
      key={item.label}
      className={cn(
        'group w-fit hover:text-primary-700',
        isActive() && 'text-primary-900',
      )}
    >
      <Link href={item.path}>{item.label}</Link>
      <p
        className={cn(
          'bg-foreground h-[1px] w-0 transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-primary-700',
          isActive() && 'h-[1px] w-full bg-primary-900',
        )}
      />
    </li>
  )
}
