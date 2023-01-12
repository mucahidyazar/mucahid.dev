/* eslint-disable react/react-in-jsx-scope */
import { FunctionComponent, Fragment } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import Nav from '../Nav';

interface Layout {
  children: any,
  title: string;
  description: string;
}

const Layout: FunctionComponent<Layout> = ({ children, title, description, ...props }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className={styles.layout}>
        {children}
      </div>
    </Fragment>
  )
}

export default Layout;