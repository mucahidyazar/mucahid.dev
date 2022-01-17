import React from 'react'
import type {NextPage} from 'next'
import {MainLayout} from '@/layout/index'
import {ArticleContainer} from '@/containers/index'

const Article: NextPage = () => {
  return (
    <MainLayout>
      <ArticleContainer />
    </MainLayout>
  )
}

export default Article
