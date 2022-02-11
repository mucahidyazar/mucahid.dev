import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import {createPortal} from 'react-dom'
import {CSSTransition} from 'react-transition-group'

import {useOutsideClick} from '@/hooks'
import {DrawerPlacement} from '@/constants'
import {BackDropStyle} from '@/styles'
import {EDrawerPlacement} from '@/types'

import {Icon} from '../'

import * as S from './style'

interface IDrawer {
  children: React.ReactNode
  onClose: () => void
  placement: EDrawerPlacement
  isClosable: boolean
  isVisible: boolean
  size: string
}
function Drawer({
  children,
  onClose,
  placement,
  isClosable,
  isVisible,
  size,
  ...props
}: IDrawer) {
  const [isShown, setShown] = useState(isVisible)
  const backdropRef = useRef<any>()

  useEffect(() => {
    setShown(isVisible)
  }, [isVisible])

  useOutsideClick(backdropRef, () => {
    if (isShown && isClosable) {
      onClose()
      setShown(false)
    }
  })

  if (typeof document !== 'undefined') {
    return createPortal(
      <CSSTransition
        in={isShown}
        classNames="drawer-transition"
        unmountOnExit
        timeout={500}
      >
        <S.Wrapper data-testid="drawer" placement={placement} {...props}>
          <BackDropStyle />
          <S.DrawerWrapper size={size} placement={placement}>
            <S.DrawerContent ref={backdropRef} data-testid="drawer-content">
              {isClosable && (
                <S.CloseButton onClick={onClose}>
                  <Icon name="close" size={32} color="#504F53" />
                </S.CloseButton>
              )}
              {children}
            </S.DrawerContent>
          </S.DrawerWrapper>
        </S.Wrapper>
      </CSSTransition>,
      document.body,
    )
  }

  return <div></div>
}

Drawer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isClosable: PropTypes.bool,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  size: PropTypes.string,
  placement: PropTypes.oneOf(Object.values(DrawerPlacement)),
}

Drawer.defaultProps = {
  children: null,
  isClosable: true,
  isVisible: false,
  size: '300px',
  onClose: () => {},
  placement: DrawerPlacement.RIGHT,
}

Drawer.S = S

export default Drawer
