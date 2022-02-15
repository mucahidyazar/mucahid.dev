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
    background-color: var(--color-primary);
    z-index: -1;
    transform: rotateZ(-2deg);
    animation: expansing 0.5s ease-in-out forwards;
  }
`

export const titleHover2 = css`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 2rem;
    height: 2px;
    background-color: var(--color-primary);
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`
