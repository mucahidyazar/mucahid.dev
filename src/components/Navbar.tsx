'use client'

import Cookies from 'js-cookie'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useEffect, useState} from 'react'

export default function Navbar() {
  const path = usePathname()

  const dashboardCookie = Cookies.get('dashboard')
  const dashboardEnv = String(process.env.NEXT_PUBLIC_DASHBOARD)
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
      label: 'Room',
      path: '/room',
    },
    {
      label: 'Feedbacks',
      path: '/feedbacks',
    },
    ...(isAdmin ? [{label: 'Dashboard', path: '/dashboard'}] : []),
  ]

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <nav>
      <ul className="flex items-center justify-center gap-4 text-lg sm:text-xl font-semibold font-sans">
        {NAV_ITEMS.map(item => (
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
        ))}
      </ul>
    </nav>
  )
}
