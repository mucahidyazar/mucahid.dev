import styled, {css} from 'styled-components'

import {BreakpointSize} from '@/constants'
import {container} from '@/styles'

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
            /* content: '';
            position: absolute;
            top: -0.7rem;
            left: 0rem;
            background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMjAwMTA5MDQvL0VOIgogICAgICAgICAgICAgICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+Cgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICB3aWR0aD0iMWluIiBoZWlnaHQ9IjAuNWluIgogICAgIHZpZXdCb3g9IjAgMCAzMDAgMTUwIj4KICA8cGF0aAogICAgICAgIGZpbGw9IiNmZmUwMDAiIHN0cm9rZT0ibm9uZSIKICAgICAgICBkPSJNIDEyLjAwLDQ4LjAwCiAgICAgICAgICAgQyAxMi4wMCw1MC4wOSAxMS43OSw1NC45OSAxMi42MCw1Ni43MgogICAgICAgICAgICAgMTUuNTksNjMuMTggMjYuMDksNTYuNjQgMzMuMDAsNjMuMDAKICAgICAgICAgICAgIDMwLjg0LDYzLjE4IDIzLjA1LDYzLjg3IDIxLjgwLDY1LjAyCiAgICAgICAgICAgICAxOC4wMiw2Ny44OCAyMS4yOSw3Ni4zNSAyMS44MCw4MC4wMAogICAgICAgICAgICAgMjEuODAsODAuMDAgMjEuODAsODYuMDAgMjEuODAsODYuMDAKICAgICAgICAgICAgIDIxLjgwLDg2LjAwIDQwLjAwLDg3LjAwIDQwLjAwLDg3LjAwCiAgICAgICAgICAgICAzOS45Myw4OC44OCA0MC4wNiw5MS4wNCAzOC45OCw5Mi42OQogICAgICAgICAgICAgMzcuNTEsOTQuOTMgMzUuMTUsOTQuNzUgMzIuNTksOTYuMjAKICAgICAgICAgICAgIDI4LjMzLDk4LjYxIDI2Ljg3LDEwMi4yMiAyNy4zNCwxMDcuMDAKICAgICAgICAgICAgIDI3LjM0LDEwNy4wMCAzMC4wMiwxMjMuNDEgMzAuMDIsMTIzLjQxCiAgICAgICAgICAgICAzMS44MiwxMjUuNzUgNDAuMDEsMTI3Ljk1IDQzLjAwLDEyOC4wMAogICAgICAgICAgICAgNDMuMDAsMTI4LjAwIDg3LjAwLDEyOC4wMCA4Ny4wMCwxMjguMDAKICAgICAgICAgICAgIDg4LjA4LDEyMS41NiA5MS4xNiwxMjEuODAgOTcuMDAsMTIyLjA0CiAgICAgICAgICAgICA5Ny4wMCwxMjIuMDQgMTA5LjAwLDEyMy4wMCAxMDkuMDAsMTIzLjAwCiAgICAgICAgICAgICAxMDkuMDAsMTIzLjAwIDEyOC4wMCwxMjMuMDAgMTI4LjAwLDEyMy4wMAogICAgICAgICAgICAgMTI4LjAwLDEyMy4wMCAxODIuMDAsMTIyLjAwIDE4Mi4wMCwxMjIuMDAKICAgICAgICAgICAgIDE5NC41OCwxMjEuOTcgMTg4LjQyLDExOS4wMyAyMDEuMDAsMTE5LjAwCiAgICAgICAgICAgICAyMDEuMDAsMTE5LjAwIDI0My4wMCwxMTkuMDAgMjQzLjAwLDExOS4wMAogICAgICAgICAgICAgMjQzLjAwLDExOS4wMCAyNTguMDAsMTE4LjAwIDI1OC4wMCwxMTguMDAKICAgICAgICAgICAgIDI1OS41MywxMDkuMTAgMjY2LjAxLDExMy4zNyAyNzAuNDAsMTA5LjE1CiAgICAgICAgICAgICAyNzIuNjEsMTA3LjAzIDI3Mi4zMCwxMDAuODUgMjcyLjAwLDk4LjAwCiAgICAgICAgICAgICAyNzIuMDAsOTguMDAgMjgwLjAwLDk3LjAwIDI4MC4wMCw5Ny4wMAogICAgICAgICAgICAgMjgwLjAwLDk0LjEwIDI4MC4yNiw4OC41NSAyNzkuMjYsODYuMDIKICAgICAgICAgICAgIDI3Ni40OSw3OC45OCAyNjQuNjMsNzYuODggMjU4LjAwLDc2LjAwCiAgICAgICAgICAgICAyNjUuMTUsNjkuMTkgMjc2LjQwLDczLjAzIDI3NC44NSw2Mi4wNAogICAgICAgICAgICAgMjc0LjQ3LDU5LjM1IDI3My43Myw1OC44NSAyNzIuMDAsNTcuMDAKICAgICAgICAgICAgIDI4MS42OCw1My43NyAyODEuMDAsNTQuMjggMjgxLjAwLDQ0LjAwCiAgICAgICAgICAgICAyODEuMDAsNDQuMDAgMjU4LjAwLDQyLjM4IDI1OC4wMCw0Mi4zOAogICAgICAgICAgICAgMjUwLjAwLDQwLjg0IDI1MS40OCwzOC4wMyAyMzUuMDAsMzguMDAKICAgICAgICAgICAgIDIzNS4wMCwzOC4wMCAxODkuMDAsMzkuMDAgMTg5LjAwLDM5LjAwCiAgICAgICAgICAgICAxODkuMDAsMzkuMDAgMTc3LjAwLDM5LjgyIDE3Ny4wMCwzOS44MgogICAgICAgICAgICAgMTc3LjAwLDM5LjgyIDE1OS4wMCwzOC4wMCAxNTkuMDAsMzguMDAKICAgICAgICAgICAgIDE1OS4wMCwzOC4wMCAxMjguMDAsMzguMDAgMTI4LjAwLDM4LjAwCiAgICAgICAgICAgICAxMTYuOTAsMzguMDIgMTIwLjE2LDM5LjQwIDExMy4wMCw0MC42NwogICAgICAgICAgICAgMTEzLjAwLDQwLjY3IDk3LjAwLDQyLjE3IDk3LjAwLDQyLjE3CiAgICAgICAgICAgICA5Ny4wMCw0Mi4xNyA4Ny4wMCw0My44MyA4Ny4wMCw0My44MwogICAgICAgICAgICAgODcuMDAsNDMuODMgNTcuMDAsNDUuMDAgNTcuMDAsNDUuMDAKICAgICAgICAgICAgIDU3LjAwLDQ1LjAwIDMyLjAwLDQ4LjAwIDMyLjAwLDQ4LjAwCiAgICAgICAgICAgICAzMi4wMCw0OC4wMCAxMi4wMCw0OC4wMCAxMi4wMCw0OC4wMCBaIiAvPgo8L3N2Zz4K');
            padding-left: 48px;
            padding-right: 68px;
            padding-top: 22px;
            padding-bottom: 22px;
            background-repeat: no-repeat;
            background-size: contain;
            z-index: -1; */
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

const DrawerNavbarMenu = styled(NavbarMenu)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-top: 10rem;
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

export {
  Navbar,
  NavbarBrand,
  NavbarBrandText,
  NavbarBrandColor,
  NavbarMenu,
  NavbarMenuItem,
  NavbarLogoGradientBorder,
  NavbarLogo,
  DrawerNavbarMenu,
  DrawerNavbarMenuItem,
}
