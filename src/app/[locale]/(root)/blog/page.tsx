import {prepareMetadata} from '@/utils/prepareMetadata'

export function generateMetadata() {
  const title = 'Blog'
  const description =
    'Discover the latest articles, tutorials, and insights on frontend development, React, TypeScript, JavaScript, Next.js, and more on my blog.'

  return prepareMetadata({
    title,
    description,
    page: title,
  })
}

export default async function BlogPage({searchParams}: any) {
  return <div id="blog">To be very soon... {searchParams.page}</div>
}
