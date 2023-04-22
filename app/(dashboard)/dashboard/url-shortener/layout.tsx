import {prepareMetadata} from '@/utils'

export function generateMetadata() {
  const title = 'Url shortener'
  const description =
    'You can shorten any link here. We will keep your links and privacy as they are our own.'

  return prepareMetadata({
    title,
    description,
    page: title,
  })
}

export default function Layout({children}: {children: React.ReactNode}) {
  return children
}
