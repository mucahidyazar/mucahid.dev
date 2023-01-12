/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FunctionComponent, useState } from 'react';
import Link from 'next/link';
import { i18n, withTranslation } from '../../../locale/i18n';
import styles from './styles.module.scss';
import Container from '../Container';

interface NavInterface {
  t: any
}

const Nav: FunctionComponent<NavInterface> = ({ t }) => {

  const [language, setLanguage] = useState('en');

  const onChangeLanguage = () => {
    if (language === "en") {

      i18n.changeLanguage("tr")
      setLanguage("tr");
    } else {

      i18n.changeLanguage('en')
      setLanguage("en");
    }
  }

  return (
    <div className={styles.outside}>
      <Container>
        <nav className={styles.nav}>
          <Link href="/">
            <a className={styles.nav__logo}>
              <span>M</span><span>Y</span>
            </a>
          </Link>
          <div className={styles.nav__menu}>
            <Link href="/"><a>{t("home")}</a></Link>
            <Link href="/about"><a>{t("about")}</a></Link>
            <Link href="/skill"><a>{t("skill")}</a></Link>
            <Link href="/portfolio"><a>{t("my-portfolio")}</a></Link>
            <Link href="/experience"><a>{t("experience")}</a></Link>
          </div>
          <div className={styles.nav__language}>
            <img src={`/img/${i18n.language}.svg`} alt="" />
            <div onClick={onChangeLanguage}><img src={`/img/${i18n.language === "tr" ? "en" : "tr"}.svg`} alt="" /></div>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default withTranslation("nav")(Nav);