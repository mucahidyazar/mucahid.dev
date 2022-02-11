import React from 'react'
import type {NextPage} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {wrapper} from '@/store/index'
import {ArticleContainer} from '@/containers'
import {getArticle, getComments} from '@/store/blog'
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
    async (context: any): Promise<any> => {
      const {
        params: {slug},
        locale,
      } = context

      await store.dispatch(getArticle(slug))
      await store.dispatch(getComments(slug))

      return {
        props: {
          ...(await serverSideTranslations(locale, ['common'])),
        },
      }
    },
)

export default Article
