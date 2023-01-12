/* eslint-disable react/react-in-jsx-scope */
import { FunctionComponent } from 'react';
//import styles from './styles.module.scss';
import Layout from '../components/Layout';
import Portfolio from './Portfolio';

const MyPortfolio: FunctionComponent = () => {
  return (
    <Layout title="Portfolio Page" description="Welcome to my portfolio page">
      <Portfolio />
    </Layout>
  )
}

export default MyPortfolio;