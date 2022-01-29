import React from 'react'
import type {NextComponentType} from 'next'
import {Introduction, Sections, Section} from '@/components/index'
import {Card} from '@/ui/index'
import {useSelector} from 'react-redux'
import {makeArticlesSelector} from '@/store/articles/selectors'

const HomeContainer: NextComponentType = () => {
  const articles = useSelector(makeArticlesSelector)
  const articlesForCard = articles.map(article => ({
    id: article.guid,
    name: article.title,
    text: article.description,
  }))
  const latestArticles = articlesForCard.slice(0, 3)
  const randomArticles = articlesForCard
    .slice(3, articlesForCard.length)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)

  return (
    <>
      <Introduction rightContent />
      <Sections
        sectionOne={
          <Section
            title="Latest Posts"
            subtitle="These are the latest posts from my website."
            link="/articles"
            children={latestArticles.map(article => (
              <Card key={article.id} data={article} type={2} />
            ))}
          />
        }
        sectionTwo={
          <Section
            title="Top 10 Reading"
            subtitle="Let's see the most read posts from my website."
            link="/articles"
            children={randomArticles.map(article => (
              <Card key={article.id} data={article} type={2} />
            ))}
          />
        }
      />
    </>
  )
}

export default HomeContainer
