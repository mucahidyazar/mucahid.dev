import React from 'react'
import type {NextComponentType} from 'next'
import Image from 'next/image'
import {useSelector} from 'react-redux'

import {SectionHeader} from '@/components'
import {Badge, Card, Textarea, Button, Title, Subtitle} from '@/ui'
import {makeArticleSelector} from '@/store/articles/selectors'

import * as S from './style'

const ArticleContainer: NextComponentType = () => {
  const article = useSelector(makeArticleSelector)

  return (
    <>
      <S.Header>
        <Title level={4}>{article.title}</Title>
        <S.BottomHeader>
          <Subtitle>Written by {article.author} on November 17, 2021</Subtitle>
          <S.ShareBy>
            <Image
              width={24}
              height={24}
              src="/svgs/instagram-icon.svg"
              alt="instagram"
            />
            <Image
              width={24}
              height={24}
              src="/svgs/linkedin-icon.svg"
              alt="linkedin"
            />
            <Image
              width={24}
              height={24}
              src="/svgs/codepen-icon.svg"
              alt="codepen"
            />
            <Image
              width={24}
              height={24}
              src="/svgs/mail-icon.svg"
              alt="mail"
            />
          </S.ShareBy>
        </S.BottomHeader>
      </S.Header>
      <S.ArticleImage>
        <Image width={1440} height={540} src="/images/article.jpg" alt="mail" />
      </S.ArticleImage>
      <S.ArticleTags>
        {article.categories.map((item: any) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </S.ArticleTags>

      <S.ArticleContent dangerouslySetInnerHTML={{__html: article.content}} />
      <S.Divider />
      <SectionHeader title="Comments" subtitle="6 Comments" />
      <S.Comments>
        {[
          {
            id: 'cooment-1',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias',
            date: '1 day ago',
          },
          {
            id: 'cooment-2',
            text: 'Fugiat cumque voluptate aliquam minima, sapiente minus laboriosam',
            date: '1 day ago',
          },
          {
            id: 'cooment-3',
            text: 'Facilis necessitatibus quo. Earum quo vel dolor quos. Exercitationem',
            date: '1 day ago',
          },
          {
            id: 'cooment-4',
            text: 'Obcaecati officia, eum mollitia enim ullam architecto reiciendis dolorem',
            date: '1 day ago',
          },
          {
            id: 'cooment-5',
            text: 'Ab veniam maiores nemo! Natus earum ea iste asperiores, explicabo eum',
            date: '1 day ago',
          },
          {
            id: 'cooment-6',
            text: 'Aut. Saepe voluptatibus fugit nisi, reiciendis quos deserunt recusandae',
            date: '1 day ago',
          },
        ].map(comment => (
          <Card key={comment.id} data={comment} type={2} />
        ))}
      </S.Comments>
      <S.CommentsForm>
        <Textarea />
        <Button primary>Send</Button>
      </S.CommentsForm>
    </>
  )
}

export default ArticleContainer
