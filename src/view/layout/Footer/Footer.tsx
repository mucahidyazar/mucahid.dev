import React from 'react'
import type {NextComponentType} from 'next'
import Link from 'next/link'
import {useTranslation} from 'next-i18next'

import {socialLinks} from '@/data'
import {TFooterMenu} from '@/types'
import {Icon} from '@/ui'

import * as S from './style'

const Footer: NextComponentType = () => {
  const {t} = useTranslation('common')
  const footerMenu = t('footerMenu', {returnObjects: true}) as TFooterMenu[]

  return (
    <S.Footer>
      <S.FooterInfo>
        <S.FooterInfoTitle>Mucahid YAZAR</S.FooterInfoTitle>
        <S.FooterInfoSubtitle>
          Javascript Enthutatist, React Lover, Gamer
        </S.FooterInfoSubtitle>
        <S.SocialLinks>
          {socialLinks.map(socialLink => (
            <S.SocialLink key={socialLink.id}>
              <Icon name={socialLink.icon} size={20} />
            </S.SocialLink>
          ))}
        </S.SocialLinks>
        <S.FooterInfoDescription>{t('aboutMeShort')}</S.FooterInfoDescription>
        <S.FooterSubscribe>
          <S.FooterSubscribeInput placeholder="your@email.com" />
          <S.FooterSubscribeButton>Subscribe</S.FooterSubscribeButton>
        </S.FooterSubscribe>
      </S.FooterInfo>

      <S.FooterMenu>
        {footerMenu.map((footerMenu: TFooterMenu) => (
          <S.FooterMenuGroup key={footerMenu.id}>
            <S.FooterMenuHeader>{footerMenu.title}</S.FooterMenuHeader>
            {footerMenu.items.map(footerMenuItem => (
              <S.FooterMenuItem key={footerMenuItem.id}>
                <Link href={footerMenuItem.url}>{footerMenuItem.title}</Link>
              </S.FooterMenuItem>
            ))}
          </S.FooterMenuGroup>
        ))}
      </S.FooterMenu>
    </S.Footer>
  )
}

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
