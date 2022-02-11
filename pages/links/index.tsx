import React from 'react'
import type {GetServerSideProps, NextPage} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {wrapper} from '@/store/index'
import {LinksContainer} from '@/containers'

const Links: NextPage = () => <LinksContainer />

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => async ctx => {
    const {locale}: any = ctx

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    }
  })

export default Links
