'use client'
import {AlbumIcon, MenuIcon, PenIcon, Rocket, UserIcon} from 'lucide-react'
import Image from 'next/image'
import {useSession} from 'next-auth/react'
import * as React from 'react'

import {Drawer, DrawerContent, DrawerTrigger} from '@/components/ui/drawer'
import {ME, SocialLinks} from '@/constants'
import {getSocialLink} from '@/utils/getSocialLink'

import {Icon} from '../atoms/icon/icon'
import {NavbarItem} from '../NavbarItem'

export function MobileMenu() {
  const session = useSession()
  const isAdmin = session?.data?.user.role === 'ADMIN'
  const [open, setOpen] = React.useState(false)

  const NAV_ITEMS = [
    {
      label: 'About',
      path: '/',
      icon: <UserIcon size={18} />,
    },
    {
      label: 'Blog',
      path: '/blog',
      icon: <PenIcon size={18} />,
    },
    {
      label: 'Media',
      path: '/media',
      icon: <AlbumIcon size={18} />,
    },
    {
      label: 'Feedbacks',
      path: '/feedbacks',
      icon: <PenIcon size={18} />,
    },
    ...(isAdmin
      ? [{label: 'Dashboard', path: '/dashboard', icon: <Rocket size={18} />}]
      : []),
  ]

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger
        asChild
        className="fixed left-1/2 top-0 mx-auto flex w-12 -translate-x-1/2 transform cursor-pointer items-center justify-center bg-secondary p-1 text-background sm:hidden"
      >
        <MenuIcon size={24} />
      </DrawerTrigger>
      <DrawerContent className="border-none px-4 outline-none">
        <div className="mt-2 flex gap-2 rounded-sm p-2 hover:bg-foreground hover:bg-opacity-10 hover:text-foreground">
          <Image
            src="/me.png"
            alt="logo"
            width={40}
            height={40}
            className="h-10 min-w-[2.5rem] rounded object-cover"
          />
          <div>
            <p>Mucahid Yazar</p>
            <p className="text-xs text-opacity-60">Software Engineer</p>
          </div>
        </div>

        <div className="my-2 h-1 w-full bg-foreground opacity-10" />

        <div className="flex flex-col gap-1">
          {NAV_ITEMS.map(item => (
            <NavbarItem
              key={item.label}
              {...item}
              className="flex items-center gap-2 bg-transparent p-2 hover:bg-foreground hover:bg-opacity-5 hover:text-foreground"
            />
          ))}
        </div>

        <div className="my-2 h-1 w-full bg-foreground opacity-10" />

        <ul className="flex cursor-pointer items-center gap-4 bg-background px-2 py-4 text-foreground duration-150">
          {Object.entries(ME.social).map(([platform, id]) => (
            <a
              href={getSocialLink(platform as SocialLinks, id)}
              key={platform}
              className="flex items-center justify-center opacity-60 duration-150 hover:scale-105 hover:opacity-100"
            >
              <Icon name={platform} size="sm" />
            </a>
          ))}
        </ul>
      </DrawerContent>
    </Drawer>
  )
}
