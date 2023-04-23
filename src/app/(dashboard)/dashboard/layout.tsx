import {DashboardStatus} from '@/components/organisms'
import {Tabs} from '@/components/Tabs'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <DashboardStatus />
      <div className="h-[1px] w-1/2 bg-gray-400 bg-opacity-20 mx-auto mt-4" />
      <Tabs />
      {children}
    </div>
  )
}
