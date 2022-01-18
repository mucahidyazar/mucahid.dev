import styled from 'styled-components'
import {BreakpointSize} from '@/constants/index'
import {Button, Input} from '@/ui/index'

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin: 200px 0;
  color: var(--color-white);

  @media (max-width: ${BreakpointSize.TABLET.MIN}px) {
    flex-direction: column;
  }

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    margin: 5rem 0;
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

const FooterInfoDescription = styled.div`
  margin-bottom: 1rem;
`

const FooterSubscribe = styled.div`
  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    width: 100%;
  }
`
const FooterSubscribeInput = styled(Input)`
  margin-bottom: 0.5rem;
`
const FooterSubscribeButton = styled(Button)`
  width: 100%;
  background-color: var(--color-white);
  color: var(--color-black);
  font-weight: 600;
`

const FooterInfo = styled.div`
  width: 360px;

  @media (max-width: ${BreakpointSize.TABLET.MIN}px) {
    width: 100%;
    margin-bottom: 100px;
  }

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${FooterInfoDescription} {
      text-align: center;
    }
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
const FooterMenuItem = styled.p`
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

const FooterMenu = styled.div`
  width: 362px;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${BreakpointSize.TABLET.MIN}px) {
    width: 100%;
  }

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    justify-content: space-evenly;

    ${FooterMenuItem} {
      text-align: center;
    }
  }
`

export {
  Footer,
  FooterInfo,
  FooterInfoTitle,
  FooterInfoSubtitle,
  FooterInfoDescription,
  FooterSubscribe,
  FooterSubscribeInput,
  FooterSubscribeButton,
  FooterMenu,
  FooterMenuGroup,
  FooterMenuHeader,
  FooterMenuItem,
}
