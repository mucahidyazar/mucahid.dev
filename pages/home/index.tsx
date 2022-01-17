import React from 'react'
import type {NextPage} from 'next'
import {MainLayout} from '@/layout/index'
import {HomeContainer} from '@/containers/index'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HomeContainer />
    </MainLayout>
  )
}

export default Home
