'use client'

import {
  BookOpenIcon,
  BriefcaseIcon,
  FilmIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

import {cn} from '@/utils'

export function MediaTabs() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/media/room' && pathname === '/media') return true
    return pathname === path
  }

  return (
    <div className="mb-8 flex w-fit gap-4">
      <Link
        href="/media/room"
        className={cn(
          'flex items-center gap-2 rounded border border-primary bg-primary bg-opacity-80 px-4 py-2 text-xs font-semibold uppercase text-background duration-200 hover:bg-opacity-90',
          isActive('/media/room') && 'border-primary bg-primary bg-opacity-100',
        )}
      >
        <BriefcaseIcon className="h-4 w-4" />
        Room
      </Link>
      <Link
        href="/media/books"
        className={cn(
          'flex items-center gap-2 rounded border border-primary bg-primary bg-opacity-80 px-4 py-2 text-xs font-semibold uppercase text-background duration-200 hover:bg-opacity-90',
          isActive('/media/books') &&
            'border-primary bg-primary bg-opacity-100',
        )}
      >
        <BookOpenIcon className="h-4 w-4" />
        Books
      </Link>
      <Link
        href="/media/movies"
        className={cn(
          'flex items-center gap-2 rounded border border-primary bg-primary bg-opacity-80 px-4 py-2 text-xs font-semibold uppercase text-background duration-200 hover:bg-opacity-90',
          isActive('/media/movies') &&
            'border-primary bg-primary bg-opacity-100',
        )}
      >
        <FilmIcon className="h-4 w-4" />
        Movies
      </Link>
    </div>
  )
}
