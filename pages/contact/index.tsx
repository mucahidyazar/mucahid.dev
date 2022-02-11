import React from 'react'
import type {GetServerSideProps, NextPage} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {wrapper} from '@/store/index'
import {MainLayout} from '@/layout'
import {ContactContainer} from '@/containers'

const Contact: NextPage = () => (
  <MainLayout
    title="Contact me!"
    description="I am always open to new opportunities. If you have any questions, please contact me. I will be happy to answer your questions. Also if you want to buy a coffee for me you can do that by sending basic or board message after you connected your metamask. Also you can see my smart contract on the project on my github page."
  >
    <ContactContainer />
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

export default Contact
