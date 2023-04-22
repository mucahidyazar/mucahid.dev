'use client'

import clsx from 'clsx'
import {usePathname, useRouter} from 'next/navigation'

interface ITabProps {
  pathname: string
  label: string
  value: string
  isAdmin: boolean
  vip?: boolean
}
export function Tab({pathname, label, value, isAdmin, vip}: ITabProps) {
  const router = useRouter()
  const path = usePathname()

  return (
    <div
      key={value}
      className={clsx(
        'p-2 bg-indigo-600 cursor-pointer relative overflow-hidden',
        path === pathname ? 'bg-opacity-100' : 'bg-opacity-30',
        vip &&
          !isAdmin &&
          `before:content-["VIP"] before:w-full before:h-full before:bg-red-400 before:text-white before:font-bold before:italic before:absolute before:top-0 before:left-0 before:bg-opacity-80 hover:before:bg-opacity-50 before:flex before:items-center before:justify-center before:cursor-not-allowed`,
      )}
      onClick={() => {
        if (vip || isAdmin) router.push(pathname)
        return
      }}
    >
      {label}
    </div>
  )
}
