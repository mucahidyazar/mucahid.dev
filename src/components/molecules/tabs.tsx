'use client'

import {usePathname, useRouter} from 'next/navigation'

import {cn} from '@/utils'

type Tab = {
  value: string
  label: string
}
type TabsProps = {
  tabs: Tab[]
}
export function Tabs({tabs}: TabsProps) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-2 rounded-sm bg-foreground p-1.5 text-sm">
      {tabs.map(tab => (
        <div
          key={tab.value}
          onClick={() => router.push(tab.value)}
          className={cn(
            'flex-grow cursor-pointer rounded-sm px-3 py-1 text-center',
            pathname.includes(tab.value)
              ? 'bg-white text-slate-950 shadow-sm dark:bg-slate-950 dark:text-slate-50'
              : 'text-slate-700 dark:text-slate-700',
          )}
        >
          {tab.label}
        </div>
      ))}
    </div>
  )
}
