/* eslint-disable react/react-in-jsx-scope */
import { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import Container from '../../components/Container';
import Title from '../../components/Title';
import { withTranslation } from '../../../locale/i18n';

interface portfolioInterface {
  t: any;
}

const Portfolio: FunctionComponent<portfolioInterface> = ({ t }) => {

  interface portfolioDataInterface {
    name: string;
    active: boolean;
    datas: {
      title: string;
      tags: string[];
      image: string;
      link: string;
    }[]
  }

  const portfolioData: portfolioDataInterface[] = [
    {
      name: "Web Design",
      active: false,
      datas: [
        {
          title: "Project One",
          tags: ["brand", "design"],
          image: "/img/1.jpg",
          link: "https://github.com/mucahidyazar/travia-quiz-app"
        },
        {
          title: "Project Two",
          tags: ["brand", "adobe", "graphic", "figma"],
          image: "/img/2.jpg",
          link: "https://github.com/mucahidyazar/travia-quiz-app"
        },
        {
          title: "Project Three",
          tags: ["photoshop", "spotify"],
          image: "/img/3.jpg",
          link: "https://github.com/mucahidyazar/travia-quiz-app"
        }
      ]
    },
    {
      name: "App Development",
      active: false,
      datas: [
        {
          title: "App One",
          tags: ["brand", "design"],
          image: "/img/4.jpg",
          link: "https://github.com/mucahidyazar/travia-quiz-app"
        },
        {
          title: "App Two",
          tags: ["brand", "adobe", "graphic", "figma"],
          image: "/img/5.jpg",
          link: "https://github.com/mucahidyazar/travia-quiz-app"
        }
      ]
    },
    {
      name: "Photography",
      active: false,
      datas: [
        {
          title: "Gallery One",
          tags: ["brand", "design"],
          image: "/img/6.jpg",
          link: "https://github.com/mucahidyazar/travia-quiz-app"
        }
      ]
    }
  ]

  type datasType = {
    title: string;
    tags: string[];
    image: string;
    link: string;
  }
  let allDatas: datasType[] = [];
  portfolioData.map((data) => allDatas.push(...data.datas));
  //portfolioData.map((data) => data.datas.map(dt => allDatas.push(dt)));

  const getDatas = (datas: datasType[]): any => {
    return (
      datas.map((dt, index) => (
        <div className={styles.item} key={index} style={{ backgroundImage: `url(${dt.image})` }}>
          <h4>{dt.title}</h4>
          <div className={styles.item__tags}>{
            dt.tags.map(tag => <span>{tag}</span>)
          }</div>
        </div>
      ))
    )
  }

  return (
    <div className={styles.outside}>
      <Container>
        <div className={styles.portfolio}>
          <Title first={t("first")} second={t("second")} />
          <div className={styles.body}>
            <div className={styles.body__header}>
              <div className={styles.header__title}>All</div>
              {
                portfolioData.map((data, index) => (
                  <div key={index} className={styles.header__title}>{data.name}</div>
                ))
              }
            </div>
            <div className={styles.body__content}>
              {
                portfolioData.map(data => (
                  data.active
                    ? getDatas(data.datas)
                    : null
                ))
                  ? getDatas(allDatas)
                  : null
              }
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default withTranslation("portfolio")(Portfolio);