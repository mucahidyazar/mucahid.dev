import React from 'react'
import type {NextPage} from 'next'

import {MainLayout} from '@/layout'
import {BlogContainer} from '@/containers'
import {getArticles} from '@/store/articles/actions'
import {wrapper} from '@/store/index'

const Blog: NextPage = () => (
  <MainLayout
    title="ARTICLES"
    description="I love to learn about programming and coding. And while I learn some new things, I also like to share my knowledge with the community. So I share my notes and experiences as articles. I share the articles in Turkish on Medium. You can find my medium account on the Contact page. I would be glad to hear your feedbacks and suggestions. And also if you wan't to get email updates, you can subscribe to my newsletter. I will send you the latest articles and updates."
  >
    <BlogContainer />
  </MainLayout>
)

export const getServerSideProps = wrapper.getServerSideProps(
  (store): any =>
    async () => {
      await store.dispatch(getArticles())
    },
)

export default Blog
