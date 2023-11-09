import {prepareMetadata} from '@/utils/prepareMetadata'

export function generateMetadata() {
  const title = 'Stock checker'
  const description =
    'You can check and search stocks in the stores here. If we find a stock we will notify you.'

  return prepareMetadata({
    title,
    description,
    page: title,
  })
}

export default function Layout({children}: {children: React.ReactNode}) {
  return children
}
