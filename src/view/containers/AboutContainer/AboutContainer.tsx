import React from 'react'
import type {NextComponentType} from 'next'

import {SectionHeader, SectionSlider} from '@/components'
import {Badge, ProjectCard} from '@/ui'
import {companies, projects, technologies} from '@/data'

import * as S from './style'

const AboutContainer: NextComponentType = () => {
  const quotesMockData = [
    {
      id: '0',
      name: 'Getir',
      image: '/images/introduction-image-2.jpg',
      title: 'Getir',
      text: "Granobra'da çalışırken full time olarak çalıştığım turizm e-ticaret sitesidir. React, Next.js, Redux, Sass gibi teklonojiler kullanarak geliştirdim. Figma, XD ve Zeplin üzerinden gelen tasarımları pixelperfect olarak hayata geçiriyordum. Fakat pandemiden dolayı projeyi tamamlayamadan ayrılmak zorunda kaldım.",
    },
    {
      id: '1',
      name: 'MaxiThings',
      image: '/images/introduction-image-2.jpg',
      title: 'MaxiThings',
      text: "Granobra'da çalışırken full time olarak çalıştığım turizm e-ticaret sitesidir. React, Next.js, Redux, Sass gibi teklonojiler kullanarak geliştirdim. Figma, XD ve Zeplin üzerinden gelen tasarımları pixelperfect olarak hayata geçiriyordum. Fakat pandemiden dolayı projeyi tamamlayamadan ayrılmak zorunda kaldım.",
    },
  ]

  return (
    <>
      <S.ExperiencesSection>
        <SectionHeader
          title="Experiences"
          subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
        />
        <SectionSlider data={companies} hasBadge hasArrow />
      </S.ExperiencesSection>

      <S.TechnologiesSection>
        <SectionHeader
          title="Technologies"
          subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
        />
        <S.TechnologiesTags>
          {technologies.map(item => (
            <Badge key={item}>{item}</Badge>
          ))}
        </S.TechnologiesTags>
      </S.TechnologiesSection>

      <S.ProjectCardsSection>
        <SectionHeader
          title="Projects"
          subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
          link="https://www.google.com"
        />
        <S.ProjectCards>
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </S.ProjectCards>
      </S.ProjectCardsSection>

      <S.QuotesSection>
        <SectionHeader
          title="Quotes"
          subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
        />
        <SectionSlider data={quotesMockData} hasArrow type={2} />
      </S.QuotesSection>
    </>
  )
}

export default AboutContainer
