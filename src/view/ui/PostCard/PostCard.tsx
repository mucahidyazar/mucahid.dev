import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Tag, Icon} from '@/ui/index'
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
  links?: {
    id: string
    url: string
    icon: string
  }
}

const PostCard: React.FC<IPostCard> = ({
  imageUrl,
  title,
  subtitle,
  date,
  tags,
  link,
  links,
}) => {
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
        <S.CardImageHeader>
          <S.Tags>
            {tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </S.Tags>
          <S.Links>
            {links?.map(({id, url, icon}) => (
              <S.Link key={id} href={url} target="_blank">
                <Icon name={icon} size={20} />
              </S.Link>
            ))}
            <S.CopyIcon onClick={handleCopyLink}>
              <Icon name="copy" size={20} />
            </S.CopyIcon>
          </S.Links>
        </S.CardImageHeader>
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
  link: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }),
  ),
}

PostCard.defaultProps = {
  links: undefined,
}

PostCard.S = S

export default PostCard
