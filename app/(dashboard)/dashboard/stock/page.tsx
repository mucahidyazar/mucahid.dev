'use client'
export const revalidate = 10
import { useState } from 'react'
import cn from 'classnames'

import {
  useClearResultsService,
  useClearService,
  useCreateService,
  useStartService,
  useStopService
} from '@/request/hooks'
import { useListService } from '@/request/hooks/useListService'

interface IStock {
  _id: string
  active: boolean
  retry: number
  results: any[]
}

export default function AdminPage() {
  const {
    data: myStockData,
    mutate: myStockMutate,
  } = useListService() as any
  const { trigger: createTrigger } = useCreateService()
  const { trigger: stopTrigger } = useStopService()
  const { trigger: startTrigger } = useStartService()
  const { trigger: clearResultTrigger } = useClearResultsService()
  const { trigger: clearTrigger } = useClearService()

  return (
    <div className='flex flex-col gap-4 items-center'>
      <div className='flex gap-2'>
        <button
          className="px-4 py-2 bg-blue-500 rounded-md uppercase font-semibold text-sm"
          onClick={() => createTrigger().then(() => myStockMutate())}
        >
          New Search
        </button>
        <button
          className="px-4 py-2 bg-red-500 rounded-md uppercase font-semibold text-sm"
          onClick={() => clearTrigger().then(() => myStockMutate())}
        >
          Clear
        </button>
      </div>
      <div className='border border-solid border-indigo-500 border-opacity-30 w-full rounded-md h-60 bg-indigo-500 bg-opacity-10 overflow-y-auto'>
        {myStockData?.data?.myStock.map((data: IStock) =>
          <Row
            key={data._id}
            data={data}
            startTrigger={() => startTrigger({ id: data._id }).then(() => myStockMutate())}
            stopTrigger={() => stopTrigger({ id: data._id }).then(() => myStockMutate())}
            clearResultTrigger={() => clearResultTrigger({ id: data._id }).then(() => myStockMutate())}
          />
        )}
      </div>
    </div>
  )
}

interface IRow {
  data: IStock
  stopTrigger: () => void
  startTrigger: () => void
  clearResultTrigger: () => void
}
const Row = ({ data, stopTrigger, startTrigger, clearResultTrigger }: IRow) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const clearHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    clearResultTrigger()
  }

  const startAndStopHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    if (data.active) {
      stopTrigger()
    } else {
      startTrigger()
    }
  }

  return (
    <div key={data._id} className='group'>
      <div
        className={cn(
          'flex justify-between p-4 cursor-pointer bg-opacity-30 hover:bg-opacity-20 duration-150 group-[&:not(:last-child)]:border-b border-white border-opacity-10',
          data.active ? 'bg-green-500' : 'bg-red-500'
        )}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className='flex flex-col gap-2'>

          <div className='flex gap-2'>
            <div>{data._id}</div>
          </div>
          <div>
            <p className='text-xs text-gray-400'>
              Retry: <span>{data.retry}</span>
            </p>
            <p className='text-xs text-gray-400'>
              Active: <span>{data.active ? 'Yes' : 'No'}</span>
            </p>
          </div>
        </div>
        <div className='flex gap-4'>
          <button onClick={clearHandler}>Clear</button>
          <button onClick={startAndStopHandler}>{data.active ? 'Stop' : 'Start'}</button>
        </div>
      </div>
      {isCollapsed && (
        <div className='p-2 text-xs bg-indigo-500 bg-opacity-10'>
          {data.results.map((result, index) => (
            <div
              key={index + result.brand.name}
              className='flex gap-4 p-1 [&:not(:last-child)]:border-b border-solid border-indigo-200 border-opacity-20'
            >
              <div className='w-20'>{result.brand.name}</div>
              <div className='w-96 flex-grow'>
                <p className='line-clamp-3'>{result.link}</p>
              </div>
              <div>{result.hasFound ? 'Found' : 'Not Found'}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}