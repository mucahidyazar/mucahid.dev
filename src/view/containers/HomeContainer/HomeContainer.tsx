import React from 'react'
import {useSelector} from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import {useTranslation} from 'next-i18next'

import {Introduction} from '@/components'
import {makeArticlesSelector} from '@/store/blog/selectors'
import {dataTestTarget} from '@/utilities'
import {companies, projects} from '@/data'

import * as S from './style'

const HomeContainer: React.FC = () => {
  const {t} = useTranslation('common')
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
            <S.SectionType>- {t('articles')}</S.SectionType>
            <S.SectionTitle>{t('lastArticlesSectionTitle')}</S.SectionTitle>
            <S.SectionDescription>
              {t('lastArticlesSectionDescription')}
            </S.SectionDescription>
          </S.SectionHeader>
          <Link href="/blog" passHref>
            <S.SectionButton {...dataTestTarget('section-article-button')}>
              {t('showMore')}
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
              - {t('about')}
            </S.SectionType>
            <S.SectionTitle {...dataTestTarget('section-about-title')}>
              {t('aboutSectionTitle')}
            </S.SectionTitle>
            <S.SectionDescription
              {...dataTestTarget('section-article-description')}
            >
              {t('aboutSectionDescription')}
            </S.SectionDescription>
          </S.SectionHeader>
          <S.SectionButton>{t('showMore')}</S.SectionButton>
        </S.Section>
        <S.Content>
          <S.ContentTitle>{t('aboutSectionTitle2')}</S.ContentTitle>
          <S.ContentDescription>
            {t('aboutSectionDescription2')}
          </S.ContentDescription>
          <S.ContentDetails>
            <S.ContentDetailsItem
              {...dataTestTarget('section-about-companies')}
            >
              <S.ContentDetailsNumber>
                {companies.length}
              </S.ContentDetailsNumber>
              <S.ContentDetailsText>{t('companies')}</S.ContentDetailsText>
            </S.ContentDetailsItem>
            <S.ContentDetailsItem {...dataTestTarget('section-about-projects')}>
              <S.ContentDetailsNumber>{projects.length}</S.ContentDetailsNumber>
              <S.ContentDetailsText>{t('projects')}</S.ContentDetailsText>
            </S.ContentDetailsItem>
          </S.ContentDetails>
        </S.Content>
      </S.SectionWrapper>
    </>
  )
}

export default HomeContainer
