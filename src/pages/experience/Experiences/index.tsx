/* eslint-disable react/react-in-jsx-scope */
import { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import Container from '../../components/Container';
import Title from '../../components/Title';
import { withTranslation } from '../../../locale/i18n';

interface experienceInterface {
  t: any;
}

const Experiences: FunctionComponent<experienceInterface> = ({ t }) => {

  interface experienceDatasInterface {
    name: string;
    image: string;
    position: string;
    from: number;
    to: number;
    detail: string;
  }
  const experienceDatas: experienceDatasInterface[] = [
    {
      name: "Granobra",
      image: "/img/granobra.png",
      position: "Frontend Developer",
      from: 2019,
      to: 2019,
      detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis dicta ipsum magni maxime, mollitia quae quaerat veritatis voluptate voluptatem! Accusantium dicta illum impedit quam."
    },
    {
      name: "Biletsepeti.com",
      image: "/img/biletsepeti.png",
      position: "Full-Stack Developer",
      from: 2019,
      to: 2019,
      detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis dicta ipsum magni maxime, mollitia quae quaerat veritatis voluptate voluptatem! Accusantium dicta illum impedit quam."
    }
  ]

  return (
    <div className={styles.outside}>
      <Container>
        <div className={styles.experiences}>
          <Title first={t("first")} second={t("second")} />
          <div className={styles.content}>
            {
              experienceDatas.map((exp, index) => (
                <div className={styles.experience} key={index}>
                  <div className={styles.experience__image}>
                    <img src={exp.image} alt={exp.name} />
                  </div>
                  <div className={styles.experience__content}>
                    <h4>{exp.position}</h4>
                    <h5>{exp.name}</h5>
                    <h6>{exp.from} - {exp.to}</h6>
                    <p>{exp.detail}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </Container>
    </div>
  )
}

export default withTranslation("experience")(Experiences);