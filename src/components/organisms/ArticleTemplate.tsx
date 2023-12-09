'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {Article, User} from '@prisma/client'
import {CameraIcon} from 'lucide-react'
import Image from 'next/image'
import {useSearchParams, useParams, usePathname} from 'next/navigation'
import {Controller, useForm} from 'react-hook-form'
import {z} from 'zod'

import {updateArticle} from '@/actions/article'
import {HomeArticle} from '@/components'
import {EditableText} from '@/components/atoms/EditableText'
import {SectionLink} from '@/components/molecules/SectionLink'
import {ArticleTags} from '@/components/organisms/ArticleTags'
import {Tiptap} from '@/components/organisms/Tiptap'
import {Button} from '@/components/ui/button'
import {useServerAction} from '@/hooks/useServerAction'
import {initialCategories} from '@/mocks/blog'
import {calculateReadingTime} from '@/utils/calculation'

export default function ArticleTemplate({
  article,
}: {
  article: Article & {author: User}
}) {
  const urlParams = useParams()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [runAction, isPending] = useServerAction(updateArticle)

  const articleId = urlParams.id as string

  const params = {
    ...(searchParams.get('category')
      ? {category: searchParams.get('category')}
      : {}),
    ...(searchParams.get('tags') ? {tags: searchParams.get('tags')} : {}),
  } as Record<string, string>

  const form = useForm({
    defaultValues: {
      cover: article.cover || 'https://picsum.photos/900/300',
      title: article.title || 'What is your title?',
      content: article.content || '',
    },
    resolver: zodResolver(
      z.object({
        cover: z.string().optional(),
        title: z
          .string()
          .min(3, 'Title must be at least 3 characters')
          .max(150),
        content: z.string().min(3, 'Content must be at least 3 characters'),
      }),
    ),
  })

  const handleContent = (content: string) => {
    form.setValue('content', content)
  }

  const content = form.watch('content')
  const textContent = content.replace(/<[^>]*>/g, '')

  const readingTime = calculateReadingTime(textContent)

  return (
    <form
      onSubmit={form.handleSubmit(async data => {
        const formData = new FormData()
        if (!data.cover.startsWith('http')) {
          const fileResponse = await fetch(data.cover)
          const blob = await fileResponse.blob()

          // Blob nesnesini File nesnesine dönüştür
          const file = new File([blob], 'cover.png', {type: 'image/png'})
          formData.append('cover', file)
        }

        const articleImageFiles = [] as File[]
        const articleImageSrcs = data.content.match(/src="([^"]*)"/g)
        if (articleImageSrcs) {
          await articleImageSrcs.forEach(async (src, srcIndex) => {
            const response = await fetch(src.replace('src="', '').slice(0, -1))
            const blob = await response.blob()
            const file = new File([blob], `image-${srcIndex}.png`, {
              type: 'image/png',
            })
            articleImageFiles.push(file)
          })
        }
        articleImageFiles.forEach(file => {
          formData.append('images', file)
        })

        await runAction({
          category: params.category as any,
          tags: (params.tags as any)?.split(',') as any,
          title: data.title,
          content: data.content,
          published: false,
          formData,
          articleId,
        })
      })}
    >
      <div className="my-8 flex justify-between">
        <div className="flex flex-col gap-2">
          <HomeArticle
            id="tags"
            title="Tags"
            content={
              <ArticleTags
                params={params}
                tags={article.tags.map(tag => ({
                  label: tag,
                  value: tag,
                  isNew: false,
                }))}
              />
            }
          />
          <HomeArticle
            id="category"
            title="Category"
            content={initialCategories.map(category => (
              <SectionLink
                key={category.value}
                text={category.label}
                active={params.category?.includes(category.value)}
                href={{
                  pathname,
                  query: {
                    ...params,
                    category: category.value,
                  },
                }}
              />
            ))}
          />
        </div>

        <Button
          variant="destructive"
          type="submit"
          disabled={isPending}
          isLoading={isPending}
        >
          Update
        </Button>
      </div>
      {/* print errors */}
      {Object.entries(form.formState.errors).length > 0 && (
        <div className="mb-2 rounded-sm bg-red-100 p-2 text-xs text-red-500">
          {Object.entries(form.formState.errors).map(([key, value]) => (
            <p key={key}>{value.message}</p>
          ))}
        </div>
      )}
      <div className="group relative overflow-hidden rounded-t">
        <Image
          src={form.getValues('cover') || 'https://picsum.photos/900/300'}
          width={900}
          height={300}
          alt="blog image"
          className="max-h-96 min-w-full object-cover saturate-50 transition-all duration-500 group-hover:saturate-100"
        />
        {/* overlay from bottom to top */}
        <div className="absolute bottom-0 right-0 h-2/3 w-full bg-gradient-to-t from-black to-transparent p-4" />

        <Button className="absolute right-0 top-0 m-4" type="button">
          <label htmlFor="cover" className="cursor-pointer">
            <CameraIcon className="h-6 w-6" />
          </label>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="cover"
            onChange={event => {
              if (!event.target.files) return
              form.setValue('cover', URL.createObjectURL(event.target.files[0]))
            }}
          />
        </Button>

        <div className="absolute bottom-0 left-0 p-4">
          <Controller
            name="title"
            control={form.control}
            render={({field}) => (
              <EditableText className="mb-2 text-4xl font-bold" {...field} />
            )}
          />

          <div className="flex gap-2">
            <Image
              src={article.author.image || 'https://picsum.photos/50/50'}
              width={50}
              height={50}
              alt="avatar"
              className="h-12 w-12 rounded"
            />
            <div className="text-[10px]">
              <p className="text-sm font-semibold">{article.author.name}</p>
              <p>
                {new Date().toLocaleDateString('en-US', {dateStyle: 'long'})}
              </p>
              <p>{readingTime} min read</p>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full">
        <Tiptap content={form.getValues('content')} onUpdate={handleContent} />
      </section>
    </form>
  )
}
