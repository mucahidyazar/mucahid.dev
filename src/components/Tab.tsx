import cn from 'classnames'
import { useRouter, usePathname } from 'next/navigation'

const TABS = [
  { value: 'stock', label: 'Stock', pathname: '/dashboard/stock' },
  { value: 'mhrs', label: 'MHRS', pathname: '/dashboard/mhrs' },
  { value: 'url-shortener', label: 'URL Shortener', pathname: '/dashboard/url-shortener' },
  { value: 'link-preview', label: 'Link Preview', pathname: '/dashboard/link-preview' },
]

export default function Tab() {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className='flex justify-center my-4'>
      {TABS.map((tab, index) => (
        <div
          key={tab.value}
          className={cn(
            'p-2 bg-indigo-600 cursor-pointer',
            tab.pathname === pathname ? 'bg-opacity-100' : 'bg-opacity-30',
            index === 0 && 'rounded-tl-md rounded-bl-md',
            index === TABS.length - 1 && 'rounded-tr-md rounded-br-md',
          )}
          onClick={() => router.push(tab.pathname)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  )
}
