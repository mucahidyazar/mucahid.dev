import React from 'react'
import type {NextPage} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

import {wrapper} from '@/store/index'
import {MainLayout} from '@/layout'
import {AboutContainer} from '@/containers'

const About: NextPage = () => {
  const {t} = useTranslation('meta')

  return (
    <MainLayout title={t('aboutTitle')} description={t('aboutDescription')}>
      <AboutContainer />
    </MainLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  () => async (context: any) => {
    const {locale} = context
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common', 'meta'])),
      },
    }
  },
)

export default About
