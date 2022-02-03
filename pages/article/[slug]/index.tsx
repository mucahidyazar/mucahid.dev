import React from 'react'
import type {NextPage} from 'next'

import {ArticleContainer} from '@/containers'
import {getArticle} from '@/store/articles'
import {wrapper} from '@/store/index'
import {MainLayout} from '@/layout'

const Article: NextPage = () => (
  <MainLayout
    hasWelcome={false}
    title="Read, study, code and learn..."
    description="Practise all the time, read, study, code and learn..."
  >
    <ArticleContainer />
  </MainLayout>
)

export const getServerSideProps = wrapper.getServerSideProps(
  (store): any =>
    async (ctx: any) => {
      const {slug} = ctx.params
      await store.dispatch(getArticle(slug))
    },
)

export default Article
