import Home from './home'
import {wrapper} from '@/store/index'
import {getArticles} from '@/store/articles/actions'

export const getServerSideProps = wrapper.getServerSideProps(
  store =>
    async ({req, res, ...etc}) => {
      await store.dispatch(getArticles())
    },
)

export default Home
