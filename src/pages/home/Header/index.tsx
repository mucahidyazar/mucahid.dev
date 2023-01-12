/* eslint-disable react/react-in-jsx-scope */
import { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import Container from '../../components/Container';

const Header: FunctionComponent = () => {
  return (
    <div className={styles.outside}>
      <Container>
        <div className={styles.home}>
          <div className={styles.image}>
            <img src="/img/profile.jpeg" alt="ProfilePhoto" />
          </div>
          <div className={styles.description}>
            <h2>I'm Mucahid</h2>
            <div className={styles.abilities}>
              <div>
                <div>Web Developer</div>
                <div>Mobile Developer</div>
                <div>UI/UX Designer</div>
                <div>Blogger</div>
                <div>Gamer</div>
              </div>
            </div>
          </div>
          <div className={styles.social}>
            <a href="/" className={styles.social__icon}>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="/" className={styles.social__icon}>
              <i className="fab fa-github"></i>
            </a>
            <a href="/" className={styles.social__icon}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="/" className={styles.social__icon}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className={styles.social__icon}>
              <i className="fab fa-figma"></i>
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header;