import styled from 'styled-components'

import {BreakpointSize} from '@/constants'
import {Title, Input, Button} from '@/ui'
import {container} from 'styles'

const SubscribeBannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem;
  background-color: #8f88f2;
  ${container}
  margin-top: 5rem;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    flex-direction: column;
    gap: 2.5rem;
  }
  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    padding: 1rem;
  }
`
const SubscribeBannerLeft = styled.div`
  width: 40%;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    text-align: center;
    width: 100%;
  }
`
const SubscribeBannerTopTitle = styled(Title)`
  font-size: var(--font-size);
  font-weight: 100;
`
const SubscribeBannerBottomTitle = styled(Title)`
  font-size: var(--font-size-4xl);
  line-height: 80%;
  font-weight: 800;
`
const SubscribeBannerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`
const SubscribeBannerInput = styled(Input)`
  background-color: none;
  border: 2px solid var(--color-white);
`
const SubscribeBannerButton = styled(Button)`
  background-color: var(--color-white);
  color: var(--color-black);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`
const SubscribeBannerButtonText = styled.span``

export {
  SubscribeBannerContainer,
  SubscribeBannerLeft,
  SubscribeBannerTopTitle,
  SubscribeBannerBottomTitle,
  SubscribeBannerRight,
  SubscribeBannerInput,
  SubscribeBannerButton,
  SubscribeBannerButtonText,
}
