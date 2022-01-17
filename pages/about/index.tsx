import React from 'react'
import type {NextPage} from 'next'
import {MainLayout} from '@/layout/index'
import {AboutContainer} from '@/containers/index'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <AboutContainer />
    </MainLayout>
  )
}

export default Home
