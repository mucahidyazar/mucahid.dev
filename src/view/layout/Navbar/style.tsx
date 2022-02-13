import styled, {css} from 'styled-components'

import {BreakpointSize} from '@/constants'
import {container} from '@/styles'
import {Icon} from '@/ui'
import {Drawer as StyledDrawer} from '@/ui'

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-white);
  padding: 80px 0;
  position: relative;
  cursor: pointer;
  ${container};

  @media (max-width: ${BreakpointSize.TABLET.MIN}px) {
    padding: 20px 0;
  }
  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    align-items: flex-start;
  }
`

const NavbarBrandText = styled.div`
  display: flex;
  align-items: center;
`
const NavbarBrandColor = styled.div`
  color: var(--color-primary);
`
const NavbarBrand = styled.div`
  font-size: var(--font-size-2xl);
  font-weight: 700;
`
interface INavbarMenuItem {
  isActive: boolean
  key?: string
}
const NavbarMenuItem = styled.li<INavbarMenuItem>`
  padding: 0 1rem;
  position: relative;
  font-size: var(--font-size);
  text-transform: uppercase;
  font-face: 'Poppins';

  @media (max-width: ${BreakpointSize.TABLET.MIN}px) {
    width: 200px;
    padding: 12px 32px;
    text-align: center;
  }

  ${({isActive}) =>
    isActive
      ? css`
          &::after {
            content: '';
            position: absolute;
            bottom: -0.4rem;
            left: 50%;
            transform: translateX(-50%);
            width: 70%;
            height: 4px;
            background: var(--color-primary);
          }
        `
      : css`
          &:hover {
            &::after {
              content: '';
              position: absolute;
              bottom: -0.4rem;
              left: 50%;
              transform: translateX(-50%);
              width: 70%;
              height: 4px;
              background: var(--color-primary);
            }
          }
        `}
`

const NavbarMenu = styled.ul`
  list-style-type: none;
  display: flex;
  color: var(--color-white);

  @media (max-width: ${BreakpointSize.TABLET.MIN}px) {
    display: none;
  }
`

const NavbarLanguages = styled.div``
const NavbarLanguage = styled.div`
  text-transform: uppercase;
`
const NavbarTheme = styled.div``
const NavbarIconWrapper = styled.div`
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const NavbarIcon = styled(Icon)``
const NavbarUserIconWrapper = styled.div`
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const NavbarUserIcon = styled(Icon)``

const NavbarMenuIconWrapper = styled.div`
  display: none;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    display: block;
  }
`
const NavbarMenuIconBar = styled.div`
  position: relative;
  top: 10px;
  left: 0;
  background: white;
  height: 2px;
  width: 24px;
  transition: all 0.4s ease;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: -7px;
    background: white;
    width: 100%;
    height: 2px;
    transition: all 0.4s ease;
  }

  &:after {
    top: 7px;
  }
`
const NavbarMenuIcon = styled.div`
  height: 21px;
  cursor: pointer;
`
const NavbarMenuToggler = styled.input`
  display: none;

  &:checked + ${NavbarMenuIcon} ${NavbarMenuIconBar} {
    background: transparent;
  }
  &:checked + ${NavbarMenuIcon} ${NavbarMenuIconBar}:before {
    top: 0;
    transform: rotate(45deg);
  }
  &:checked + ${NavbarMenuIcon} ${NavbarMenuIconBar}:after {
    top: 0;
    transform: rotate(135deg);
  }
`

const NavbarLogoGradientBorder = styled.div`
  width: 46px;
  height: 46px;
  background: var(--color-primary);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const NavbarLogo = styled.div`
  width: 44px;
  height: 44px;
  background-color: black;
  border-radius: 2px;
`
const NavbarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const NavbarUser = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${NavbarUserIconWrapper} {
    order: 3;
  }

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    flex-direction: column;

    ${NavbarUserIconWrapper} {
      order: 2;
    }

    ${NavbarLanguages} {
      order: 4;
    }
    ${NavbarTheme} {
      order: 3;
    }
  }
`

const DrawerNavbarMenuItem = styled.li`
  position: relative;
  cursor: pointer;
  filter: blur(1px);
  width: max-content;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-primary);
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`
const Drawer = styled(StyledDrawer)`
  ${StyledDrawer.S.CloseButton} {
    display: none;
  }

  ${StyledDrawer.S.DrawerContent} {
    justify-content: center;
  }
`
const DrawerNavbarMenu = styled(NavbarMenu)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  margin-top: 0 auto;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    ${DrawerNavbarMenuItem} {
      font-size: var(--font-size-2xl);
      filter: blur(0);
    }
  }
`

export {
  Navbar,
  NavbarBrand,
  NavbarBrandText,
  NavbarBrandColor,
  NavbarMenu,
  NavbarMenuItem,
  NavbarUser,
  NavbarUserIcon,
  NavbarUserIconWrapper,
  NavbarMenuIconWrapper,
  NavbarMenuIcon,
  NavbarMenuToggler,
  NavbarMenuIconBar,
  NavbarLanguages,
  NavbarLanguage,
  NavbarTheme,
  NavbarIcon,
  NavbarIconWrapper,
  NavbarLogoGradientBorder,
  NavbarLogo,
  NavbarImage,
  Drawer,
  DrawerNavbarMenu,
  DrawerNavbarMenuItem,
}
