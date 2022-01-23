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

const LinkTreeContainer: NextComponentType = () => {
  return (
    <S.LinkTreeSection>
      <S.ImageWrapperLayout>
        <S.ImageWrapper>
          <Image
            src="/images/introduction-image-2.jpg"
            alt="Project Source Image"
            layout="fill"
          />
        </S.ImageWrapper>
      </S.ImageWrapperLayout>
      <S.Username>@mucahidyazar</S.Username>

      <S.LinkCardsWrapper>
        <S.LinkCard>
          <S.LinkCardImage>
            <Image
              src="/images/github-icon.png"
              alt="Project Source Image"
              layout="fill"
            />
          </S.LinkCardImage>
          <S.LinkCardTitle>Steam</S.LinkCardTitle>
        </S.LinkCard>
        <S.LinkCard>
          <S.LinkCardImage>
            <Image
              src="/images/github-icon.png"
              alt="Project Source Image"
              layout="fill"
            />
          </S.LinkCardImage>
          <S.LinkCardTitle>Steam</S.LinkCardTitle>
        </S.LinkCard>
      </S.LinkCardsWrapper>

      <S.SocialIconsWrapper>
        <Image
          src="/svgs/codepen-icon.svg"
          alt="Project Source Image"
          width={24}
          height={24}
        />
        <Image
          src="/svgs/instagram-icon.svg"
          alt="Project Source Image"
          width={24}
          height={24}
        />
        <Image
          src="/svgs/codepen-icon.svg"
          alt="Project Source Image"
          width={24}
          height={24}
        />
        <Image
          src="/svgs/instagram-icon.svg"
          alt="Project Source Image"
          width={24}
          height={24}
        />
      </S.SocialIconsWrapper>
    </S.LinkTreeSection>
  )
}

export default LinkTreeContainer
