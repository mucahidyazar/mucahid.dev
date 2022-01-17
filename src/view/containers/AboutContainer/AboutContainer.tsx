import React from 'react'
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

const AboutContainer: NextComponentType = () => {
  const mockData = [
    {
      id: 'getir',
      name: 'Getir',
      image: '/images/introduction-image-2.jpg',
      title: 'Getir',
      subtitles: [
        'Role: Frontend Developer',
        'Location: Istanbul',
        'Date: 2020',
      ],
      text: "Granobra'da çalışırken full time olarak çalıştığım turizm e-ticaret sitesidir. React, Next.js, Redux, Sass gibi teklonojiler kullanarak geliştirdim. Figma, XD ve Zeplin üzerinden gelen tasarımları pixelperfect olarak hayata geçiriyordum. Fakat pandemiden dolayı projeyi tamamlayamadan ayrılmak zorunda kaldım.",
    },
    {
      id: 'maxithings',
      name: 'MaxiThings',
      image: '/images/introduction-image-2.jpg',
      title: 'MaxiThings',
      subtitles: [
        'Role: Frontend Developer',
        'Location: Istanbul',
        'Date: 2020',
      ],
      text: "Granobra'da çalışırken full time olarak çalıştığım turizm e-ticaret sitesidir. React, Next.js, Redux, Sass gibi teklonojiler kullanarak geliştirdim. Figma, XD ve Zeplin üzerinden gelen tasarımları pixelperfect olarak hayata geçiriyordum. Fakat pandemiden dolayı projeyi tamamlayamadan ayrılmak zorunda kaldım.",
    },
  ]
  const quotesMockData = [
    {
      id: 'getir',
      name: 'Getir',
      image: '/images/introduction-image-2.jpg',
      title: 'Getir',
      text: "Granobra'da çalışırken full time olarak çalıştığım turizm e-ticaret sitesidir. React, Next.js, Redux, Sass gibi teklonojiler kullanarak geliştirdim. Figma, XD ve Zeplin üzerinden gelen tasarımları pixelperfect olarak hayata geçiriyordum. Fakat pandemiden dolayı projeyi tamamlayamadan ayrılmak zorunda kaldım.",
    },
    {
      id: 'maxithings',
      name: 'MaxiThings',
      image: '/images/introduction-image-2.jpg',
      title: 'MaxiThings',
      text: "Granobra'da çalışırken full time olarak çalıştığım turizm e-ticaret sitesidir. React, Next.js, Redux, Sass gibi teklonojiler kullanarak geliştirdim. Figma, XD ve Zeplin üzerinden gelen tasarımları pixelperfect olarak hayata geçiriyordum. Fakat pandemiden dolayı projeyi tamamlayamadan ayrılmak zorunda kaldım.",
    },
  ]

  return (
    <>
      <Window>
        <AboutWelcome />
      </Window>
      <Window multi>
        <S.ExperiencesSection>
          <SectionHeader
            title="Experiences"
            subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
          />
          <SectionSlider data={mockData} hasBadge hasArrow />
        </S.ExperiencesSection>
        <S.TechnologiesSection>
          <SectionHeader
            title="Technologies"
            subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
          />
          <S.TechnologiesTags>
            {[
              'Css',
              'Html',
              'Javascript',
              'React',
              'Next.js',
              'Redux',
              'Sass',
              'TypeScript',
            ].map(item => (
              <Badge key={item} cool>
                {item}
              </Badge>
            ))}
          </S.TechnologiesTags>
        </S.TechnologiesSection>
      </Window>

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
