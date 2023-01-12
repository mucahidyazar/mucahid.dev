/* eslint-disable react/react-in-jsx-scope */
import { FunctionComponent } from 'react';
//import styles from './styles.module.scss';
import Layout from '../components/Layout';
import Information from './Information';

const Home: FunctionComponent = () => {
  return (
    <Layout title="Home Page" description="Welcome to my portfolio page">
      <Information />
    </Layout>
  )
}

export default Home;