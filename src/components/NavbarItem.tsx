'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'

interface INavbarItemProps {
  label: string
  path: string
}
export function NavbarItem(item: INavbarItemProps) {
  const path = usePathname()

  return (
    <li
      key={item.label}
      className={
        path === item.path
          ? 'text-white'
          : 'opacity-20 hover:opacity-50 duration-200'
      }
    >
      <Link href={item.path}>{item.label}</Link>
    </li>
  )
}
