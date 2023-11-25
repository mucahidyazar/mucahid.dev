'use client'
import {useSession} from 'next-auth/react'

import {NavbarItem} from './NavbarItem'

export function Navbar() {
  const session = useSession()
  const isAdmin = session?.data?.user.role === 'ADMIN'

  const NAV_ITEMS = [
    {
      label: 'About',
      path: '/',
    },
    {
      label: 'Blog',
      path: '/blog',
    },
    {
      label: 'Media',
      path: '/media',
    },
    {
      label: 'Feedbacks',
      path: '/feedbacks',
    },
    ...(isAdmin ? [{label: 'Dashboard', path: '/dashboard'}] : []),
  ]

  return (
    <nav>
      <ul className="flex items-center justify-center gap-4 font-sans text-lg font-semibold sm:text-xl">
        {NAV_ITEMS.map(item => (
          <NavbarItem key={item.label} {...item} />
        ))}
      </ul>
    </nav>
  )
}
