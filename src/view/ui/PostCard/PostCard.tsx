import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Tag} from '@/ui/index'
import {stripText} from '@/utilities/index'
import PropTypes from 'prop-types'

import * as S from './style'

interface IPostCard {
  imageUrl: string
  title: string
  subtitle: string
  date: string
  link: string
  tags: string[]
}

const PostCard = ({imageUrl, title, subtitle, date, tags, link}: IPostCard) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(imageUrl)
  }
  return (
    <S.Card>
      <S.CardImage>
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          alt="Article Image"
          unoptimized={true}
        />
        <S.CardCopyIcon onClick={handleCopyLink}>
          <Image src="/svgs/copy.svg" width={20} height={20} alt="" />
        </S.CardCopyIcon>
        <S.Tags>
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </S.Tags>
      </S.CardImage>

      <S.CardContent>
        <Link href={link} passHref>
          <S.CardContentTitle level={5}>{title}</S.CardContentTitle>
        </Link>
        <S.CardContentSubtitle>{stripText(subtitle)}</S.CardContentSubtitle>
        <S.CardContentDate>{date}</S.CardContentDate>
      </S.CardContent>
    </S.Card>
  )
}

PostCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

PostCard.defaultProps = {}

PostCard.S = S

export default PostCard
