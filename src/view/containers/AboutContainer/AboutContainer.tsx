import React from 'react'
import type {NextComponentType} from 'next'
import {useTranslation} from 'next-i18next'

import {AboutWelcome, SectionHeader, SectionSlider} from '@/components'
import {Badge, ProjectCard} from '@/ui'
import {companies, projects, technologies} from '@/data'

import * as S from './style'

const AboutContainer: NextComponentType = () => {
  const {t} = useTranslation()

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
      <AboutWelcome />
      <S.ExperiencesSection>
        <SectionHeader
          title={t('experiences')}
          subtitle={t('experiencesSectionDescription')}
        />
        <SectionSlider data={companies} hasBadge hasArrow />
      </S.ExperiencesSection>

      <S.TechnologiesSection>
        <SectionHeader
          title={t('technologies')}
          subtitle={t('technologiesSectionDescription')}
        />
        <S.TechnologiesTags>
          {technologies.map(item => (
            <Badge key={item}>{item}</Badge>
          ))}
        </S.TechnologiesTags>
      </S.TechnologiesSection>

      <S.ProjectCardsSection>
        <SectionHeader
          title={t('projects')}
          subtitle={t('projectsSectionDescription')}
          link="/projects"
        />
        <S.ProjectCards>
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </S.ProjectCards>
      </S.ProjectCardsSection>

      <S.QuotesSection>
        <SectionHeader
          title={t('quotes')}
          subtitle={t('quotesSectionDescription')}
        />
        <SectionSlider data={quotesMockData} hasArrow type={2} />
      </S.QuotesSection>
    </>
  )
}

export default AboutContainer
