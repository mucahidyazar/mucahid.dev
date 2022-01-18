import React from 'react'
import Image from 'next/image'
import {Tag} from '@/ui/index'
import PropTypes from 'prop-types'

import * as S from './style'

type TData = {
  image?: string
  name: string
  subtitles?: string[]
  tags?: string[]
  text?: string
  date?: string
}

interface ICard {
  data: TData
  type: number
}

const Card = ({data, type}: ICard) => {
  return (
    <S.Card type={type}>
      {data?.image && (
        <S.CardImage>
          <Image src={data?.image} width={320} height={320} alt="" />
        </S.CardImage>
      )}

      <S.CardContent>
        <S.CardContentTitle level={6}>{data?.name}</S.CardContentTitle>
        {data?.subtitles?.map(subtitle => (
          <S.CardContentSubtitle key={data?.id + subtitle}>
            {subtitle}
          </S.CardContentSubtitle>
        ))}
        {data?.tags && (
          <S.CardContentTags>
            {data.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </S.CardContentTags>
        )}
        <S.CardContentText>{data?.text}</S.CardContentText>
        {data?.date && <S.CardContentDate>{data.date}</S.CardContentDate>}
      </S.CardContent>
    </S.Card>
  )
}

Card.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    subtitles: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
    text: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  type: PropTypes.number,
}

Card.defaultProps = {
  type: null,
}

Card.S = S

export default Card
