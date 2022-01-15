import React from 'react'
import type {NextComponentType} from 'next'
import Image from 'next/image'
import {useState} from 'react'
import * as S from './style'

const NavbarItem = ({title, classProps}) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>
}

const Navbar: NextComponentType = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggleMenu = () => {
    setToggleMenu(prev => !prev)
  }

  return (
    <S.Navbar>
      <S.NavbarBrand>Mucahid Yazar</S.NavbarBrand>
      <S.NavbarMenu isOpen={toggleMenu}>
        <S.NavbarMenuItem isOpen={toggleMenu}>Home</S.NavbarMenuItem>
        <S.NavbarMenuItem isOpen={toggleMenu}>About</S.NavbarMenuItem>
        <S.NavbarMenuItem isOpen={toggleMenu}>Articles</S.NavbarMenuItem>
        <S.NavbarMenuItem isOpen={toggleMenu}>Media</S.NavbarMenuItem>
        <S.NavbarMenuItem isOpen={toggleMenu}>Contact</S.NavbarMenuItem>
        <S.NavbarMenuItem isOpen={toggleMenu}>Link</S.NavbarMenuItem>
        <S.NavbarMenuItem isOpen={toggleMenu}>Projects</S.NavbarMenuItem>
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

export default Navbar
