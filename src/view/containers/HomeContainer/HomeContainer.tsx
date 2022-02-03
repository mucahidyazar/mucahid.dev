import React from 'react'
import type {NextComponentType} from 'next'
import {useSelector} from 'react-redux'
import Image from 'next/image'

import {Introduction, Sections, Section} from '@/components'
import {Card} from '@/ui'
import {makeArticlesSelector} from '@/store/articles/selectors'

import * as S from './style'

const HomeContainer: NextComponentType = () => {
  const articles = useSelector(makeArticlesSelector)
  const articlesForCard = articles.map((article: any) => ({
    id: article.guid,
    name: article.title,
    text: article.description,
  }))
  const latestArticles = articlesForCard.slice(0, 4)
  const randomArticles = articlesForCard
    .slice(3, articlesForCard.length)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)

  return (
    <>
      <S.Logos>
        <S.Logo>
          <Image
            src="/images/logos/granobra.png"
            alt="getir logo"
            width={280}
            height={36}
            objectFit="cover"
          />
        </S.Logo>
        <S.Logo>
          <Image
            src="/images/logos/getir.png"
            alt="getir logo"
            width={60}
            height={60}
            objectFit="cover"
          />
        </S.Logo>
        <S.Logo>
          <Image
            src="/images/logos/maxithings.png"
            alt="getir logo"
            width={360}
            height={48}
            objectFit="cover"
          />
        </S.Logo>
      </S.Logos>

      <S.SectionWrapper>
        <S.Section>
          <S.SectionHeader>
            <S.SectionType>- Articles</S.SectionType>
            <S.SectionTitle>Last Articles</S.SectionTitle>
            <S.SectionDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </S.SectionDescription>
          </S.SectionHeader>
          <S.SectionButton>Daha fazla</S.SectionButton>
        </S.Section>
        <S.Articles>
          {latestArticles.map((article: any) => (
            <S.Article>
              <S.ArticleBody>
                <S.ArticleDate>Feb 14 - Blog</S.ArticleDate>
                <S.ArticleTitle>How to delte your Github?</S.ArticleTitle>
              </S.ArticleBody>
              <S.ArticleGo>Go</S.ArticleGo>
            </S.Article>
          ))}
        </S.Articles>
      </S.SectionWrapper>

      <Introduction rightContent />

      <S.SectionWrapper>
        <S.Section>
          <S.SectionHeader>
            <S.SectionType>- About</S.SectionType>
            <S.SectionTitle>Me, Companies and Projects</S.SectionTitle>
            <S.SectionDescription>
              Let me show you a quick summary about me, my experiences and my
              projects.
            </S.SectionDescription>
          </S.SectionHeader>
          <S.SectionButton>Daha fazla</S.SectionButton>
        </S.Section>
        <S.Content>
          <S.ContentTitle>
            Let's add a new project here and start a new journey. Lets make our
            dream project come true.
          </S.ContentTitle>
          <S.ContentDescription>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            excepturi, a sapiente officiis eaque facilis odio deleniti
            temporibus nostrum placeat error magni modi libero omnis
            reprehenderit dignissimos nihil id. Quod in porro modi tempore illum
            earum incidunt repellat rem consectetur ut aspernatur accusantium
            quae, inventore et nam fuga nostrum commodi?
          </S.ContentDescription>
          <S.ContentDetails>
            <S.ContentDetailsItem>
              <S.ContentDetailsNumber>3</S.ContentDetailsNumber>
              <S.ContentDetailsText>Companies</S.ContentDetailsText>
            </S.ContentDetailsItem>
            <S.ContentDetailsItem>
              <S.ContentDetailsNumber>14</S.ContentDetailsNumber>
              <S.ContentDetailsText>Projects</S.ContentDetailsText>
            </S.ContentDetailsItem>
          </S.ContentDetails>
        </S.Content>
      </S.SectionWrapper>

      {/* <Sections
        sectionOne={
          <Section
            title="Latest Posts"
            subtitle="These are the latest posts from my website."
            link="/articles"
          >
            {latestArticles.map((article: any) => (
              <S.Article>
                <S.ArticleBody>
                  <S.ArticleDate>Feb 14 - Blog</S.ArticleDate>
                  <S.ArticleTitle>How to delte your Github?</S.ArticleTitle>
                </S.ArticleBody>
                <S.ArticleGo>Go</S.ArticleGo>
              </S.Article>
            ))}
          </Section>
        }
        sectionTwo={
          <Section
            title="Top 10 Reading"
            subtitle="Let's see the most read posts from my website."
            link="/articles"
          >
            {randomArticles.map((article: any) => (
              <Card key={article.id} data={article} type={2} />
            ))}
          </Section>
        }
      /> */}
    </>
  )
}

export default HomeContainer
