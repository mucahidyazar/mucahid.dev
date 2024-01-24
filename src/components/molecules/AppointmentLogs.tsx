import {AppointmentHistory} from '@prisma/client'
import moment from 'moment'

import {cn} from '@/utils'

type DashboardLogsProps = {
  logs: AppointmentHistory[]
}
export function AppointmentLogs({logs = []}: DashboardLogsProps) {
  return logs?.slice(0, 20)?.map(log => {
    const formatedTime = moment(log.createdAt).fromNow()

    return (
      <div
        key={log.id}
        className={cn('flex flex-col bg-opacity-40 p-1 hover:bg-opacity-30')}
      >
        <p className="line-clamp-1 cursor-pointer font-semibold hover:underline">
          {log.message}
        </p>
        <div className="flex flex-col text-gray-400">
          <p>{formatedTime}</p>
        </div>
      </div>
    )
  })
}
