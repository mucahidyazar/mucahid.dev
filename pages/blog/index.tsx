import React from 'react'
import type {NextPage} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

import {wrapper} from '@/store/index'
import {MainLayout} from '@/layout'
import {BlogContainer} from '@/containers'
import {getArticles} from '@/store/blog/actions'

const Blog: NextPage = () => {
  const {t} = useTranslation('meta')

  return (
    <MainLayout title={t('blogTitle')} description={t('blogDescription')}>
      <BlogContainer />
    </MainLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store): any =>
    async (ctx: any) => {
      const {locale} = ctx
      await store.dispatch(getArticles())

      return {
        props: {
          ...(await serverSideTranslations(locale, ['common', 'meta'])),
        },
      }
    },
)

export default Blog
