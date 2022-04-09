import React from 'react'
import type {NextPage} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {getArticles} from '@/store/blog'
import {getAllNews} from '@/store/home'
import {wrapper} from '@/store/index'
import {MainLayout} from '@/layout'
import {HomeContainer} from '@/containers'

const Home: NextPage = () => {
  const {t} = useTranslation('meta')

  return (
    <MainLayout title={t('homeTitle')} description={t('homeDescription')}>
      <HomeContainer />
    </MainLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store): any =>
    async ({locale}: {locale: string}) => {
      await store.dispatch(getAllNews())
      await store.dispatch(getArticles())

      return {
        props: {
          ...(await serverSideTranslations(locale, ['common', 'meta'])),
        },
      }
    },
)

export default Home
