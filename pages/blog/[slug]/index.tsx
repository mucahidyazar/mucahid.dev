import React from 'react'
import type {NextPage} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

import {wrapper} from '@/store/index'
import {ArticleContainer} from '@/containers'
import {getArticle, getComments} from '@/store/blog'
import {MainLayout} from '@/layout'

const Article: NextPage = () => {
  const {t} = useTranslation('meta')

  return (
    <MainLayout
      hasWelcome={false}
      title={t('articleTitle')}
      description={t('articleDescription')}
    >
      <ArticleContainer />
    </MainLayout>
  )
}

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
          ...(await serverSideTranslations(locale, ['common', 'meta'])),
        },
      }
    },
)

export default Article
