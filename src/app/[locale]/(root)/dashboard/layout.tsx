import Link from 'next/link'

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

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      {/* <DashboardStatus /> */}
      <Tabs defaultValue="stock" className="mx-auto mb-4 w-[400px]">
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

      {children}
    </div>
  )
}
