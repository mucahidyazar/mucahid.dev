import React from 'react'
import type {NextPage} from 'next'
import {MainLayout} from '@/layout/index'
import {ArticlesContainer} from '@/containers/index'

const Articles: NextPage = () => {
  return (
    <MainLayout>
      <ArticlesContainer />
    </MainLayout>
  )
}

export default Articles
