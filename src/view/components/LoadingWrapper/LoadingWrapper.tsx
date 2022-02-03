import React from 'react'
import type {NextComponentType} from 'next'

import {Loading} from '@/ui'

import * as S from './style'

const LoadingWrapper = ({isLoading}) => {
  if (isLoading) {
    return (
      <S.LoadingWrapper>
        <S.LoadingAnimation>
          <Loading />
        </S.LoadingAnimation>
      </S.LoadingWrapper>
    )
  }

  return null
}

LoadingWrapper.propTypes = {}

LoadingWrapper.defaultProps = {}

LoadingWrapper.S = S

export default LoadingWrapper
