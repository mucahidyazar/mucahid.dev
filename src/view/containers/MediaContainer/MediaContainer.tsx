import React, {useEffect} from 'react'
import Image from 'next/image'
import type {NextComponentType} from 'next'
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
  PostCard,
  Input,
  Textarea,
  Button,
  ProjectCard,
  Badge,
} from '@/ui/index'
import * as S from './style'
import {useSelector} from 'react-redux'
import {makeInstagramSelector} from '@/store/articles/selectors'
import {computerData, personalData, funkoPopsData, deskData} from '@/data'

const MediaContainer: NextComponentType = () => {
  const instagramPhotos = useSelector(makeInstagramSelector)
  const firstSixPhotos = instagramPhotos?.slice(0, 6)
  const randomDatas = [
    ...computerData,
    ...personalData,
    ...funkoPopsData,
    ...deskData,
  ].sort(() => Math.random() - 0.5)

  return (
    <>
      <S.SummarySection>
        <SectionHeader
          title="Random Stuffs"
          subtitle="Let me show you my random stuffs :) Click which you want to buy or just watch."
        />
        <SectionSlider data={randomDatas} hasArrow type={2} />
      </S.SummarySection>

      <S.SectionsContainer>
        <S.SectionOneContainer>
          <SectionHeader
            title="Instagram"
            subtitle="Let me show you what summary of my website is :) Let me show you what summary of my website is :) Click which you want or just wait."
            link="/"
          />
          <S.InstagramContainer>
            {firstSixPhotos.map(item => (
              <S.InstagramImage key={item}>
                <Image
                  src={item}
                  alt="instagram-image"
                  layout="fill"
                  objectFit="cover"
                />
              </S.InstagramImage>
            ))}
          </S.InstagramContainer>
        </S.SectionOneContainer>
        <S.SectionTwoContainer>
          <SectionHeader
            title="Twitter"
            subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
            link="https://www.google.com"
          />
          <S.TwitterContainer></S.TwitterContainer>
        </S.SectionTwoContainer>
      </S.SectionsContainer>

      {/* TODO: Links ve Mediadaki bu Badge bloklarini bir component yap  */}
      <SectionHeader
        title="Equipments"
        subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
      />
      <S.StuffContainer>
        <S.StuffTitle>Computer</S.StuffTitle>
        <S.StuffList>
          {computerData.map(item => (
            <Card key={item.id + 'computer'} data={item} type={2}>
              {item.name}
            </Card>
          ))}
        </S.StuffList>
        <S.StuffTitle>Desk</S.StuffTitle>
        <S.StuffList>
          {deskData.map(item => (
            <Card key={item.id + 'desk'} data={item} type={2}>
              {item.name}
            </Card>
          ))}
        </S.StuffList>
        <S.StuffTitle>Funko Pops</S.StuffTitle>
        <S.StuffList>
          {funkoPopsData.map(item => (
            <Card key={item.id + 'funko'} data={item} type={2}>
              {item.name}
            </Card>
          ))}
        </S.StuffList>
        <S.StuffTitle>Personal</S.StuffTitle>
        <S.StuffList>
          {personalData.map(item => (
            <Card key={item.id + 'personal'} data={item} type={2}>
              {item.name}
            </Card>
          ))}
        </S.StuffList>
      </S.StuffContainer>
    </>
  )
}

export default MediaContainer
