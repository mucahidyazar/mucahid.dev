import {cookies} from 'next/headers'

import {Tab} from './Tab'

const dashboardEnv = String(process.env.DASHBOARD)

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

export default function Tabs() {
  const cookieStore = cookies()
  const dashboardCookie = cookieStore.get('dashboard')?.value || ''
  const isAdmin = dashboardCookie === dashboardEnv

  return (
    <div className="flex justify-center my-4 rounded-md overflow-hidden w-fit mx-auto">
      {TABS.map(tab => {
        return <Tab key={tab.pathname} {...tab} isAdmin={isAdmin} />
      })}
    </div>
  )
}
