'use client'
import {useState} from 'react'

import {LinkPreviewCard} from '@/components/cards'
import {EmptyContent} from '@/components/molecules/EmptyContent'
import Search from '@/components/molecules/Search'
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
      <Search
        onSubmit={async url => {
          setLink(url)
        }}
        placeholder="The link you want to preview"
      />

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
