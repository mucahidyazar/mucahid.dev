import React from 'react'
import type {NextPage} from 'next'
import {useTranslation} from 'next-i18next'

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

export default Home
