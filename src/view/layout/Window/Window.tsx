import React from 'react'
import type {NextComponentType} from 'next'
import * as S from './style'

const Window: NextComponentType = ({children, multi}) => {
  return <S.Window multi={multi}>{children}</S.Window>
}

export default Window
