import React from 'react'
import type {NextPage} from 'next'

import {ArticleContainer} from '@/containers'
import {getArticle} from '@/store/articles'
import {wrapper} from '@/store/index'
import {MainLayout} from '@/layout'

const Article: NextPage = () => (
  <MainLayout hasWelcome={false}>
    <ArticleContainer />
  </MainLayout>
)

export const getServerSideProps = wrapper.getServerSideProps(
  store => async ctx => {
    const {slug} = ctx.params
    await store.dispatch(getArticle(slug))
  },
)

export default Article
