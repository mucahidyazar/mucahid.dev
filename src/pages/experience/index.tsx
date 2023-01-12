/* eslint-disable react/react-in-jsx-scope */
import { FunctionComponent } from 'react';
//import styles from './styles.module.scss';
import Layout from '../components/Layout';
import Experience from './Experiences';

const MyExperience: FunctionComponent = () => {
  return (
    <Layout title="Experience Page" description="Welcome to my experience page">
      <Experience />
    </Layout>
  )
}

export default MyExperience;