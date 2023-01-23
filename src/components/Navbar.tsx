'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Cookies from 'js-cookie'

export default function Navbar() {
  const path = usePathname()

  const dashboardCookie = Cookies.get("dashboard");
  const dashboardEnv = String(process.env.NEXT_PUBLIC_DASHBOARD)
  const isAdmin = dashboardCookie === dashboardEnv;

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
    {
      label: 'Dashboard',
      path: '/dashboard',
      condition: isAdmin
    },
  ]

  return (
    <nav>
      <ul className="flex items-center justify-center gap-4 text-lg sm:text-xl font-semibold font-sans">
        {NAV_ITEMS.map(item => {
          if (item.condition === false) return null;
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
        })}
      </ul>
    </nav>
  )
}
