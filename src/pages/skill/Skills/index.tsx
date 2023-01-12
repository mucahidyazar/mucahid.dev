/* eslint-disable react/react-in-jsx-scope */
import { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import Container from '../../components/Container';
import Title from '../../components/Title';
import { withTranslation } from '../../../locale/i18n';

interface skillsInterface {
  t: any
}

const Skills: FunctionComponent<skillsInterface> = ({ t }) => {

  interface mySkills {
    name: string;
    percent: number;
  }

  const mySkills: mySkills[] = [
    {
      name: "Html5",
      percent: 79
    },
    {
      name: "Css3",
      percent: 82
    },
    {
      name: "Javascript",
      percent: 70
    },
    {
      name: "React",
      percent: 80
    },
    {
      name: "NodeJS",
      percent: 65
    },
    {
      name: "Express",
      percent: 65
    },
    {
      name: "NextJS",
      percent: 65
    },
    {
      name: "Typescript",
      percent: 75
    },
    {
      name: "Axios",
      percent: 80
    },
    {
      name: "Mongoose",
      percent: 55
    },
  ]

  return (
    <div className={styles.outside}>
      <Container>
        <div className={styles.skills}>
          <Title first={t("first")} second={t("second")} />
          <div className={styles.skills__groups}>
            {
              mySkills.map((skill, index) => (
                <div className={styles.item} key={index}>
                  <div className={styles.item__header}>
                    <div className={styles.item__title}>{skill.name}</div>
                    <div className={styles.item__percent}>{skill.percent}%</div>
                  </div>
                  <div className={styles.item__bar}>
                    <div className={styles.full} style={{ width: skill.percent + "%" }}></div>
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

export default withTranslation("skills")(Skills);