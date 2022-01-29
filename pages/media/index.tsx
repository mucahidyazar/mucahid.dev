import React from 'react'
import type {NextPage} from 'next'
import {MainLayout} from '@/layout/index'
import {MediaContainer} from '@/containers/index'
import {wrapper} from '@/store/index'
import {getInstagram} from '@/store/media'

const Media: NextPage = () => {
  return (
    <MainLayout
      title="Equipments, Tools and medias"
      description="You will find and catch what my tools, requipments and medias are, here. What is my computer specs.? What tool Am I using? What hardware Does my computer has? and more. I hope I can give you some inspriration by my experience and setup. Have a enjoy!"
    >
      <MediaContainer />
    </MainLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  store =>
    async ({req, res, ...etc}) => {
      await store.dispatch(getInstagram())
    },
)

export default Media
