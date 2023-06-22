'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'

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
      className={
        isActive() ? 'text-white' : 'opacity-20 hover:opacity-50 duration-200'
      }
    >
      <Link href={item.path}>{item.label}</Link>
    </li>
  )
}
