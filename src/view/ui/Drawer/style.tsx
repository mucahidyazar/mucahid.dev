import styled, {css} from 'styled-components'

import {DrawerPlacement} from '@/constants'
import {EDrawerPlacement} from '@/types'

import {Button} from '../'

const transformAnimationStyle = (isShown: boolean) => ({
  [DrawerPlacement.TOP]: isShown ? 'translateY(-100%)' : 'translateY(0)',
  [DrawerPlacement.RIGHT]: isShown ? 'translateX(100%)' : 'translateX(0)',
  [DrawerPlacement.BOTTOM]: isShown ? 'translateY(100%)' : 'translateY(0)',
  [DrawerPlacement.LEFT]: isShown ? 'translateX(-100%)' : 'translateX(0)',
})

const placementStyle = {
  [DrawerPlacement.TOP]: {
    top: 0,
    right: 0,
    left: 0,
  },
  [DrawerPlacement.RIGHT]: {
    top: 0,
    right: 0,
    bottom: 0,
  },
  [DrawerPlacement.BOTTOM]: {
    right: 0,
    bottom: 0,
    left: 0,
  },
  [DrawerPlacement.LEFT]: {
    top: 0,
    bottom: 0,
    left: 0,
  },
}

// left and right
const horizontalStyle = css`
  width: ${({size}: {size: string}) => size};
  height: 100vh;
`

// top and bottom
const verticalStyle = css`
  width: 100vw;
  height: ${({size}: {size: string}) => size};
`

const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  color: #000;
  background-color: rgba(0, 0, 0, 0.9);
`

interface IDrawerWrapper {
  placement: EDrawerPlacement
  size: string
}
const DrawerWrapper = styled.div<IDrawerWrapper>`
  position: fixed;
  z-index: 100;

  ${props => placementStyle[props.placement]}

  ${props =>
    (props.placement === DrawerPlacement.TOP ||
      props.placement === DrawerPlacement.BOTTOM) &&
    verticalStyle}
		
	${props =>
    (props.placement === DrawerPlacement.LEFT ||
      props.placement === DrawerPlacement.RIGHT) &&
    horizontalStyle}
`

interface IEScene {
  placement: EDrawerPlacement
}
const enterScene = css<IEScene>`
  ${DrawerWrapper} {
    opacity: 0.2;
    transform: ${props => transformAnimationStyle(true)[props.placement]};
  }
`

const exitScene = css<IEScene>`
  ${DrawerWrapper} {
    opacity: 1;
    transition: 400ms;
    transform: ${props => transformAnimationStyle(false)[props.placement]};
  }
`

const Wrapper = styled.div`
  &.drawer-transition-enter {
    ${enterScene};
  }

  &.drawer-transition-enter-active {
    ${exitScene};
  }

  &.drawer-transition-exit {
    ${exitScene};
  }

  &.drawer-transition-exit-active {
    ${enterScene};
  }
`

const CloseButton = styled(Button)`
  display: flex;
  align-self: flex-end;
  background-color: transparent;
  padding: 2rem;

  &:hover {
    background-color: transparent;
  }
`

export {Wrapper, DrawerContent, CloseButton, DrawerWrapper}

/* // ${Icon.S.Icon} {
    color: var(--color-white);
    filter: blur(1px);
    margin: 2rem;

    &:hover {
      animation: closeButtonHover 2s ease-in-out infinite;

      // create a css animation for close button hover effect
      @keyframes closeButtonHover {
        0% {
          transform: rotateZ(0deg);
        }
        50% {
          transform: rotateZ(180deg);
        }
        100% {
          transform: rotateZ(270deg);
        }
      }
    }
  } */
