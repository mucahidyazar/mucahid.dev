import React from 'react'
import type {GetServerSideProps, NextPage} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

import {wrapper} from '@/store/index'
import {MainLayout} from '@/layout'
import {HelpContainer} from '@/containers'

const Help: NextPage = () => {
  const {t} = useTranslation('meta')

  return (
    <MainLayout
      title={t('helpTitle')}
      description={t('helpDescription')}
      hasWelcome={false}
    >
      <HelpContainer />
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

export default Help
