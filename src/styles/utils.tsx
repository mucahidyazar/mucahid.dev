import {css} from 'styled-components'

import {BreakpointSize} from '@/constants'

export const container = css`
  width: 90%;
  max-width: ${BreakpointSize.DESKTOP.MAX}px;
  margin: 0 auto;
`

export const titleHover = css`
  cursor: pointer;
  position: relative;

  @keyframes expansing {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    height: 20px;
    background-color: #e9b258;
    z-index: -1;
    transform: rotateZ(-2deg);
    animation: expansing 0.5s ease-in-out forwards;
  }
`
