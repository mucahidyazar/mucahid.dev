import {useTranslations} from 'next-intl'

import {cn} from '@/utils'

import {Footer} from './Footer'
import {NavbarItem} from './NavbarItem'

type NavbarProps = {
  className?: string
}
export function Navbar({className}: NavbarProps) {
  const t = useTranslations()

  const NAV_ITEMS = [
    {
      label: t('home'),
      path: '/',
    },
    {
      label: t('press'),
      path: '/press',
    },
    {
      label: t('about'),
      path: '/about',
    },
    {
      label: t('gallery'),
      path: '/gallery',
    },
    {
      label: t('contact'),
      path: '/contact',
    },
    // ...(isAdmin && !1 ? [{label: 'Dashboard', path: '/dashboard'}] : []),
  ]

  return (
    <nav className={cn('flex h-full flex-col', className)}>
      <ul className="flex justify-center gap-4 text-sm text-gray-500 lg:mb-8 lg:flex-grow lg:flex-col lg:justify-start lg:text-base">
        {NAV_ITEMS.map(item => (
          <NavbarItem key={item.label} {...item} />
        ))}
      </ul>
      <Footer />
    </nav>
  )
}
