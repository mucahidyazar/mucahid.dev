import styled, {css} from 'styled-components'

import {BreakpointSize} from '@/constants'
import {container} from '@/styles'
import {Icon} from '@/ui'

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
  color: #e9b258;
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
            background: #e9b258;
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
              background: #e9b258;
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

const NavbarLogoGradientBorder = styled.div`
  width: 46px;
  height: 46px;
  background: #e9b258;
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

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    flex-direction: column;

    ${NavbarLanguages} {
      order: 3;
    }
    ${NavbarTheme} {
      order: 2;
    }
  }
`

const DrawerNavbarMenuItem = styled.li`
  padding: 0 1rem;
  position: relative;
  font-size: var(--font-size);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: var(--font-size-2xl);
  filter: blur(1px);

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${BreakpointSize.TABLET.MIN}px) {
    width: 200px;
    padding: 12px 32px;
    text-align: center;
  }
`
const DrawerNavbarMenu = styled(NavbarMenu)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-top: 10rem;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    margin-top: 0;

    ${DrawerNavbarMenuItem} {
      font-size: var(--font-size-l);
      filter: blur(0.5px);
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
  NavbarLanguages,
  NavbarLanguage,
  NavbarTheme,
  NavbarIcon,
  NavbarIconWrapper,
  NavbarLogoGradientBorder,
  NavbarLogo,
  NavbarImage,
  DrawerNavbarMenu,
  DrawerNavbarMenuItem,
}
