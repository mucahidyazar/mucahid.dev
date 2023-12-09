import {HomeArticle} from '@/components'
import {Article} from '@/components/molecules/Article'
import {SectionLink} from '@/components/molecules/SectionLink'
import {db} from '@/lib/db'
import {getCurrentUser} from '@/lib/session'
import {initialCategories, initialTags, initialYears} from '@/mocks/blog'
import {generateUrl} from '@/utils'
import {prepareMetadata} from '@/utils/prepareMetadata'

import {CreateArticleButton} from './CreateArticleButton'

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
  searchParams: {
    year?: string
    tags?: string
    category?: string
  }
}
export default async function BlogPage({searchParams}: BlogPageProps) {
  const user = await getCurrentUser()

  const where = {
    ...(searchParams.year && {
      createdAt: {
        gte: new Date(`${searchParams.year}-01-01`),
        lt: new Date(`${Number(searchParams.year) + 1}-01-01`),
      },
    }),
    ...(searchParams.tags && {
      tags: {
        hasSome: searchParams.tags.split(','),
      },
    }),
    ...(searchParams.category && {
      category: searchParams.category,
    }),
  }
  const articles = await db.article.findMany({
    where: {
      ...(user?.role !== 'ADMIN' && {published: true}),
      ...where,
    },
    include: {author: true},
  })

  return (
    <div id="blog">
      <div className="my-8 flex justify-between">
        <div className="flex flex-col gap-2">
          <HomeArticle
            id="years"
            title="Years"
            content={initialYears.map(year => (
              <SectionLink
                key={year.value}
                text={year.label}
                active={searchParams.year?.includes(year.value)}
                href={generateUrl({
                  params: searchParams,
                  query: {year: year.value},
                  pathname: '/blog',
                })}
              />
            ))}
          />
          <HomeArticle
            id="tags"
            title="Tags"
            content={initialTags.map(tag => (
              <SectionLink
                key={tag.value}
                text={tag.label}
                active={searchParams.tags?.includes(tag.value)}
                href={generateUrl({
                  params: searchParams,
                  query: {tags: tag.value},
                  pathname: '/blog',
                })}
              />
            ))}
          />
          <HomeArticle
            id="categories"
            title="Categories"
            content={initialCategories.map(category => (
              <SectionLink
                key={category.value}
                text={category.label}
                active={searchParams.category?.includes(category.value)}
                href={generateUrl({
                  params: searchParams,
                  query: {category: category.value},
                  pathname: '/blog',
                })}
              />
            ))}
          />
        </div>

        <CreateArticleButton />
      </div>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {articles.map(article => (
          <Article key={article.id} article={article} />
        ))}
      </section>
    </div>
  )
}
