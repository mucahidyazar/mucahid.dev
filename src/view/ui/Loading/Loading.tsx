import React from 'react'

import * as S from './style'

const Loading = () => {
  return (
    <S.Loading>
      <S.LoadingChildOne></S.LoadingChildOne>
      <S.LoadingChildTwo></S.LoadingChildTwo>
    </S.Loading>
  )
}

Loading.S = S

export default Loading
