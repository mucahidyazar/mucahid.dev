'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs'

const TABS = [
  {value: 'stock', label: 'Stock', pathname: '/dashboard/stock', vip: true},
  {value: 'mhrs', label: 'MHRS', pathname: '/dashboard/mhrs', vip: true},
  {
    value: 'url-shortener',
    label: 'URL Shortener',
    pathname: '/dashboard/url-shortener',
  },
  {
    value: 'link-preview',
    label: 'Link Preview',
    pathname: '/dashboard/link-preview',
  },
]

export function DashboardTabs() {
  const pathname = usePathname()

  const activeValue =
    TABS.find(tab => tab.pathname === pathname)?.value || 'stock'

  return (
    <Tabs defaultValue={activeValue} className="mx-auto mb-4 w-[400px]">
      <TabsList>
        {TABS.map(tab => {
          return (
            <TabsTrigger value={tab.value} key={tab.pathname}>
              <Link href={tab.pathname}>{tab.label}</Link>
            </TabsTrigger>
          )
        })}
      </TabsList>
    </Tabs>
  )
}
