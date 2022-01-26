import React from 'react'
import {SectionHeader} from '@/components/index'
import * as S from './style'
import {Card} from '@/ui/index'
import {useSelector} from 'react-redux'
import {makeArticlesSelector} from '@/store/articles/selectors'

interface ISectionOne {}

const SectionOne: React.FC<ISectionOne> = () => {
  const articles = useSelector(makeArticlesSelector)

  const articlesForCard = articles.map(article => ({
    id: article.guid,
    name: article.title,
    text: article.description,
  }))
  const latestArticles = articlesForCard.slice(0, 3)

  return (
    <S.SectionWrapper>
      <SectionHeader
        title="Latest Posts"
        subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
        link="/"
      />
      {latestArticles.map(article => (
        <Card key={article.id} data={article} type={2} />
      ))}
    </S.SectionWrapper>
  )
}

SectionOne.propTypes = {}

SectionOne.defaultProps = {}

export default SectionOne
