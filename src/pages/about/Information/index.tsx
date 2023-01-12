/* eslint-disable react/react-in-jsx-scope */
import { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import Container from '../../components/Container';
import Link from 'next/link';

const Information: FunctionComponent = () => {
  return (
    <div className={styles.outside}>
      <Container>
        <div className={styles.information}>
          <div className={styles.photos}>
            <div className={styles.photos__photo}>
              <img src="/img/profile.jpeg" alt="Profile 1" />
            </div>
            <div className={styles.photos__photo}>
              <img src="/img/profile.jpeg" alt="Profile 1" />
            </div>
            <div className={styles.photos__photo}>
              <img src="/img/profile.jpeg" alt="Profile 1" />
            </div>
          </div>
          <div className={styles.info}>
            <h3>Front-End Developer</h3>
            <p>I am <strong>Mucahid Yazar</strong>. I am a simple , creative, enthusiastic and fun-loving person. I always like to create something on my own which is helpful for others.</p>
            <p>I have vast experience in HTML5, CSS3, Javascript, JQuery, Node js and on. I have already completed over 500 projecs of different buyer throughout the world.</p>
            <div className={styles.info__body}>
              <p><span>Name : </span> Mucahid Yazar</p>
              <p><span>Age : </span> 28</p>
              <p><span>Email : </span> mucahidyazar@gmail.com</p>
              <p><span>Phone : </span> +90 553 408 8244</p>
              <p><span>Address : </span> Istanbul / TURKEY</p>
              <p><span>Hobbies : </span> Camping, Video Games</p>
            </div>
            <div className={styles.info__buttons}>
              <Link href="/"><a>My Skills</a></Link>
              <Link href="/"><a>Download CV</a></Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Information;