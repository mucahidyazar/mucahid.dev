'use client'

import {createArticle} from '@/actions/article'
import {Button} from '@/components/ui/button'

export function CreateArticleButton() {
  return (
    <Button
      className="cursor-pointer !bg-primary text-background"
      onClick={() => {
        createArticle()
      }}
    >
      New Article
    </Button>
  )
}
