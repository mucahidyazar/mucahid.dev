import React from 'react'
import type {GetServerSideProps, NextPage} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

import {wrapper} from '@/store/index'
import {getInstagram} from '@/store/media'
import {MediaContainer} from '@/containers'
import {MainLayout} from '@/layout'

const Media: NextPage = () => {
  const {t} = useTranslation('meta')

  return (
    <MainLayout title={t('mediaTitle')} description={t('mediaDescription')}>
      <MediaContainer />
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async ctx => {
    const {locale}: any = ctx
    await store.dispatch(getInstagram())

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common', 'meta'])),
      },
    }
  })

export default Media
