import styled, {css} from 'styled-components'

import {BreakpointSize} from '@/constants'
import {container} from '@/styles'
import {Icon} from '@/ui'
import {Drawer as StyledDrawer} from '@/ui'

const Navbar = styled.div`
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-white);
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

//! NavbarBrand
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

//! NavbarMenu
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

//! NavbarControlPanel
//? LANGUAGES
const Languages = styled.div``
const Language = styled.div`
  text-transform: uppercase;
`

//? THEMES
const Themes = styled.div`
  margin-left: 1rem;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    margin-left: 0;
    margin-bottom: 1rem;
  }
`
const Theme = styled.div`
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ThemeIcon = styled(Icon)``

//? MENU
const Menu = styled.div`
  display: none;
  margin-left: 1rem;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    display: block;
  }
  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    margin-left: 0;
    margin-bottom: 1rem;
  }
`
const MenuIcon = styled.div`
  height: 21px;
  cursor: pointer;
`
const MenuIconBar = styled.div`
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
const MenuToggler = styled.input`
  display: none;

  &:checked + ${MenuIcon} ${MenuIconBar} {
    background: transparent;
  }
  &:checked + ${MenuIcon} ${MenuIconBar}:before {
    top: 0;
    transform: rotate(45deg);
  }
  &:checked + ${MenuIcon} ${MenuIconBar}:after {
    top: 0;
    transform: rotate(135deg);
  }
`

//? USERIMAGE
const UserImage = styled.div`
  width: 46px;
  height: 46px;
  background: var(--color-primary);
  border-radius: 2px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    margin-left: 0;
    margin-bottom: 1rem;
  }
`
const UserImageSource = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

//? USERICON
const UserIcon = styled.div`
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    margin-left: 0;
    margin-bottom: 1rem;
  }
`
const UserIconSource = styled(Icon)``

//? NAVBARCONTROLPANEL
const NavbarControlPanel = styled.div`
  display: flex;
  align-items: center;

  /* ${UserIcon} {
    order: 3;
  } */

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    flex-direction: column-reverse;

    /* ${UserIcon} {
      order: 2;
    }

    ${Languages} {
      order: 4;
    }
    ${Themes} {
      order: 3;
    } */
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
const DrawerMenuItem = styled.li`
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
const DrawerMenu = styled(NavbarMenu)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  margin-top: 0 auto;
  font-size: var(--font-size-2xl);

  ${DrawerMenuItem} {
    filter: blur(0);
  }
`

export {
  Navbar,
  NavbarBrand,
  NavbarBrandText,
  NavbarBrandColor,
  NavbarMenu,
  NavbarMenuItem,
  NavbarControlPanel,
  Languages,
  Language,
  Themes,
  Theme,
  ThemeIcon,
  Menu,
  MenuIcon,
  MenuToggler,
  MenuIconBar,
  UserImage,
  UserImageSource,
  UserIcon,
  UserIconSource,
  Drawer,
  DrawerMenu,
  DrawerMenuItem,
}
