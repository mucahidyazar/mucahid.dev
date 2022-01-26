import React from 'react'
import {SectionHeader} from '@/components/index'
import * as S from './style'
import {Card} from '@/ui/index'
import {useSelector} from 'react-redux'
import {makeArticlesSelector} from '@/store/articles/selectors'

interface ISectionTwo {}

const SectionTwo: React.FC<ISectionTwo> = () => {
  const articles = useSelector(makeArticlesSelector)

  const articlesForCard = articles.map(article => ({
    id: article.guid,
    name: article.title,
    text: article.description,
  }))

  const randomArticles = articlesForCard
    .slice(3, articlesForCard.length)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)

  return (
    <S.SectionWrapper>
      <>
        <SectionHeader
          title="Top 10 Reading"
          subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
          link="https://www.google.com"
        />
        {randomArticles.map(article => (
          <Card key={article.id} data={article} type={2} />
        ))}
      </>
    </S.SectionWrapper>
  )
}

SectionTwo.propTypes = {}

SectionTwo.defaultProps = {}

export default SectionTwo
