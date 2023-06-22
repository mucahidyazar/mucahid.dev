'use client'

import {
  BookOpenIcon,
  BriefcaseIcon,
  FilmIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

export function MediaTabs() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/media/room' && pathname === '/media') return true
    return pathname === path
  }

  return (
    <div className="flex w-fit mb-8 gap-4">
      <Link
        href="/media/room"
        className={clsx(
          'border border-gray-500 text-white px-4 py-2 rounded uppercase text-xs font-semibold hover:bg-gray-500 duration-200 flex gap-2 items-center',
          isActive('/media/room') && 'bg-gray-500',
        )}
      >
        <BriefcaseIcon className="w-4 h-4" />
        Room
      </Link>
      <Link
        href="/media/books"
        className={clsx(
          'border border-gray-500 text-white px-4 py-2 rounded uppercase text-xs font-semibold hover:bg-gray-500 duration-200 flex gap-2 items-center',
          isActive('/media/books') && 'bg-gray-500',
        )}
      >
        <BookOpenIcon className="w-4 h-4" />
        Books
      </Link>
      <Link
        href="/media/movies"
        className={clsx(
          'border border-gray-500 text-white px-4 py-2 rounded uppercase text-xs font-semibold hover:bg-gray-500 duration-200 flex gap-2 items-center',
          isActive('/media/movies') && 'bg-gray-500',
        )}
      >
        <FilmIcon className="w-4 h-4" />
        Movies
      </Link>
    </div>
  )
}
