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
      label: 'Room',
      path: '/room',
    },
    {
      label: 'Links',
      path: '/links',
    },
  ]

  return (
    <nav className="mx-auto mb-8">
      <ul className="flex items-center gap-4 sm:gap-8 text-lg sm:text-3xl font-semibold font-sans">
        {NAV_ITEMS.map(item => (
          <li
            key={item.label}
            className={
              path === item.path
                ? 'text-white after:content after:w-full after:h-[1px] after:bg-white after:block after:-translate-y-1'
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
