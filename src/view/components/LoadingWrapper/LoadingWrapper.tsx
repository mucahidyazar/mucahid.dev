import React from 'react'

import {Loading} from '@/ui'

import * as S from './style'

interface ILodingWrapperProps {
  isLoading: boolean
}
const LoadingWrapper = ({isLoading}: ILodingWrapperProps) => {
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
