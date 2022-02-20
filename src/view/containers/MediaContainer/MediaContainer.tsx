import React from 'react'
import Image from 'next/image'
import type {NextComponentType} from 'next'
import {useSelector} from 'react-redux'
import Script from 'next/script'
import {useTranslation} from 'next-i18next'

import {SectionHeader, SectionSlider, Sections, Section} from '@/components'
import {Card} from '@/ui'
import {makeInstagramSelector} from '@/store/media'
import {computerData, personalData, funkoPopsData, deskData} from '@/data'

import * as S from './style'

const MediaContainer: NextComponentType = () => {
  const {t} = useTranslation()
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
          title={t('randomStuffsSectionTitle')}
          subtitle={t('randomStuffsSectionDescription')}
        />
        <SectionSlider data={randomDatas} hasArrow type={2} />
      </S.SummarySection>

      <Sections
        sectionOne={
          <Section
            title={t('instagramFeedSectionTitle')}
            subtitle={t('instagramFeedSectionDescription')}
          >
            <S.InstagramContainer>
              {firstSixPhotos?.map((item: string) => (
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
            title={t('twitterFeedSectionTitle')}
            subtitle={t('twitterFeedSectionDescription')}
          >
            <S.TwitterContainer>
              <a
                className="twitter-timeline"
                data-lang="en"
                data-theme="light"
                href="https://twitter.com/MucahidYazar?ref_src=twsrc%5Etfw"
              >
                Tweets by MucahidYazar
              </a>
              <Script src="https://platform.twitter.com/widgets.js" />
            </S.TwitterContainer>
          </Section>
        }
      />

      {/* TODO: Links ve Mediadaki bu Badge bloklarini bir component yap  */}
      <SectionHeader
        title={t('equipmentsSectionTitle')}
        subtitle={t('equipmentsSectionDescription')}
      />
      <S.StuffContainer>
        <S.StuffTitle>{t('computer')}</S.StuffTitle>
        <S.StuffList>
          {computerData.map(item => (
            <Card key={item.id} data={item} type={2} />
          ))}
        </S.StuffList>
        <S.StuffTitle>{t('desk')}</S.StuffTitle>
        <S.StuffList>
          {deskData.map(item => (
            <Card key={item.id} data={item} type={2}>
              {item.name}
            </Card>
          ))}
        </S.StuffList>
        <S.StuffTitle>{t('funkoPops')}</S.StuffTitle>
        <S.StuffList>
          {funkoPopsData.map(item => (
            <Card key={item.id} data={item} type={2} />
          ))}
        </S.StuffList>
        <S.StuffTitle>{t('personal')}</S.StuffTitle>
        <S.StuffList>
          {personalData.map(item => (
            <Card key={item.id} data={item} type={2} />
          ))}
        </S.StuffList>
      </S.StuffContainer>
    </>
  )
}

export default MediaContainer
