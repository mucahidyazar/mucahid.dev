import React, {useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type {NextComponentType} from 'next'
import {
  Introduction,
  SectionHeader,
  Welcome,
  SectionSlider,
  Sections,
} from '@/components/index'
import {Window} from '@/layout/index'
import {Card, PostCard, Input, Textarea, Button, ProjectCard} from '@/ui/index'
import {articles, computerMockData, contributions} from '@/data'
import * as S from './style'
import {useDispatch, useSelector} from 'react-redux'
import {getStarreds} from '@/store/articles'
import {makeSelectStarreds} from '@/store/articles/selectors'
import {SectionCard} from './SectionCard'
import {SectionOne, SectionTwo} from './Sections'

const ProjectsContainer: NextComponentType = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStarreds())
  }, [])

  return (
    <>
      <Sections SectionOne={SectionOne} SectionTwo={SectionTwo} />

      <S.ExperiencesSection>
        <SectionHeader
          title="Experiences"
          subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
        />

        <SectionSlider data={computerMockData} hasArrow type={2} />
      </S.ExperiencesSection>

      <S.WorkshopsSection>
        <SectionHeader
          title="Workshops"
          subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
        />

        <S.WorkshopsList>
          {articles.map((item, index) => {
            if (index < 6) {
              return (
                <Link key={item.id} href={`/article/${item.slug}`} passHref>
                  <PostCard
                    title={item.title}
                    subtitle={item.description}
                    date={item.date}
                    tags={item.tags}
                    imageUrl={item.image}
                    link="https://www.google.com"
                  />
                </Link>
              )
            }
          })}
        </S.WorkshopsList>
        <Button outline>Load more</Button>
      </S.WorkshopsSection>
    </>
  )
}

export default ProjectsContainer
