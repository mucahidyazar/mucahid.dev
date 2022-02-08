import styled from 'styled-components'

import {Button} from '@/ui'
import {BreakpointSize} from '@/constants'

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 700px;
  height: 90vh;
  margin: auto;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    width: 90%;
  }
`
const LottieWrapper = styled.div``
const HomeButton = styled(Button)`
  width: 100%;
  background-color: #e9b258;
  color: #fff;
  font-size: var(--font-size-xl);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    font-size: var(--font-size);
  }
`

export {NotFoundContainer, LottieWrapper, HomeButton}
