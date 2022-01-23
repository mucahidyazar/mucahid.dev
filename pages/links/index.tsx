import React from 'react'
import type {NextPage} from 'next'
import {MainLayout} from '@/layout/index'
import {LinksContainer} from '@/containers/index'

const Links: NextPage = () => {
  return (
    <MainLayout>
      <LinksContainer />
    </MainLayout>
  )
}

export default Links
