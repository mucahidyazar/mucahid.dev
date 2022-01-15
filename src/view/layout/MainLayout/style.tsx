import styled from 'styled-components'
import {BreakpointSize} from '@/constants/index'

const MainLayout = styled.div`
  width: ${BreakpointSize.DESKTOP.MAX}px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${BreakpointSize.DESKTOP.MAX}px) {
    width: 80%;
  }

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    width: 90%;
  }
`

const MainLayoutContent = styled.div`
  flex-grow: 1;
`

export {MainLayout, MainLayoutContent}
