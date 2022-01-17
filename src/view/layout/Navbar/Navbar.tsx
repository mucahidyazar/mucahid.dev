import React from 'react'
import PropTypes from 'prop-types'
import type {NextComponentType} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import * as S from './style'

const Navbar: NextComponentType = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggleMenu = () => {
    setToggleMenu(prev => !prev)
  }

  return (
    <S.Navbar>
      <S.NavbarBrand>Mucahid Yazar</S.NavbarBrand>
      <S.NavbarMenu isOpen={toggleMenu}>
        <S.NavbarMenuItem>
          <Link href="/">Home</Link>
        </S.NavbarMenuItem>
        <S.NavbarMenuItem>
          <Link href="/about">About</Link>
        </S.NavbarMenuItem>
        <S.NavbarMenuItem>
          <Link href="/articles">Articles</Link>
        </S.NavbarMenuItem>
        <S.NavbarMenuItem>
          <Link href="/media">Media</Link>
        </S.NavbarMenuItem>
        <S.NavbarMenuItem>
          <Link href="contact">Contact</Link>
        </S.NavbarMenuItem>
        <S.NavbarMenuItem>
          <Link href="/links">Link</Link>
        </S.NavbarMenuItem>
        <S.NavbarMenuItem>
          <Link href="/projects">Projects</Link>
        </S.NavbarMenuItem>
      </S.NavbarMenu>
      <S.NavbarLogoGradientBorder onClick={handleToggleMenu}>
        <S.NavbarLogo>
          <Image
            src="/images/logo.png"
            alt="logo"
            width="100%"
            height="100%"
            className="bg-black"
          />
        </S.NavbarLogo>
      </S.NavbarLogoGradientBorder>
    </S.Navbar>
  )
}

Navbar.propTypes = {}

Navbar.defaultProps = {}

export default Navbar
