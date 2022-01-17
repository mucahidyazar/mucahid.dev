import React from 'react'
import type {NextComponentType} from 'next'
import {
  Introduction,
  SectionHeader,
  Welcome,
  SectionSlider,
} from '@/components/index'
import {Window} from '@/layout/index'
import {Card, PostCard, Input, Textarea, Button, ProjectCard} from '@/ui/index'
import * as S from './style'

const HomeContainer: NextComponentType = () => {
  const mockData = [
    {
      id: 'home-1',
      name: 'About',
      image: '/images/introduction-image-2.jpg',
      title: 'Who am I?',
      text: "Granobra'da çalışırken full time olarak çalıştığım turizm e-ticaret sitesidir. React, Next.js, Redux, Sass gibi teklonojiler kullanarak geliştirdim. Figma, XD ve Zeplin üzerinden gelen tasarımları pixelperfect olarak hayata geçiriyordum. Fakat pandemiden dolayı projeyi tamamlayamadan ayrılmak zorunda kaldım.",
    },
    {
      id: 'home-2',
      name: 'Articles',
      image: '/images/introduction-image-2.jpg',
      title: 'Why am I writing?',
      text: "Granobra'da çalışırken full time olarak çalıştığım turizm e-ticaret sitesidir. React, Next.js, Redux, Sass gibi teklonojiler kullanarak geliştirdim. Figma, XD ve Zeplin üzerinden gelen tasarımları pixelperfect olarak hayata geçiriyordum. Fakat pandemiden dolayı projeyi tamamlayamadan ayrılmak zorunda kaldım.",
    },
    {
      id: 'home-3',
      name: 'Media',
      image: '/images/introduction-image-2.jpg',
      title: 'What do I share?',
      text: "Granobra'da çalışırken full time olarak çalıştığım turizm e-ticaret sitesidir. React, Next.js, Redux, Sass gibi teklonojiler kullanarak geliştirdim. Figma, XD ve Zeplin üzerinden gelen tasarımları pixelperfect olarak hayata geçiriyordum. Fakat pandemiden dolayı projeyi tamamlayamadan ayrılmak zorunda kaldım.",
    },
    {
      id: 'home-4',
      name: 'Contacts',
      image: '/images/introduction-image-2.jpg',
      title: 'How can I contact you?',
      text: "Granobra'da çalışırken full time olarak çalıştığım turizm e-ticaret sitesidir. React, Next.js, Redux, Sass gibi teklonojiler kullanarak geliştirdim. Figma, XD ve Zeplin üzerinden gelen tasarımları pixelperfect olarak hayata geçiriyordum. Fakat pandemiden dolayı projeyi tamamlayamadan ayrılmak zorunda kaldım.",
    },
    {
      id: 'home-5',
      name: 'Links',
      image: '/images/introduction-image-2.jpg',
      title: 'What do I share?',
      text: "Granobra'da çalışırken full time olarak çalıştığım turizm e-ticaret sitesidir. React, Next.js, Redux, Sass gibi teklonojiler kullanarak geliştirdim. Figma, XD ve Zeplin üzerinden gelen tasarımları pixelperfect olarak hayata geçiriyordum. Fakat pandemiden dolayı projeyi tamamlayamadan ayrılmak zorunda kaldım.",
    },
    {
      id: 'home-6',
      name: 'Projects',
      image: '/images/introduction-image-2.jpg',
      title: 'What did I create?',
      text: "Granobra'da çalışırken full time olarak çalıştığım turizm e-ticaret sitesidir. React, Next.js, Redux, Sass gibi teklonojiler kullanarak geliştirdim. Figma, XD ve Zeplin üzerinden gelen tasarımları pixelperfect olarak hayata geçiriyordum. Fakat pandemiden dolayı projeyi tamamlayamadan ayrılmak zorunda kaldım.",
    },
  ]

  return (
    <>
      <Window>
        <Welcome />
      </Window>
      <Window>
        <Introduction rightContent />
      </Window>
      <Window>
        <S.SectionsContainer>
          <S.SectionOneContainer>
            <SectionHeader
              title="Latest Posts"
              subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
              link="/"
            />
            <Card key={1} data={mockData[0]} type={2} />
            <Card key={1} data={mockData[1]} type={2} />
            <Card key={1} data={mockData[0]} type={2} />
          </S.SectionOneContainer>
          <S.SectionTwoContainer>
            <SectionHeader
              title="Top 10 Reading"
              subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
              link="https://www.google.com"
            />
            <Card key={1} data={mockData[0]} type={2} />
            <Card key={1} data={mockData[1]} type={2} />
            <Card key={1} data={mockData[1]} type={2} />
          </S.SectionTwoContainer>
        </S.SectionsContainer>
      </Window>
      <Window>
        <Introduction />
      </Window>
      <S.SummarySection>
        <SectionHeader
          title="Summary"
          subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
        />
        <SectionSlider data={mockData} hasBadge hasArrow />
      </S.SummarySection>
    </>
  )
}

export default HomeContainer
