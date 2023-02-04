import cn from 'classnames'
import Cookies from 'js-cookie'
import { useRouter, usePathname } from 'next/navigation'

const dashboardCookie = Cookies.get("dashboard");
const dashboardEnv = String(process.env.NEXT_PUBLIC_DASHBOARD)
const isAdmin = dashboardCookie === dashboardEnv;

const TABS = [
  { value: 'stock', label: 'Stock', pathname: '/dashboard/stock', vip: isAdmin },
  { value: 'mhrs', label: 'MHRS', pathname: '/dashboard/mhrs', vip: isAdmin },
  { value: 'url-shortener', label: 'URL Shortener', pathname: '/dashboard/url-shortener' },
  { value: 'link-preview', label: 'Link Preview', pathname: '/dashboard/link-preview' },
]

export default function Tabs() {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className='flex justify-center my-4'>
      {TABS.map((tab, index) => (
        <div
          key={tab.value}
          className={cn(
            'p-2 bg-indigo-600 cursor-pointer relative overflow-hidden',
            tab.pathname === pathname ? 'bg-opacity-100' : 'bg-opacity-30',
            index === 0 && 'rounded-tl-md rounded-bl-md',
            index === TABS.length - 1 && 'rounded-tr-md rounded-br-md',
            tab.vip && 'before:content-["VIP"] before:w-full before:h-full before:bg-red-400 before:text-white before:font-bold before:italic before:absolute before:top-0 before:left-0 before:bg-opacity-80 hover:before:bg-opacity-50 before:flex before:items-center before:justify-center before:cursor-not-allowed',
          )}
          onClick={() => {
            if (tab.vip) router.push(tab.pathname)
            return
          }}
        >
          {tab.label}
        </div>
      ))}
    </div>
  )
}
