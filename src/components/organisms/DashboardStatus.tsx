'use client'

import {useHealthService} from '@/request/hooks'

import {Badge} from '../ui/badge'

export function DashboardStatus() {
  const {error} = useHealthService()

  return (
    <div className="mx-auto flex w-fit flex-col items-center gap-8 rounded bg-gray-400 p-4 text-foreground">
      <h2 className="text-center font-semibold uppercase">Status</h2>

      <div className="mx-auto flex w-fit flex-col gap-4">
        <div className="flex items-center gap-2">
          <h3 className="block w-40">Stock search</h3>
          <Badge
            variant="secondary"
            className={!error ? 'bg-green-500' : 'bg-red-500'}
          >
            {!error ? 'Running' : 'Stopped'}
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <h3 className="block w-40">API /health</h3>

          <Badge
            variant="secondary"
            className={!error ? 'bg-green-500' : 'bg-red-500'}
          >
            {!error ? 'Running' : 'Stopped'}
          </Badge>
        </div>
      </div>
    </div>
  )
}
