import React from 'react'
import Image from 'next/image'
import type {NextComponentType} from 'next'
import {SectionHeader, SectionSlider, Sections, Section} from '@/components'
import {Card} from '@/ui'

import {useSelector} from 'react-redux'
import {makeInstagramSelector} from '@/store/media'
import {computerData, personalData, funkoPopsData, deskData} from '@/data'

import * as S from './style'

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

      <Sections
        sectionOne={
          <Section
            title="Instagram"
            subtitle="Let me show you what summary of my website is :) Let me show you what summary of my website is :) Click which you want or just wait."
          >
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
          </Section>
        }
        sectionTwo={
          <Section
            title="Twitter"
            subtitle="Let me show you what summary of my website is :) Let me show you what summary of my website is :) Click which you want or just wait."
          >
            <S.TwitterContainer>
              <a
                className="twitter-timeline"
                data-lang="en"
                data-theme="light"
                href="https://twitter.com/MucahidYazar?ref_src=twsrc%5Etfw"
              >
                Tweets by MucahidYazar
              </a>{' '}
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
            </S.TwitterContainer>
          </Section>
        }
      />

      {/* TODO: Links ve Mediadaki bu Badge bloklarini bir component yap  */}
      <SectionHeader
        title="Equipments"
        subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
      />
      <S.StuffContainer>
        <S.StuffTitle>Computer</S.StuffTitle>
        <S.StuffList>
          {computerData.map(item => (
            <Card key={item.id} data={item} type={2}>
              {item.name}
            </Card>
          ))}
        </S.StuffList>
        <S.StuffTitle>Desk</S.StuffTitle>
        <S.StuffList>
          {deskData.map(item => (
            <Card key={item.id} data={item} type={2}>
              {item.name}
            </Card>
          ))}
        </S.StuffList>
        <S.StuffTitle>Funko Pops</S.StuffTitle>
        <S.StuffList>
          {funkoPopsData.map(item => (
            <Card key={item.id} data={item} type={2}>
              {item.name}
            </Card>
          ))}
        </S.StuffList>
        <S.StuffTitle>Personal</S.StuffTitle>
        <S.StuffList>
          {personalData.map(item => (
            <Card key={item.id} data={item} type={2}>
              {item.name}
            </Card>
          ))}
        </S.StuffList>
      </S.StuffContainer>
    </>
  )
}

export default MediaContainer
