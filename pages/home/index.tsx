import React from 'react'
import type {NextPage} from 'next'
import {MainLayout} from '../../src/view/layout'
import {Introduction, Welcome} from '../../src/view/components'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Welcome />
      <Introduction />
    </MainLayout>
  )
}

export default Home
