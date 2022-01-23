import React from 'react'
import type {NextPage} from 'next'
import {MainLayout} from '@/layout/index'
import {ArticlesContainer} from '@/containers/index'
import {wrapper, State} from '@/store/index'
import {getArticles} from '@/store/articles/actions'

const Articles: NextPage<State> = () => {
  return (
    <MainLayout>
      <ArticlesContainer />
    </MainLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  store =>
    async ({req, res, ...etc}) => {
      await store.dispatch(getArticles())
    },
)

export default Articles
