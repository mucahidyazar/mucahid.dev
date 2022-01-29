import React, {useEffect} from 'react'
import Link from 'next/link'
import type {NextComponentType} from 'next'
import {SectionHeader, SectionSlider, Sections, Section} from '@/components'
import {PostCard, Button} from '@/ui'
import {contributions, workshops} from '@/data'
import * as S from './style'
import {useDispatch, useSelector} from 'react-redux'
import {SectionCard} from './SectionCard'
import {
  getApis,
  getStarreds,
  makeSelectApis,
  makeSelectStarreds,
} from '@/store/projects'

const ProjectsContainer: NextComponentType = () => {
  const dispatch = useDispatch()
  const starreds = useSelector(makeSelectStarreds)
  const apis = useSelector(makeSelectApis)

  useEffect(() => {
    dispatch(getStarreds())
    dispatch(getApis())
  }, [dispatch])

  return (
    <>
      <Sections
        sectionOne={
          <Section
            title="Contributions, Open-sources"
            subtitle="These are my projects that I have contributed and created."
            link="https://www.github.com/mucahidyazar"
          >
            <S.SectionCards>
              {contributions.map(contribution => (
                <SectionCard key={contribution.id} {...contribution} />
              ))}
            </S.SectionCards>
          </Section>
        }
        sectionTwo={
          <Section
            title="Favorite repositories"
            subtitle="Some of my favorite repositories on github."
            link="https://www.github.com/mucahidyazar"
          >
            <S.SectionCards>
              {starreds.map(contribution => (
                <SectionCard
                  key={contribution.id}
                  title={contribution.name}
                  description={contribution.description}
                  url={contribution.html_url}
                />
              ))}
            </S.SectionCards>
          </Section>
        }
      />

      <S.ExperiencesSection>
        <SectionHeader title="Random APIs" subtitle="" />

        <SectionSlider data={apis} hasArrow type={2} />
      </S.ExperiencesSection>

      <S.WorkshopsSection>
        <SectionHeader
          title="Workshops"
          subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
        />

        <S.WorkshopsList>
          {workshops.map((item, index) => {
            if (index < 6) {
              return (
                <Link key={item.id} href={`/article/${item.slug}`} passHref>
                  <PostCard
                    title={item.title}
                    subtitle={item.description}
                    tags={item.technologies}
                    imageUrl={item.image}
                    link="https://www.google.com"
                    links={item.links}
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
