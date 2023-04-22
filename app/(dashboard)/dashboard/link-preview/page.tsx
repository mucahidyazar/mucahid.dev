'use client'
import {useState} from 'react'

import {useGetDebouncedValue} from '@/hooks'
import {useLinkPreviewService} from '@/request/hooks/useLinkPreviewService'

import {LinkPreviewCard} from '../../../../src/components/cards'

export const revalidate = 10

export default function LinkPreviewPage() {
  const LINK = 'https://mucahid.dev'
  const [link, setLink] = useState(LINK)
  const debouncedLink = useGetDebouncedValue(link, [link], 1000)

  const {
    data: linkPreviewData,
    // mutate: linkPreviewMutate,
  } = useLinkPreviewService(debouncedLink) as any

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex gap-2">
        <input
          type="text"
          className="border border-solid border-indigo-500 border-opacity-30 w-full rounded-md h-10 px-4"
          value={link}
          onChange={e => setLink(e.target.value)}
        />
        <button className="px-4 py-2 bg-blue-500 rounded-md uppercase font-semibold text-sm">
          Preview
        </button>
      </div>
      {!!linkPreviewData && (
        <LinkPreviewCard
          title={linkPreviewData.data?.title}
          description={linkPreviewData.data?.description}
          image={linkPreviewData.data?.image}
        />
      )}
    </div>
  )
}
