import {SocketMessage} from '@/common'
import {cn} from '@/utils'

type SocketLogsProps = {
  logs: SocketMessage[]
}
export function SocketLogs({logs = []}: SocketLogsProps) {
  return logs.map((log, logIndex) => {
    return (
      <div
        key={logIndex.toString()}
        className={cn(
          'line-clamp-1 flex cursor-pointer flex-col gap-2 bg-yellow-500 bg-opacity-40 p-1 font-semibold hover:bg-opacity-30 hover:underline',
        )}
      >
        {log.message}
      </div>
    )
  })
}
