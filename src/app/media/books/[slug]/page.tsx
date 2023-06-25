import {BookTemplate} from '@/templates'
import {prepareMetadata} from '@/utils'

export function generateMetadata() {
  const title = 'Book Detail'
  const description =
    'I will be sharing the book detail with my score and a short description.'

  return prepareMetadata({
    title,
    description,
    page: title,
  })
}

interface PageProps {
  params: {
    slug: string
  }
}
export default function Page({params: {slug}}: PageProps) {
  return (
    <div id="media">
      <BookTemplate slug={slug} />
    </div>
  )
}
