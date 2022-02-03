import React, {useEffect, useState} from 'react'
import type {NextComponentType} from 'next'
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'

import {Badge, PostCard, Button} from '@/ui'
import {
  makeArticlesSelector,
  makeSelectCategories,
  makeSelectFilters,
  makeSelectYears,
} from '@/store/articles/selectors'
import {setFilter} from '@/store/articles'

import * as S from './style'

const ArticlesContainer: NextComponentType = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [pagination, setPagination] = useState(6)
  const articles = useSelector(makeArticlesSelector)
  const categories = useSelector(makeSelectCategories)
  const years = useSelector(makeSelectYears)
  const filters = useSelector(makeSelectFilters)

  const handleFilter = (key: string, value: string) => {
    const query: any = {...router.query}

    if (query[key] && !query[key]?.includes(value)) {
      query[key] = [query[key], value]
    } else if (query[key]?.includes(value)) {
      if (typeof query[key] === 'string') {
        delete query[key]
      } else {
        query[key] = query[key]?.filter((item: any) => item !== value)
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
          {categories?.map((item: any) => (
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
          {years.map((item: any) => (
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
        {articles.map((article: any, index: any) => {
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
