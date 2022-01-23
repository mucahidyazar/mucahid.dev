import React from 'react'
import type {NextPage} from 'next'
import {MainLayout} from '@/layout/index'
import {ArticleContainer} from '@/containers/index'
import {wrapper} from '@/store/index'
import {getArticle} from '@/store/articles'

const Article: NextPage = () => {
  return (
    <MainLayout>
      <ArticleContainer />
    </MainLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  store =>
    async ({req, res, ...etc}) => {
      const {slug} = etc.params
      await store.dispatch(getArticle(slug))
    },
)

export default Article
