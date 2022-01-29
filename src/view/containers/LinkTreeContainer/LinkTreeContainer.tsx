import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type {NextComponentType} from 'next'

import {Icon} from '@/ui'
import {socialMedias} from '@/data'

import * as S from './style'

const LinkTreeContainer: NextComponentType = () => {
  const buttons = socialMedias.filter(({type}) => type === 'button')
  const icons = socialMedias.filter(({type}) => type === 'icon')

  return (
    <S.LinkTreeSection>
      <S.ImageWrapperLayout>
        <S.ImageWrapper>
          <Image
            src="/images/profile.jpg"
            alt="Project Source Image"
            layout="fill"
          />
        </S.ImageWrapper>
      </S.ImageWrapperLayout>
      <S.Username>@mucahidyazar</S.Username>

      <S.LinkCardsWrapper>
        <Link href="/" passHref>
          <S.LinkCard backgroundColor="brown">
            <Icon name="home" />
            <S.LinkCardTitle>My Blog</S.LinkCardTitle>
          </S.LinkCard>
        </Link>
        {buttons.map(({id, icon, name, link, color}) => (
          <S.LinkCard
            key={id}
            href={link}
            backgroundColor={color}
            target="_blank"
          >
            <Icon name={icon} />
            <S.LinkCardTitle>{name}</S.LinkCardTitle>
          </S.LinkCard>
        ))}
      </S.LinkCardsWrapper>

      <S.SocialIconsWrapper>
        {icons.map(({id, icon, link}) => (
          <S.IconLink key={id} href={link} target="_blank">
            <Icon name={icon} />
          </S.IconLink>
        ))}
      </S.SocialIconsWrapper>
    </S.LinkTreeSection>
  )
}

export default LinkTreeContainer
