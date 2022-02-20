import React from 'react'
import type {GetServerSideProps, NextPage} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

import {wrapper} from '@/store/index'
import {LinksContainer} from '@/containers'
import {LinksLayout} from '@/layout'

const Links: NextPage = () => {
  const {t} = useTranslation('meta')

  return (
    <LinksLayout title={t('linksTitle')} description={t('linksDescription')}>
      <LinksContainer />
    </LinksLayout>
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

export default Links
