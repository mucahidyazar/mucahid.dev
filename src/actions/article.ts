'use server'

import { Article } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


import { supabase } from "@/components/lib/supabase"
import { env } from "@/configs/env.mjs"

import { db } from "../lib/db"

import { creatorMiddleware } from "./utils"

async function createArticle() {
  const user = await creatorMiddleware()

  const response = await db.article.create({
    data: {
      title: '',
      content: '',
      tags: [],
      category: '',
      cover: '',
      author: { connect: { id: user.id } },
    }
  })

  await revalidatePath('/blog');
  await redirect(`/blog/${response.id}/edit`);
}


type UpdateArticleBody = Pick<Article, 'title' | 'content' | 'tags' | 'category' | 'published'> & {
  articleId: string,
  formData: FormData
}

async function updateArticle(body: UpdateArticleBody) {
  const user = await creatorMiddleware()
  const { articleId, formData, ...rest } = body

  const response = await db.article.findUnique({ where: { id: articleId } }) as any
  if (!response) return { message: 'article not found.' };

  if (user.role !== "ADMIN" && response.authorId !== user.id) return { message: 'user not authorized.' };

  const newUpdates: any = {}

  const images = formData.getAll('images') as File[]
  if (images) {
    let content = rest.content
    if (images.length > 0) {
      const blobUrls: any = content.match(new RegExp(`blob:http://localhost:3000/[a-z0-9-]+`, 'g'))
      for (const [index, image] of images.entries() as any) {
        const blobUrl = blobUrls[index]
        const imageResponse = await supabase.storage.from('mucahid.dev').upload(`article/${response.id}/${index}.png`, image, {
          cacheControl: '3600',
          upsert: false,
          contentType: image.type,
        }) as any

        if (imageResponse.error) {
          throw imageResponse.error;
        }

        const imageUrl = `${env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${imageResponse.data.fullPath}`;
        content = content.replace(blobUrl, imageUrl)
      }

      newUpdates['content'] = content
    }
  }

  const coverFile = formData.get('cover') as File
  if (coverFile) {
    const coverResponse = await supabase.storage.from('mucahid.dev').upload(`article/${response.id}/cover.png`, coverFile, {
      cacheControl: '0', // no cache  
      upsert: true, // overwrite existing
      contentType: 'image/png',
    }) as any

    newUpdates['cover'] = `${env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${coverResponse.data.fullPath}`
  }

  await db.article.update({
    where: { id: response.id },
    data: {
      ...rest,
      ...newUpdates,
    }
  })

  await revalidatePath('/blog');
  await redirect(`/blog`);
}

type ActionRemoveArticle = {
  id: string,
}
async function removeArticle(passedData: ActionRemoveArticle) {
  const { id } = passedData;
  const article = await db.article.findUnique({ where: { id } });
  if (!article) return { message: 'article not found.' };

  const user = await creatorMiddleware()
  if (user.role !== "ADMIN" && article.authorId !== user.id) return { message: 'user not authorized.' };

  await db.article.delete({ where: { id } })
  await revalidatePath('/store');
  await redirect('/store');
}

export {
  createArticle,
  removeArticle,
  updateArticle
}


// {content: '<p></p><img src="blob:http://localhost:3000/e47f03b4-d7cb-4fee-90e7-2343f4aa6fcd" style="margin: 0">'}
// compare images items with content blob urls
// then upload images to storage
// then replace content src like below
// {content: '<p></p><img src="https://isuxxlymabalxaxtvify.supabase.co/storage/v1/object/public/mucahid.dev/article/clpsvgfb5000gxozn0m3jgd89/cover.png" style="margin: 0">'}