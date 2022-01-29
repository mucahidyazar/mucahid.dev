import React from 'react'
import type {NextPage} from 'next'

import {MainLayout} from '@/layout'
import {HomeContainer} from '@/containers'

const Home: NextPage = () => (
  <MainLayout
    title="Hey, Passanger! Welcome!"
    description="This is my Home page. You will find a quict introduction about me. I am Mucahid. I have been working at Getir nowadays. And I am trying to be a fullstack developer. I love to learn new things and I am always trying to do that. And I have been trying to learn Blockchain thecknologies and smart contracts nowadays. And lastly I want to tell you, 'Love Javascript' guys!"
  >
    <HomeContainer />
  </MainLayout>
)

export default Home
