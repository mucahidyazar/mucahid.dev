import React from 'react'
import type {GetServerSideProps, NextPage} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

import {wrapper} from '@/store/index'
import {MainLayout} from '@/layout'
import {ChangelogsContainer} from '@/containers'

const Changelog: NextPage = () => {
  const {t} = useTranslation('meta')

  return (
    <MainLayout
      title={t('changelogsTitle')}
      description={t('changelogsDescription')}
      hasWelcome={false}
    >
      <ChangelogsContainer />
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => async ctx => {
    const {locale}: any = ctx

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common', 'meta'])),
      },
    }
  })

export default Changelog
