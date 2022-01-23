import React from 'react'
import type {NextComponentType} from 'next'
import Image from 'next/image'
import {
  Introduction,
  SectionHeader,
  Welcome,
  SectionSlider,
  SubscribeBanner,
} from '@/components/index'
import {Window} from '@/layout/index'
import {
  Card,
  Icon,
  PostCard,
  Input,
  Textarea,
  Button,
  ProjectCard,
} from '@/ui/index'
import * as S from './style'
import {socialMedias} from '@/data'

const ContactContainer: NextComponentType = () => {
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
        <Welcome />
      </Window>
      <S.ConnectionsContainer>
        {socialMedias.map(({id, name, icon, url, color}) => (
          <S.ConnectionIcon key={id} backgroundColor={color}>
            <Icon name={icon} size={24} />
          </S.ConnectionIcon>
        ))}
      </S.ConnectionsContainer>
      <S.ConnectMetamaskButtonContainer>
        <S.ConnectMetamaskButton>
          <Image
            src="/svgs/metamask-icon.svg"
            alt="metamask-icon"
            width={60}
            height={60}
          />
          <S.ConnectMetamaskButtonText>
            Connect Metamask
          </S.ConnectMetamaskButtonText>
        </S.ConnectMetamaskButton>
      </S.ConnectMetamaskButtonContainer>
      <S.SectionsContainer>
        <S.SectionOneContainer>
          <SectionHeader
            title="Messages"
            subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
            link="/"
          />
          <S.MessagesContainer>
            <Card key={1} data={mockData[0]} type={2} />
            <Card key={1} data={mockData[1]} type={2} />
            <Card key={1} data={mockData[0]} type={2} />
            <Card key={1} data={mockData[0]} type={2} />
            <Card key={1} data={mockData[0]} type={2} />
            <Card key={1} data={mockData[0]} type={2} />
            <Card key={1} data={mockData[0]} type={2} />
          </S.MessagesContainer>
        </S.SectionOneContainer>
        <S.SectionTwoContainer>
          <SectionHeader
            title="Board"
            subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
            link="https://www.google.com"
          />
          <S.BoardContainer>
            <S.BoardItem></S.BoardItem>
            <S.BoardItem></S.BoardItem>
            <S.BoardItem></S.BoardItem>
            <S.BoardItem></S.BoardItem>
            <S.BoardItem></S.BoardItem>
            <S.BoardItem></S.BoardItem>
            <S.BoardItem></S.BoardItem>
            <S.BoardItem></S.BoardItem>
            <S.BoardItem></S.BoardItem>
            <S.BoardItem></S.BoardItem>
          </S.BoardContainer>
        </S.SectionTwoContainer>
      </S.SectionsContainer>
      <S.ContactFormContainer>
        <S.ContactForm>
          <S.ContactFormInput placeholder="Type" />
          <S.ContactFormInput placeholder="0.00000 ether" />
          <S.ContactFormTextarea placeholder="Message" />
          <S.ContactFormButton>Send</S.ContactFormButton>
        </S.ContactForm>
      </S.ContactFormContainer>
    </>
  )
}

export default ContactContainer
