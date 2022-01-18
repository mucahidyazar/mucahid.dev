import styled, {css} from 'styled-components'
import {BreakpointSize} from '@/constants/index'

interface IWindow {
  multi?: boolean
}
const Window = styled.div<IWindow>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  &:first-child {
    //100 / 16 = 6.25
    height: calc(100vh - 6.25rem);
  }

  ${({multi}) =>
    multi &&
    css`
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;

      & > div {
        max-width: 100%;
      }
    `}
`

export {Window}
