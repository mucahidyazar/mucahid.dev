import React from 'react'
import type {NextPage} from 'next'
import {MainLayout} from '@/layout/index'
import {MediaContainer} from '@/containers/index'
import {wrapper} from '@/store/index'
import {getInstagram, getTweets} from '@/store/articles'

const Media: NextPage = () => {
  return (
    <MainLayout>
      <MediaContainer />
    </MainLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  store =>
    async ({req, res, ...etc}) => {
      await store.dispatch(getTweets())
      await store.dispatch(getInstagram())
    },
)

export default Media
