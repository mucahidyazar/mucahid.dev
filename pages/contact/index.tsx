import React from 'react'
import type {NextPage} from 'next'
import {MainLayout} from '@/layout/index'
import {ContactContainer} from '@/containers/index'

const Contact: NextPage = () => {
  return (
    <MainLayout
      title="Contact me!"
      description="I am always open to new opportunities. If you have any questions, please contact me. I will be happy to answer your questions. Also if you want to buy a coffee for me you can do that by sending basic or board message after you connected your metamask. Also you can see my smart contract on the project on my github page."
    >
      <ContactContainer />
    </MainLayout>
  )
}

export default Contact
