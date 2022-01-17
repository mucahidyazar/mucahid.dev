import React from 'react'
import Image from 'next/image'
import {Tag} from '@/ui/index'
import PropTypes from 'prop-types'

import * as S from './style'

const Card = ({data, type}) => {
  return (
    <S.Card type={type}>
      {data?.image && (
        <S.CardImage>
          <Image src={data?.image} width={320} height={320} alt="" />
        </S.CardImage>
      )}

      <S.CardContent>
        <S.CardContentTitle level={4}>{data?.name}</S.CardContentTitle>
        {data?.subtitles?.map(subtitle => (
          <S.CardContentSubtitle key={data?.id + subtitle}>
            {subtitle}
          </S.CardContentSubtitle>
        ))}
        <S.CardContentTags>
          {data?.tags?.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </S.CardContentTags>
        <S.CardContentText>{data?.text}</S.CardContentText>
        <S.CardContentDate>{data?.date}</S.CardContentDate>
      </S.CardContent>
    </S.Card>
  )
}

Card.propTypes = {}

Card.defaultProps = {}

Card.S = S

export default Card
