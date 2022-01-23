import {Card} from '@/ui/index'
import styled from 'styled-components'
import {BreakpointSize} from '@/constants/index'
import {Title, Subtitle} from '@/ui/index'

const LinkTreeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const ImageWrapperLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: linear-gradient(225deg, #f9f871 0%, #00af90 100%);
  border-radius: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    padding: 0.2rem;
    border-radius: 4px;
    margin-bottom: 8px;
  }
`
const ImageWrapper = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  padding: 30px;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    width: 120px;
    height: 120px;
  }
`
const Username = styled.div`
  margin-bottom: 1rem;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    margin-bottom: 8px;
    font-size: var(--font-size-s);
  }
`
const LinkCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

const LinkCard = styled.div`
  background-color: rgba(107, 205, 247, 0.5);
  border-radius: 4px;
  width: 336px;
  display: flex;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  border: 2px solid #fff;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    width: 206px;
    padding: 6px;
    border-radius: 2px;
    border-width: 1px;
  }
`
const LinkCardImage = styled.div`
  position: relative;
  width: 32px;
  height: 32px;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    width: 20px;
    height: 20px;
  }
`
const LinkCardTitle = styled.div`
  margin: 0 auto;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    font-size: var(--font-size-s);
  }
`
const SocialIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export {
  LinkTreeSection,
  ImageWrapperLayout,
  ImageWrapper,
  Username,
  LinkCardsWrapper,
  LinkCard,
  LinkCardImage,
  LinkCardTitle,
  SocialIconsWrapper,
}
