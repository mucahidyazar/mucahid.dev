import React from 'react'
import type {NextPage} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {getArticles} from '@/store/blog'
import {wrapper} from '@/store/index'
import {LinksLayout} from '@/layout'
import {MainContainer} from '@/containers'

const Home: NextPage = () => {
  const {t} = useTranslation('meta')

  return (
    <LinksLayout title={t('homeTitle')} description={t('homeDescription')}>
      <MainContainer />
    </LinksLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store): any =>
    async ({locale}: {locale: string}) => {
      await store.dispatch(getArticles())

      return {
        props: {
          ...(await serverSideTranslations(locale, ['common', 'meta'])),
        },
      }
    },
)

export default Home
