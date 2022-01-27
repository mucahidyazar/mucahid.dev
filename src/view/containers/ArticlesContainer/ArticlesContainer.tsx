import React, {useEffect, useState} from 'react'
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
import {useDispatch, useSelector} from 'react-redux'
import {
  makeArticlesSelector,
  makeSelectCategories,
  makeSelectFilters,
  makeSelectYears,
} from '@/store/articles/selectors'
import {useRouter} from 'next/router'
import {setFilter} from '@/store/articles'

const ArticlesContainer: NextComponentType = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [pagination, setPagination] = useState(6)
  const articles = useSelector(makeArticlesSelector)
  const categories = useSelector(makeSelectCategories)
  const years = useSelector(makeSelectYears)
  const filters = useSelector(makeSelectFilters)

  const handleFilter = (key, value) => {
    const query = {...router.query}

    if (query[key] && !query[key]?.includes(value)) {
      query[key] = [query[key], value]
    } else if (query[key]?.includes(value)) {
      if (typeof query[key] === 'string') {
        delete query[key]
      } else {
        query[key] = query[key]?.filter(item => item !== value)
      }
    } else {
      query[key] = [value]
    }

    router.push({
      pathname: '/articles',
      query,
    })
  }

  useEffect(() => {
    dispatch(setFilter(router.query))
  }, [dispatch, router.query])

  return (
    <>
      <S.FiltersSection>
        <S.FilterByLabel>Search article by topic</S.FilterByLabel>
        <S.FiltersTags>
          {categories?.map(item => (
            <Badge
              key={item}
              onClick={() => handleFilter('category', item)}
              isActive={filters?.category?.includes(item)}
            >
              {item}
            </Badge>
          ))}
        </S.FiltersTags>
        <S.FilterByLabel>Search article by topic</S.FilterByLabel>
        <S.FiltersTags>
          {years.map(item => (
            <Badge
              key={item}
              onClick={() => handleFilter('year', item)}
              isActive={filters?.year?.includes(item)}
            >
              {item}
            </Badge>
          ))}
        </S.FiltersTags>
      </S.FiltersSection>

      <S.ArticlesSection>
        {articles.map((article, index) => {
          if (index < pagination) {
            return (
              <PostCard
                key={article.guid}
                title={article.title}
                subtitle={article.description}
                date={article.pubDate}
                tags={article.categories}
                link={`/article/${article.link.replace(
                  'https://mucahidyazar.medium.com/',
                  '',
                )}`}
                imageUrl={article.thumbnail}
              />
            )
          }
        })}
      </S.ArticlesSection>
      {pagination < articles.length && (
        <Button outline onClick={() => setPagination(prev => prev + 6)}>
          Load more
        </Button>
      )}
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
