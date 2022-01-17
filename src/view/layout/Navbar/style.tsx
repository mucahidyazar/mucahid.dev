import styled, {css} from 'styled-components'
import {BreakpointSize} from '@/constants/index'

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-white);
  padding: 80px 0;
  position: relative;
  cursor: pointer;
`

const NavbarBrand = styled.div`
  font-size: var(--font-size-2xl);
  font-weight: 700;
`
const NavbarMenuItem = styled.li`
  padding: 0 12px;
  position: relative;
  font-size: var(--font-size);

  @media (max-width: ${BreakpointSize.TABLET.MIN}px) {
    width: 200px;
    padding: 12px 32px;
    text-align: center;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: rgba(62, 76, 103, 0.6);
    }
  }
`
interface INavbarMenu {
  isOpen: boolean
}
const NavbarMenu = styled.ul<INavbarMenu>`
  list-style-type: none;
  display: flex;

  @media (max-width: ${BreakpointSize.TABLET.MIN}px) {
    display: ${({isOpen}) => (isOpen ? 'block' : 'none')};
    z-index: 1;
    position: absolute;
    top: calc(100% - 76px);
    right: 0;
    flex-direction: column;
    background-color: rgba(62, 76, 103, 0.5);
    border-radius: 2px;
  }

  ${NavbarMenuItem} {
    ${({isOpen}) =>
      !isOpen &&
      css`
        &:hover {
          &::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 10%;
            width: calc(100% - 20%);
            height: 2px;
            background-color: var(--color-white);
            transition: all 0.3s ease-in-out;
          }
        }
      `}
  }
`
const NavbarLogoGradientBorder = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(225deg, #f9f871 0%, #00af90 100%);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: gradient-border-animation 5s ease-in-out infinite;

  @keyframes gradient-border-animation {
    0% {
      background: linear-gradient(225deg, #f9f871 25%, #00af90 25%);
    }
    25% {
      background: linear-gradient(225deg, #00af90 35%, #f9f871 35%);
    }
    50% {
      background: linear-gradient(225deg, #f9f871 50%, #00af90 50%);
    }
    75% {
      background: linear-gradient(225deg, #00af90 35%, #f9f871 35%);
    }
    100% {
      background: linear-gradient(225deg, #f9f871 25%, #00af90 25%);
    }
  }
`
const NavbarLogo = styled.div`
  width: 52px;
  height: 52px;
  background-color: black;
  border-radius: 2px;
`

export {
  Navbar,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem,
  NavbarLogoGradientBorder,
  NavbarLogo,
}
