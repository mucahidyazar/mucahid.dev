import React from 'react'
import type {NextComponentType} from 'next'
import Link from 'next/link'

import {socialLinks} from '@/data'
import {Icon} from '@/ui'

import * as S from './style'

const Footer: NextComponentType = () => {
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
        <S.FooterInfoDescription>
          I am a Fronend developer. I am working by this profession for almost 3
          years. And I love design and coding. In my spare time, I play video
          games, spends time with my family, and I love to trekking. And lastly
          'Love Javascript guys!' and Let's study more!
        </S.FooterInfoDescription>
        <S.FooterSubscribe>
          <S.FooterSubscribeInput placeholder="your@email.com" />
          <S.FooterSubscribeButton>Subscribe</S.FooterSubscribeButton>
        </S.FooterSubscribe>
      </S.FooterInfo>

      <S.FooterMenu>
        <S.FooterMenuGroup>
          <S.FooterMenuHeader>Info</S.FooterMenuHeader>
          <S.FooterMenuItem>
            <Link href="/">Updates</Link>
          </S.FooterMenuItem>
          <S.FooterMenuItem>
            <Link href="/">Sitemap.xml</Link>
          </S.FooterMenuItem>
          <S.FooterMenuItem>
            <Link href="/">RSS.xml</Link>
          </S.FooterMenuItem>
          <S.FooterMenuItem>
            <Link href="/contact">Email ME</Link>
          </S.FooterMenuItem>
        </S.FooterMenuGroup>
        <S.FooterMenuGroup>
          <S.FooterMenuHeader>Pages</S.FooterMenuHeader>
          <S.FooterMenuItem>
            <Link href="/">Home</Link>
          </S.FooterMenuItem>
          <S.FooterMenuItem>
            <Link href="/about">About</Link>
          </S.FooterMenuItem>
          <S.FooterMenuItem>
            <Link href="/blog">Blog</Link>
          </S.FooterMenuItem>
          <S.FooterMenuItem>
            <Link href="/media">Media</Link>
          </S.FooterMenuItem>
          <S.FooterMenuItem>
            <Link href="/contact">Contact</Link>
          </S.FooterMenuItem>
          <S.FooterMenuItem>
            <Link href="/projects">Projects</Link>
          </S.FooterMenuItem>
          <S.FooterMenuItem>
            <Link href="/links">Links</Link>
          </S.FooterMenuItem>
        </S.FooterMenuGroup>
      </S.FooterMenu>
    </S.Footer>
  )
}

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
