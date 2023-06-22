import {cookies} from 'next/headers'

import {env} from '@/configs'

import {NavbarItem} from './NavbarItem'

export function Navbar() {
  const cookieStore = cookies()
  const dashboardCookie = cookieStore.get('dashboard')?.value || ''
  const dashboardEnv = String(env.DASHBOARD)
  const isAdmin = dashboardCookie === dashboardEnv

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
      <ul className="flex items-center justify-center gap-4 text-lg sm:text-xl font-semibold font-sans">
        {NAV_ITEMS.map(item => (
          <NavbarItem key={item.label} {...item} />
        ))}
      </ul>
    </nav>
  )
}
