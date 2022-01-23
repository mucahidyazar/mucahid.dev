import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type {NextComponentType} from 'next'
import {
  Introduction,
  SectionHeader,
  Welcome,
  SectionSlider,
  SubscribeBanner,
} from '@/components/index'
import {Window} from '@/layout/index'
import {Card, PostCard, Input, Textarea, Button, ProjectCard} from '@/ui/index'
import {computerMockData} from '@/data'
import * as S from './style'
import {articles} from '@/data'

const ProjectsContainer: NextComponentType = () => {
  const SectionCard = ({image, title, description}) => {
    return (
      <S.SectionCard>
        <S.SectionCardImage>
          <Image
            src="/images/github-icon.png"
            alt="Project Source Image"
            layout="fill"
          />
        </S.SectionCardImage>
        <S.SectionCardContent>
          <S.SectionCardTitle level={6}>lodash</S.SectionCardTitle>
          <S.SectionCardSubtitle>
            lodas is the best library on the npm and github
          </S.SectionCardSubtitle>
        </S.SectionCardContent>
      </S.SectionCard>
    )
  }
  return (
    <>
      <Window>
        <Welcome />
      </Window>
      <S.SectionsContainer>
        <S.SectionOneContainer>
          <SectionHeader
            title="Contributions"
            subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
            link="/"
          />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
        </S.SectionOneContainer>
        <S.SectionTwoContainer>
          <SectionHeader
            title="Repositories"
            subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
            link="https://www.google.com"
          />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
        </S.SectionTwoContainer>
      </S.SectionsContainer>

      <S.ProjectCardsSection>
        <SectionHeader
          title="Repositories"
          subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
          link="https://www.google.com"
        />
        <S.ProjectCards>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </S.ProjectCards>
      </S.ProjectCardsSection>

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
