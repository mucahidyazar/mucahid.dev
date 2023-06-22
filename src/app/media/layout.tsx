import {MediaTabs} from '@/components/organisms'
import {prepareMetadata} from '@/utils'

export function generateMetadata() {
  const title = 'Media'
  const description =
    'I will be sharing my room, my desk, my setup, my workspace and my environments with you. If you have a spesific question or a suggestion I will be happy to hear it.'

  return prepareMetadata({
    title,
    description,
    page: title,
  })
}

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div id="media-layout">
      <MediaTabs />
      {children}
    </div>
  )
}
