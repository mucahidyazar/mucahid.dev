'use client'

import {useHealthService} from '@/request/hooks'
import {serviceKill} from '@/request/services/root/services'

import {Badge} from '../ui/badge'

export function DashboardStatus() {
  const {error} = useHealthService()

  return (
    <div className="w-96 mx-auto flex flex-col items-center gap-8">
      <h2 className="text-2xl font-semibold text-center">Status</h2>

      <div className="flex flex-col gap-4 w-fit mx-auto">
        <div className="text-gray-400 flex items-center gap-2">
          <h3 className="block w-40">Stock search</h3>
          <Badge
            variant="secondary"
            className={!error ? 'bg-green-500' : 'bg-red-500'}
          >
            {!error ? 'Running' : 'Stopped'}
          </Badge>
        </div>

        <div className="text-gray-400 flex items-center gap-2">
          <h3 className="block w-40">API /health</h3>

          <Badge
            variant="secondary"
            className={!error ? 'bg-green-500' : 'bg-red-500'}
          >
            {!error ? 'Running' : 'Stopped'}
          </Badge>
        </div>
      </div>

      <div className="mx-auto w-fit flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 rounded-md uppercase font-semibold text-sm"
          onClick={serviceKill}
        >
          Restart
        </button>
      </div>
    </div>
  )
}
