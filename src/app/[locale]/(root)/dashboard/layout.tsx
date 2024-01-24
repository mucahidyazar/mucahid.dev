import {DashboardTabs} from '@/components/molecules/DashboardTabs'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <DashboardTabs />
      {children}
    </div>
  )
}
