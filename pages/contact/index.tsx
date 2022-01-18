import React from 'react'
import type {NextPage} from 'next'
import {MainLayout} from '@/layout/index'
import {ContactContainer} from '@/containers/index'

const Contact: NextPage = () => {
  return (
    <MainLayout>
      <ContactContainer />
    </MainLayout>
  )
}

export default Contact
