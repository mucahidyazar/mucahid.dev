import React from 'react'
import type {NextPage} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {wrapper} from '@/store/index'
import {MainLayout} from '@/layout'
import {AboutContainer} from '@/containers'

const About: NextPage = () => (
  <MainLayout
    title="What about me?"
    description="A developer should introduce himself in a few words. I am a full-stack developer, with a passion for web development. I have a strong background in front-end development, and I am currently working on my skills in the backend. I am also a big fan of the front-end development and I am constantly learning new technologies. Let's go more in depth and see what I can do for you."
  >
    <AboutContainer />
  </MainLayout>
)

export const getServerSideProps = wrapper.getServerSideProps(
  () => async (context: any) => {
    const {locale} = context
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    }
  },
)

export default About
