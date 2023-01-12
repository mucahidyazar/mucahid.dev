import React from 'react';
import App from 'next/app';
import { appWithTranslation } from '../locale/i18n';
import '../styles/_styles.scss';
import styles from './styles.module.scss';
import Head from 'next/head';
import Nav from './components/Nav';

class Template extends App {

  render() {

    const { Component, pageProps } = this.props;

    return (
      <html>
        <Head>
          {/* If you want you can add some meta tags here */}
          <script src="https://kit.fontawesome.com/de10586905.js" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap"
            rel="stylesheet" />

        </Head>
        <body>
          <div className={styles.body}>
            <Nav />
            <Component {...pageProps} />
          </div>
        </body>
        <style global jsx>{`

            html {
              font-family: 'Open Sans', sans-serif;
              font-size: 10px;
            }

            body {
              background: url('/img/background-7.jpg') no-repeat top center / cover;
              background-position: top;
              width: 100vw;
              height: 100vh;
            }

            *,
            *::before,
            *::after {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              border: none;
              text-decoration: none;
            }

            a {
              color: #ffffff;
            }

          `}</style>
      </html>
    )

  }
}

export default appWithTranslation(Template);