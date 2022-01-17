import React from 'react'
import Image from 'next/image'
import {Tag} from '@/ui/index'
import PropTypes from 'prop-types'

import * as S from './style'

const PostCard = ({imageUrl, title, subtitle, date}) => {
  return (
    <S.Card>
      <S.CardImage>
        <Image src={imageUrl} width={420} height={540} alt="" />
        <S.CardCopyIcon>
          <Image src="/svgs/copy.svg" width={20} height={20} alt="" />
        </S.CardCopyIcon>
        <S.Tags>
          {['Tag 1', 'Tag 2', 'Tag 3', 'Tag 1', 'Tag 2', 'Tag 3'].map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </S.Tags>
      </S.CardImage>

      <S.CardContent>
        <S.CardContentTitle level={5}>{title}</S.CardContentTitle>
        <S.CardContentSubtitle>{subtitle}</S.CardContentSubtitle>
        <S.CardContentDate>{date}</S.CardContentDate>
      </S.CardContent>
    </S.Card>
  )
}

PostCard.propTypes = {}

PostCard.defaultProps = {}

PostCard.S = S

export default PostCard
