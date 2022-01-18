import styled, {css} from 'styled-components'
import {BreakpointSize} from '@/constants/index'
import {Title} from '@/ui/index'

const IntroductionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-white);
  backdrop-filter: blur(20px);
  transform: perspective(500px);
  transform-style: preserve-3d;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    flex-direction: column;
    gap: 20px;
  }
`

interface IntroductionContent {
  rightContent?: boolean
}
const IntroductionContent = styled.div<IntroductionContent>`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    width: 100%;
    order: 2;
  }

  ${({rightContent}) =>
    rightContent &&
    css`
      order: 2;
    `}
`

const IntroductionContentTitle = styled(Title)`
  font-weight: 500;
`

const IntroductionContentDescription = styled.p`
  line-height: var(--line-height-xl);
  font-weight: 100;
`

const IntroductionContentItem = styled.div`
  &:nth-child(even) ${IntroductionContentTitle} {
    text-align: right;
  }

  &:nth-child(even) ${IntroductionContentDescription} {
    text-align: right;
  }

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    &:first-child {
      margin-bottom: 20px;
    }
  }
`

const IntroductionPhoto = styled.div`
  width: 45%;
  height: 600px;
  position: relative;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    width: 100%;
    height: 200px;
  }
`

export {
  IntroductionContainer,
  IntroductionContent,
  IntroductionContentItem,
  IntroductionContentTitle,
  IntroductionContentDescription,
  IntroductionPhoto,
}
