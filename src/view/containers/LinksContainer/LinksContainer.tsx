import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {Icon} from '@/ui'
import {socialMedias} from '@/data'
import {dataTestTarget} from '@/utilities'

import * as S from './style'

const LinksContainer: React.FC = () => {
  const buttons = socialMedias.filter(({type}) => type === 'button')
  const icons = socialMedias.filter(({type}) => type === 'icon')

  return (
    <S.LinksSection>
      <S.ImageWrapperLayout {...dataTestTarget('links-image')}>
        <S.ImageWrapper>
          <Image
            src="/images/profile.jpg"
            alt="Project Source Image"
            layout="fill"
          />
        </S.ImageWrapper>
      </S.ImageWrapperLayout>
      <S.Username {...dataTestTarget('links-profile-name')}>
        @mucahidyazar
      </S.Username>

      <S.LinkCardsWrapper>
        <Link href="/" passHref {...dataTestTarget('links-button-home')}>
          <S.LinkCard backgroundColor="brown">
            <Icon name="home" />
            <S.LinkCardTitle>My Blog</S.LinkCardTitle>
          </S.LinkCard>
        </Link>
        {buttons.map(({id, icon, name, url, color}) => (
          <S.LinkCard
            key={id}
            href={url}
            backgroundColor={color}
            target="_blank"
            {...dataTestTarget(`links-button-${id}`)}
          >
            <Icon name={icon} />
            <S.LinkCardTitle>{name}</S.LinkCardTitle>
          </S.LinkCard>
        ))}
      </S.LinkCardsWrapper>

      <S.SocialIconsWrapper>
        {icons.map(({id, icon, url}) => (
          <S.IconLink
            key={id}
            href={url}
            target="_blank"
            {...dataTestTarget(`links-icon-${id}`)}
          >
            <Icon name={icon} />
          </S.IconLink>
        ))}
      </S.SocialIconsWrapper>
    </S.LinksSection>
  )
}

export default LinksContainer
