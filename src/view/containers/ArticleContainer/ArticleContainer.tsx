import React, {useRef} from 'react'
import type {NextComponentType} from 'next'
import Image from 'next/image'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'next/router'

import {SectionHeader} from '@/components'
import {Badge, Card, Textarea, Button, Title, Subtitle} from '@/ui'
import {
  makeArticleSelector,
  makeSelectComments,
} from '@/store/articles/selectors'
import {makeSelectUser} from '@/store/auth'
import {addComment} from '@/store/articles'

import * as S from './style'

const ArticleContainer: NextComponentType = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const article = useSelector(makeArticleSelector)
  const comments = useSelector(makeSelectComments)
  const user = useSelector(makeSelectUser)
  const formRef = useRef(null)

  const sendCommentHandler = e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const comment = form.get('comment')
    const {slug} = router.query

    dispatch(addComment(slug, comment))
    formRef.current.reset()
  }

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
        {article?.categories?.map((item: any) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </S.ArticleTags>

      <S.ArticleContent dangerouslySetInnerHTML={{__html: article.content}} />
      <S.Divider />
      <SectionHeader title="Comments" subtitle="6 Comments" />
      <S.Comments>
        {comments?.map(comment => (
          <Card
            key={comment.id}
            data={{
              id: comment.id,
              text: comment.message,
              date: comment.createdAt,
              name: comment.author.name,
            }}
            type={2}
          />
        ))}
      </S.Comments>
      {user?.email && (
        <S.CommentsForm onSubmit={sendCommentHandler} ref={formRef}>
          <Textarea name="comment" />
          <Button primary>Send</Button>
        </S.CommentsForm>
      )}
    </>
  )
}

export default ArticleContainer
