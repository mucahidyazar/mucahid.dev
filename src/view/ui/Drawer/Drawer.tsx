import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import {createPortal} from 'react-dom'
import {CSSTransition} from 'react-transition-group'

import {useOutsideClick} from '@/hooks'
import {DrawerPlacement} from '@/constants/index'
import {BackDropStyle} from 'styles'
import * as S from './style'
import {Icon} from '../'

function Drawer({
  children,
  onClose,
  placement,
  isClosable,
  isVisible,
  size,
  ...props
}) {
  const [isShown, setShown] = useState(isVisible)
  const backdropRef = useRef()

  const drawerContentProps = {
    placement,
    isVisible,
    size,
    ref: backdropRef,
    'data-testid': 'drawer-content',
  }

  useEffect(() => {
    setShown(isVisible)
  }, [isVisible])

  useOutsideClick(backdropRef, () => {
    if (isShown && isClosable) {
      onClose()
      setShown(false)
    }
  })

  const drawerWrapperProps = {size, placement}

  if (typeof document !== 'undefined') {
    return createPortal(
      <CSSTransition
        in={isShown}
        classNames="drawer-transition"
        unmountOnExit
        timeout={500}
      >
        <S.Wrapper data-testid="drawer" {...drawerWrapperProps} {...props}>
          <BackDropStyle />
          <S.DrawerWrapper {...drawerWrapperProps}>
            <S.DrawerContent {...drawerContentProps}>
              {isClosable && (
                <S.CloseButton onClick={onClose} kind="transparent">
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
