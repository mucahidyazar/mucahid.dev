import React from 'react'
import type {NextPage} from 'next'
import {getSession} from 'next-auth/react'

import {MainLayout} from '@/layout'
import {ArticlesContainer} from '@/containers'
import {getArticles} from '@/store/articles/actions'
import {State, wrapper} from '@/store/index'

const Articles: NextPage<State> = () => (
  <MainLayout
    title="Let's read some articles!"
    description="I love to learn about programming and coding. And while I learn some new things, I also like to share my knowledge with the community. So I share my notes and experiences as articles. I share the articles in Turkish on Medium. You can find my medium account on the Contact page. I would be glad to hear your feedbacks and suggestions. And also if you wan't to get email updates, you can subscribe to my newsletter. I will send you the latest articles and updates."
  >
    <ArticlesContainer />
  </MainLayout>
)

export const getServerSideProps = wrapper.getServerSideProps(
  (store): any =>
    async () => {
      await store.dispatch(getArticles())
    },
)

export default Articles
