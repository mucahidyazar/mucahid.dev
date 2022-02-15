import React from 'react'
import type {GetServerSideProps, NextPage} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {wrapper} from '@/store/index'
import {MainLayout} from '@/layout'
import {HelpContainer} from '@/containers'

const Help: NextPage = () => (
  <MainLayout
    title="&#128075; Hey, Passanger! Welcome!"
    description="This is my Help page. You will find a quict introduction about me. I am Mucahid. I have been working at Getir nowadays. And I am trying to be a fullstack developer. I love to learn new things and I am always trying to do that. And I have been trying to learn Blockchain thecknologies and smart contracts nowadays. And lastly I want to tell you, 'Love Javascript' guys!"
    hasWelcome={false}
  >
    <HelpContainer />
  </MainLayout>
)

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => async ctx => {
    const {locale}: any = ctx

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    }
  })

export default Help
