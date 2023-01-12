/* eslint-disable react/react-in-jsx-scope */
import { FunctionComponent } from 'react';
//import styles from './styles.module.scss';
import Layout from '../components/Layout';
import Skills from './Skills';

const Skill: FunctionComponent = () => {
  return (
    <Layout title="Skill Page" description="Welcome to my portfolio page">
      <Skills />
    </Layout>
  )
}

export default Skill;