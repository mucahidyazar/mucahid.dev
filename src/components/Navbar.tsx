'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

export default function Navbar() {
  const path = usePathname()

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
      label: 'Room',
      path: '/room',
    },
  ]

  return (
    <nav className="mx-auto mb-8">
      <ul className="flex items-center justify-center gap-8">
        {NAV_ITEMS.map(item => (
          <li
            key={item.label}
            className={`text-2xl
            ${
              path === item.path
                ? 'text-white after:content after:w-full after:h-[1px] after:bg-white after:block after:-translate-y-1'
                : ''
            }
          `}
          >
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
