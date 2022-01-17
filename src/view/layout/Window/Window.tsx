import React from 'react'
import PropTypes from 'prop-types'
import * as S from './style'

interface IWindow {
  children: React.ReactNode
  multi?: boolean
}

const Window: React.FC<IWindow> = ({children, multi}) => {
  return <S.Window multi={multi}>{children}</S.Window>
}

Window.propTypes = {
  children: PropTypes.node.isRequired,
  multi: PropTypes.bool,
}

Window.defaultProps = {
  multi: false,
}

export default Window
