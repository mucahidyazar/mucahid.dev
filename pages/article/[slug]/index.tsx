import React from 'react'
import type {NextPage} from 'next'

import {ArticleContainer} from '@/containers'
import {getArticle, getComments} from '@/store/articles'
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
  store =>
    async (ctx): Promise<any> => {
      const {slug} = ctx.params as any

      await store.dispatch(getArticle(slug))
      await store.dispatch(getComments(slug))
    },
)

export default Article
