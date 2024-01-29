import {StockHistory} from '@prisma/client'
import moment from 'moment'
import Image from 'next/image'

import {cn} from '@/utils'

type StockLogsProps = {
  logs: (StockHistory & {isNew?: boolean})[]
}
export function StockLogs({logs = []}: StockLogsProps) {
  return (
    <div className="col-span-1 h-full overflow-hidden overflow-y-auto rounded  border border-foreground border-opacity-10 bg-foreground bg-opacity-5 p-2 text-xs">
      {logs?.map(log => {
        const formatedTime = moment(log.createdAt).fromNow()

        return (
          <div
            key={log.id}
            className={cn(
              'flex cursor-pointer gap-2 bg-opacity-5 p-1 hover:bg-opacity-10',
              log.inStock ? 'bg-green-500' : 'bg-red-500',
              log.isNew ? 'bg-yellow-500' : '',
            )}
          >
            <Image
              src={log.productImage || 'https://picsum.photos/200/300'}
              alt={log.productName || 'Product image'}
              objectFit="cover"
              className="h-10 w-10 max-w-[2.5rem] rounded-sm object-none"
              width={100}
              height={100}
            />
            <div className="flex-grow">
              <a
                className="line-clamp-1 cursor-pointer font-semibold hover:underline"
                href={log.productUrl || '#'}
                target="_blank"
              >
                {log.productName}
              </a>
              <div className="flex items-center justify-between text-gray-400">
                <p>{log.productPrice}</p>
                <p>{formatedTime}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
