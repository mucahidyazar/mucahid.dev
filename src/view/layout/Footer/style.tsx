import styled from 'styled-components'
import {BreakpointSize} from '@/constants/index'

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin: 200px 0;
  color: var(--color-white);

  @media (max-width: ${BreakpointSize.TABLET.MIN}px) {
    flex-direction: column;
  }
`

const FooterInfo = styled.div`
  width: 360px;

  @media (max-width: ${BreakpointSize.TABLET.MIN}px) {
    width: 100%;
    margin-bottom: 100px;
  }
`

const FooterInfoTitle = styled.div`
  font-size: var(--font-size-l);
  font-weight: 700;
`

const FooterInfoSubtitle = styled.div`
  color: #95a1c1;
  margin-bottom: 15px;
  font-size: var(--font-size-s);
`

const FooterInfoDescription = styled.div``

const FooterMenu = styled.div`
  width: 362px;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${BreakpointSize.TABLET.MIN}px) {
    width: 100%;
  }
`
const FooterMenuGroup = styled.div`
  display: flex;
  flex-direction: column;
`
const FooterMenuHeader = styled.div`
  font-size: var(--font-size-l);
  font-weight: 700;
  margin-bottom: 40px;
`
const FooterMenuItem = styled.a`
  cursor: pointer;

  &:hover {
    background: -webkit-linear-gradient(225deg, #f9f871 0%, #00af90 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`

export {
  Footer,
  FooterInfo,
  FooterInfoTitle,
  FooterInfoSubtitle,
  FooterInfoDescription,
  FooterMenu,
  FooterMenuGroup,
  FooterMenuHeader,
  FooterMenuItem,
}
