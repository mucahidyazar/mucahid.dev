'use client'
import {useState} from 'react'

import {LinkPreviewCard} from '@/components/cards'
import {EmptyContent} from '@/components/molecules/EmptyContent'
import {useGetDebouncedValue} from '@/hooks'
import {useLinkPreviewService} from '@/request/hooks/useLinkPreviewService'

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
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <input
          type="text"
          className="h-10 w-full rounded-md border border-solid border-indigo-500 border-opacity-30 px-4"
          value={link}
          onChange={e => setLink(e.target.value)}
        />
        <button className="rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold uppercase">
          Preview
        </button>
      </div>
      {!!linkPreviewData ? (
        <LinkPreviewCard
          title={linkPreviewData.data?.title}
          description={linkPreviewData.data?.description}
          image={linkPreviewData.data?.image}
        />
      ) : (
        <EmptyContent
          title="Empty board"
          description="There is no preview"
          className="w-full"
        />
      )}
    </div>
  )
}
