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
        'text-link duration-200 hover:opacity-60',
        isActive() ? 'opacity-100' : 'opacity-40',
      )}
    >
      <Link href={item.path}>{item.label}</Link>
    </li>
  )
}
