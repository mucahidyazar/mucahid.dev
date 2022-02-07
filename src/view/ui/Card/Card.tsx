import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

import {Tag} from '@/ui'
import {CardData} from '@/types'

import * as S from './style'

interface ICard {
  children?: React.ReactNode
  data: CardData
  type: number
}

const Card = ({data, type}: ICard) => {
  return (
    <S.Card type={type}>
      {data?.image && (
        <S.CardImage>
          <Image
            src={data?.image}
            layout="fill"
            unoptimized
            objectFit="cover"
            alt={data?.image}
          />
        </S.CardImage>
      )}

      <S.CardContent>
        <S.CardContentTitle href={data?.url} target="_blank">
          {data?.name}
        </S.CardContentTitle>
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
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string,
    name: PropTypes.string,
    subtitles: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
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
