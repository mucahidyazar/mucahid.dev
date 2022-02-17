import {ParsedUrlQuery} from 'querystring'

import React, {useEffect, useState} from 'react'
import type {NextComponentType} from 'next'
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'
import {motion} from 'framer-motion'

import {Badge, PostCard, Button} from '@/ui'
import {
  makeArticlesSelector,
  makeSelectCategories,
  makeSelectFilters,
  makeSelectYears,
} from '@/store/blog/selectors'
import {setFilter} from '@/store/blog'

import * as S from './style'

const BlogContainer: NextComponentType = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [pagination, setPagination] = useState(6)
  const articles = useSelector(makeArticlesSelector)
  const categories = useSelector(makeSelectCategories)
  const years = useSelector(makeSelectYears)
  const filters = useSelector(makeSelectFilters)

  const handleFilter = (key: string, value: string) => {
    const query: ParsedUrlQuery = {...router.query}

    if (query[key] && !query[key]?.includes(value)) {
      query[key] = [query[key] as string, value]
    } else if (query[key]?.includes(value)) {
      if (typeof query[key] === 'string') {
        delete query[key]
      } else {
        query[key] = (query[key] as string[]).filter(item => item !== value)
      }
    } else {
      query[key] = [value]
    }

    router.push({
      pathname: '/blog',
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
              <motion.div
                key={article.guid}
                initial={{opacity: 0}}
                whileInView={{
                  opacity: 1,
                  transition: {delay: 0.5 * (index % 6)},
                }}
                viewport={{once: false}}
              >
                <PostCard
                  title={article.title}
                  subtitle={article.description}
                  date={article.pubDate}
                  tags={article.categories}
                  // article.guid = https://medium.com/p/e2d129b93d4c
                  link={`/blog/${article.slug}`}
                  imageUrl={article.thumbnail}
                />
              </motion.div>
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

export default BlogContainer
