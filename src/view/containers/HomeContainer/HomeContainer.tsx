import React from 'react'
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
import * as S from './style'

const HomeContainer: NextComponentType = () => {
  const mockData = [
    {
      id: 'home-1',
      name: 'About',
      title: 'Who am I?',
      text: "Granobra'da çalışırken full time olarak çalıştığım turizm e-ticaret sitesidir. React, Next.js, Redux, Sass gibi teklonojiler kullanarak geliştirdim. Figma, XD ve Zeplin üzerinden gelen tasarımları pixelperfect olarak hayata geçiriyordum. Fakat pandemiden dolayı projeyi tamamlayamadan ayrılmak zorunda kaldım.",
    },
    {
      id: 'home-2',
      name: 'Articles',
      title: 'Why am I writing?',
      text: "Granobra'da çalışırken full time olarak çalıştığım turizm e-ticaret sitesidir. React, Next.js, Redux, Sass gibi teklonojiler kullanarak geliştirdim. Figma, XD ve Zeplin üzerinden gelen tasarımları pixelperfect olarak hayata geçiriyordum. Fakat pandemiden dolayı projeyi tamamlayamadan ayrılmak zorunda kaldım.",
    },
    {
      id: 'home-3',
      name: 'Media',
      title: 'What do I share?',
      text: "Granobra'da çalışırken full time olarak çalıştığım turizm e-ticaret sitesidir. React, Next.js, Redux, Sass gibi teklonojiler kullanarak geliştirdim. Figma, XD ve Zeplin üzerinden gelen tasarımları pixelperfect olarak hayata geçiriyordum. Fakat pandemiden dolayı projeyi tamamlayamadan ayrılmak zorunda kaldım.",
    },
    {
      id: 'home-4',
      name: 'Contacts',
      title: 'How can I contact you?',
      text: "Granobra'da çalışırken full time olarak çalıştığım turizm e-ticaret sitesidir. React, Next.js, Redux, Sass gibi teklonojiler kullanarak geliştirdim. Figma, XD ve Zeplin üzerinden gelen tasarımları pixelperfect olarak hayata geçiriyordum. Fakat pandemiden dolayı projeyi tamamlayamadan ayrılmak zorunda kaldım.",
    },
    {
      id: 'home-5',
      name: 'Links',
      title: 'What do I share?',
      text: "Granobra'da çalışırken full time olarak çalıştığım turizm e-ticaret sitesidir. React, Next.js, Redux, Sass gibi teklonojiler kullanarak geliştirdim. Figma, XD ve Zeplin üzerinden gelen tasarımları pixelperfect olarak hayata geçiriyordum. Fakat pandemiden dolayı projeyi tamamlayamadan ayrılmak zorunda kaldım.",
    },
    {
      id: 'home-6',
      name: 'Projects',
      title: 'What did I create?',
      text: "Granobra'da çalışırken full time olarak çalıştığım turizm e-ticaret sitesidir. React, Next.js, Redux, Sass gibi teklonojiler kullanarak geliştirdim. Figma, XD ve Zeplin üzerinden gelen tasarımları pixelperfect olarak hayata geçiriyordum. Fakat pandemiden dolayı projeyi tamamlayamadan ayrılmak zorunda kaldım.",
    },
  ]

  return (
    <>
      <Window>
        <Welcome
          illustration="message"
          title="Hi, I'm Mucahid"
          description="I'm a full-stack developer, and I'm a fan of the web."
        />
      </Window>
      <Window>
        <Introduction rightContent />
      </Window>
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
      <Window>
        <Introduction />
      </Window>
      <Window>
        <S.SummarySection>
          <SectionHeader
            title="Contents"
            subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
          />
          <SectionSlider data={mockData} hasBadge hasArrow />
        </S.SummarySection>
      </Window>
    </>
  )
}

export default HomeContainer
