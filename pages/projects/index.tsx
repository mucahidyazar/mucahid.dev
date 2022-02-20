import React from 'react'
import type {NextPage} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

import {wrapper} from '@/store/index'
import {MainLayout} from '@/layout'
import {ProjectsContainer} from '@/containers'

const Projects: NextPage = () => {
  const {t} = useTranslation('meta')

  return (
    <MainLayout
      title={t('projectsTitle')}
      description={t('projectsDescription')}
    >
      <ProjectsContainer />
    </MainLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  () => async ctx => {
    const {locale}: any = ctx

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common', 'meta'])),
      },
    }
  },
)

export default Projects
