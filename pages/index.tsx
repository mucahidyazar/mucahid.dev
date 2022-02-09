import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {getArticles} from '@/store/blog'
import {getAllNews} from '@/store/home'
import {wrapper} from '@/store/index'

import Home from './home'

export const getServerSideProps = wrapper.getServerSideProps(
  (store): any =>
    async ({locale}: {locale: string}) => {
      await store.dispatch(getAllNews())
      await store.dispatch(getArticles())

      return {
        props: {
          ...(await serverSideTranslations(locale, ['common'])),
        },
      }
    },
)

export default Home
