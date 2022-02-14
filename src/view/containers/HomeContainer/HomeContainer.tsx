import React from 'react'
import type {NextComponentType} from 'next'
import {useSelector} from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'

import {Introduction} from '@/components'
import {makeArticlesSelector} from '@/store/blog/selectors'
import {dataTestTarget} from '@/utilities'

import * as S from './style'

const HomeContainer: NextComponentType = () => {
  const articles = useSelector(makeArticlesSelector)
  const articlesForCard = articles.map(article => ({
    id: article.guid,
    name: article.title,
    text: article.description,
    date: article.pubDate,
    slug: article.slug,
  }))
  const latestArticles = articlesForCard.slice(0, 4)

  return (
    <>
      <S.Logos>
        <S.Logo {...dataTestTarget('company-logo')}>
          <Image
            src="/images/logos/granobra.png"
            alt="getir logo"
            layout="fill"
            objectFit="cover"
          />
        </S.Logo>
        <S.Logo {...dataTestTarget('company-logo')}>
          <Image
            src="/images/logos/getir.png"
            alt="getir logo"
            layout="fill"
            objectFit="cover"
          />
        </S.Logo>
        <S.Logo {...dataTestTarget('company-logo')}>
          <Image
            src="/images/logos/maxithings.png"
            alt="getir logo"
            layout="fill"
            objectFit="cover"
          />
        </S.Logo>
      </S.Logos>

      <S.SectionWrapper>
        <S.Section>
          <S.SectionHeader>
            <S.SectionType {...dataTestTarget('section-article-type')}>
              - Articles
            </S.SectionType>
            <S.SectionTitle {...dataTestTarget('section-article-title')}>
              Last Articles
            </S.SectionTitle>
            <S.SectionDescription
              {...dataTestTarget('section-article-description')}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </S.SectionDescription>
          </S.SectionHeader>
          <Link href="/blog" passHref>
            <S.SectionButton {...dataTestTarget('section-article-button')}>
              Daha fazla
            </S.SectionButton>
          </Link>
        </S.Section>
        <S.Articles {...dataTestTarget('section-articles')}>
          {latestArticles.map(article => (
            <S.Article key={article.id} {...dataTestTarget('section-article')}>
              <S.ArticleBody>
                <S.ArticleDate>{article.date} - Blog</S.ArticleDate>
                <Link href={`/blog/${article.slug}`} passHref>
                  <S.ArticleTitle>{article.name}</S.ArticleTitle>
                </Link>
              </S.ArticleBody>
              <Link href={`/blog/${article.slug}`} passHref>
                <S.ArticleGo>Go</S.ArticleGo>
              </Link>
            </S.Article>
          ))}
        </S.Articles>
      </S.SectionWrapper>

      <Introduction rightContent {...dataTestTarget('introduction')} />

      <S.SectionWrapper>
        <S.Section>
          <S.SectionHeader>
            <S.SectionType {...dataTestTarget('section-about-type')}>
              - About
            </S.SectionType>
            <S.SectionTitle {...dataTestTarget('section-about-title')}>
              Me, Companies and Projects
            </S.SectionTitle>
            <S.SectionDescription
              {...dataTestTarget('section-article-description')}
            >
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
            <S.ContentDetailsItem
              {...dataTestTarget('section-about-companies')}
            >
              <S.ContentDetailsNumber>3</S.ContentDetailsNumber>
              <S.ContentDetailsText>Companies</S.ContentDetailsText>
            </S.ContentDetailsItem>
            <S.ContentDetailsItem {...dataTestTarget('section-about-projects')}>
              <S.ContentDetailsNumber>14</S.ContentDetailsNumber>
              <S.ContentDetailsText>Projects</S.ContentDetailsText>
            </S.ContentDetailsItem>
          </S.ContentDetails>
        </S.Content>
      </S.SectionWrapper>
    </>
  )
}

export default HomeContainer
