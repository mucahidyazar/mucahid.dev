'use client'
import cn from 'classnames'
import { serviceKill } from '@/request/services/root/services'
import { Tab } from '@/components'
import { useHealthService } from '@/request/hooks/useHealthService'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { error } = useHealthService()

  return (
    <div>
      <div className="w-96 mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Status</h2>

        <div className="flex flex-col gap-4 w-fit mx-auto">
          <div className="text-gray-400 flex items-center gap-2">
            <h3 className="block w-40">Stock search</h3>
            <span className={cn(
              "px-4 inline-block rounded-md text-sm text-white",
              !error ? 'bg-green-500' : 'bg-red-500'
            )}>
              {!error ? 'Active' : 'Inactive'}
            </span>
          </div>

          <div className="text-gray-400 flex items-center gap-2">
            <h3 className="block w-40">API /health</h3>

            <span className={cn(
              "px-4 inline-block rounded-md text-sm text-white",
              !error ? 'bg-green-500' : 'bg-red-500'
            )}>
              {!error ? 'Up' : 'Down'}
            </span>
          </div>
        </div>
      </div>

      <div className="my-8 mx-auto w-fit flex gap-4">
        <button className="px-4 py-2 bg-blue-500 rounded-md uppercase font-semibold text-sm" onClick={serviceKill}>Restart</button>
      </div>

      <div className="h-[1px] w-1/2 bg-gray-400 bg-opacity-20 mx-auto" />
      <Tab />
      {children}
    </div>
  )
}
