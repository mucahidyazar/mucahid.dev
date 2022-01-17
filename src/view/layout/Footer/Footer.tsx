import React from 'react'
import type {NextComponentType} from 'next'
import * as S from './style'
import Link from 'next/link'

const Footer: NextComponentType = () => {
  return (
    <S.Footer>
      <S.FooterInfo>
        <S.FooterInfoTitle>Mucahid YAZAR</S.FooterInfoTitle>
        <S.FooterInfoSubtitle>
          Javascript Enthutatist, React Lover, Gamer
        </S.FooterInfoSubtitle>
        <S.FooterInfoDescription>
          I am a Fronend developer. I am working by this profession for 2 years.
          And I love design and coding. My point is being a good full stack
          developer by Javascript. So let's study more.
        </S.FooterInfoDescription>
      </S.FooterInfo>

      <S.FooterMenu>
        <S.FooterMenuGroup>
          <S.FooterMenuHeader>Contacts</S.FooterMenuHeader>
          <S.FooterMenuItem href="">Email ME</S.FooterMenuItem>
          <S.FooterMenuItem href="">Instagram</S.FooterMenuItem>
          <S.FooterMenuItem href="">Github</S.FooterMenuItem>
          <S.FooterMenuItem href="">Linkedin</S.FooterMenuItem>
        </S.FooterMenuGroup>
        <S.FooterMenuGroup>
          <S.FooterMenuHeader>Sitemap</S.FooterMenuHeader>
          <S.FooterMenuItem>
            <Link href="">Home</Link>
          </S.FooterMenuItem>
          <S.FooterMenuItem>
            <Link href="">About</Link>
          </S.FooterMenuItem>
          <S.FooterMenuItem>
            <Link href="">Articles</Link>
          </S.FooterMenuItem>
          <S.FooterMenuItem>
            <Link href="">Media</Link>
          </S.FooterMenuItem>
          <S.FooterMenuItem>
            <Link href="">Contact</Link>
          </S.FooterMenuItem>
          <S.FooterMenuItem>
            <Link href="">Link</Link>
          </S.FooterMenuItem>
          <S.FooterMenuItem>
            <Link href="">Projects</Link>
          </S.FooterMenuItem>
        </S.FooterMenuGroup>
      </S.FooterMenu>
    </S.Footer>
  )
}

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
