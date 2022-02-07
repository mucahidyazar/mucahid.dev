import React from 'react'
import type {NextPage} from 'next'

import {wrapper} from '@/store/index'
import {getInstagram} from '@/store/media'
import {MediaContainer} from '@/containers'
import {MainLayout} from '@/layout'

const Media: NextPage = () => (
  <MainLayout
    title="Equipments, Tools and medias"
    description="You will find and catch what my tools, requipments and medias are, here. What is my computer specs.? What tool Am I using? What hardware Does my computer has? and more. I hope I can give you some inspriration by my experience and setup. Have a enjoy!"
  >
    <MediaContainer />
  </MainLayout>
)

export const getServerSideProps = wrapper.getServerSideProps(
  store => async () => {
    await store.dispatch(getInstagram())
    return {
      props: {},
    }
  },
)

export default Media
