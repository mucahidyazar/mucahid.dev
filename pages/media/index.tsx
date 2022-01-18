import React from 'react'
import type {NextPage} from 'next'
import {MainLayout} from '@/layout/index'
import {MediaContainer} from '@/containers/index'

const Media: NextPage = () => {
  return (
    <MainLayout>
      <MediaContainer />
    </MainLayout>
  )
}

export default Media
