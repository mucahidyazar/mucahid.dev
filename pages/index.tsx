import {getArticles} from '@/store/articles'
import {wrapper} from '@/store/index'

import Home from './home'

export const getServerSideProps = wrapper.getServerSideProps(
  store => async () => {
    await store.dispatch(getArticles())
  },
)

export default Home
