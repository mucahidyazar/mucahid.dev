import {redirect} from 'next/navigation'

import ArticleTemplate from '@/components/organisms/ArticleTemplate'
import {db} from '@/lib/db'
import {getCurrentUser} from '@/lib/session'
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

type BlogPageProps = {
  params: Record<string, string>
}
export default async function BlogPage({params}: BlogPageProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(`/sign-in?redirect=${encodeURIComponent('/blog/create')}`)
  }

  const article = await db.article.findUnique({
    where: {id: params.id},
    include: {author: true},
  })

  return (
    <div id="blog" className="">
      {article && <ArticleTemplate article={article} />}
    </div>
  )
}
