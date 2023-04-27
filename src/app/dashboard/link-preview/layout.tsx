import {prepareMetadata} from '@/utils'

export function generateMetadata() {
  const title = 'Link preview'
  const description =
    'You can preview any link here. We are using own service for this.'

  return prepareMetadata({
    title,
    description,
    page: title,
  })
}

export default function Layout({children}: {children: React.ReactNode}) {
  return children
}
