import React, {useEffect} from 'react'
import type {NextComponentType} from 'next'
import {Window} from '@/layout/index'
import {
  Introduction,
  SectionHeader,
  Welcome,
  SectionSlider,
  AboutWelcome,
} from '@/components/index'
import {
  Badge,
  Card,
  PostCard,
  Input,
  Textarea,
  Button,
  ProjectCard,
} from '@/ui/index'
import * as S from './style'
import {useSelector} from 'react-redux'
import {makeArticlesSelector} from '@/store/articles/selectors'

const ArticlesContainer: NextComponentType = () => {
  const articles = useSelector(makeArticlesSelector)

  return (
    <>
      <Window>
        <Welcome />
      </Window>
      <S.FiltersSection>
        <S.FilterByLabel>Search article by topic</S.FilterByLabel>
        <S.FiltersTags>
          {[
            'Css',
            'Html',
            'Javascript',
            'React',
            'Next.js',
            'Redux',
            'Sass',
            'TypeScript',
          ].map(item => (
            <Badge key={item}>{item}</Badge>
          ))}
        </S.FiltersTags>
        <S.FilterByLabel>Search article by topic</S.FilterByLabel>
        <S.FiltersTags>
          {['2019', '2020', '2021', '2022'].map(item => (
            <Badge key={item}>{item}</Badge>
          ))}
        </S.FiltersTags>
      </S.FiltersSection>

      <S.ArticlesSection>
        {articles.map((article, index) => {
          if (index < 6) {
            return (
              <PostCard
                key={article.guid}
                title={article.title}
                subtitle={article.description}
                date={article.pubDate}
                tags={article.categories}
                link={article.link}
                imageUrl={article.thumbnail}
              />
            )
          }
        })}
      </S.ArticlesSection>
      <Button outline>Load more</Button>
      {/* <S.QuotesSection>
        <SectionHeader
          title="Quotes"
          subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
        />
        <SectionSlider data={quotesMockData} hasArrow type={2} />
      </S.QuotesSection> */}
    </>
  )
}

export default ArticlesContainer
