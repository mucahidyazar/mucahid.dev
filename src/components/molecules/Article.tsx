import {Article, User} from '@prisma/client'
import {RocketIcon} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import {Button} from '../ui/button'

type ArticleProps = {
  article: Article & {
    author: User
  }
}
export function Article({article}: ArticleProps) {
  return (
    <Link
      href={{
        pathname: article.published
          ? `/blog/${article.id}`
          : `/blog/${article.id}/edit`,
        query: {
          tags: article.tags.join(','),
          category: article.category,
        },
      }}
    >
      <article className="w-full overflow-hidden rounded bg-background text-foreground saturate-[60%] transition-all duration-300 ease-in-out hover:scale-[102%] hover:saturate-100">
        <Image
          src={article.cover || 'https://picsum.photos/400/400'}
          alt="me"
          width={400}
          height={400}
          className="min-w-full"
        />
        <div className="px-4 pb-6 pt-3">
          <div className="flex items-center justify-between">
            {!!article.tags.length ? (
              <div className="mb-1 flex flex-wrap flex-wrap items-center gap-2">
                {article.tags.map((tag, tagIndex) => (
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex h-6 flex-col justify-center text-xs active:scale-95"
                    key={`${tag}-${tagIndex}`}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            ) : (
              <div className="rounded bg-gray-200 px-2 py-1 text-xs text-gray-500">
                No tags yet
              </div>
            )}

            <div className="ml-auto">
              <Button
                size="icon"
                variant="ghost"
                className="flex flex-col justify-center active:scale-95"
              >
                <RocketIcon className="h-6 w-6" />
                <div className="text-xs">3</div>
              </Button>
            </div>
          </div>
          <h3 className="text-lg font-semibold">{article.title}</h3>
          <p className="mb-3 flex items-center gap-2 text-sm italic">
            {!article.published && (
              <span className="inline-block font-semibold uppercase">
                Draft -
              </span>
            )}
            {new Intl.DateTimeFormat('en-US', {dateStyle: 'long'}).format(
              new Date(article.createdAt),
            )}
          </p>
          <p
            className="line-clamp-3 h-6 text-sm"
            dangerouslySetInnerHTML={{__html: article.content}}
          />
        </div>
      </article>
    </Link>
  )
}
