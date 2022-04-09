import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ReactMarkdown from 'react-markdown'

import {getChangelogs, makeSelectChangelogs} from '@/store/changelogs'

import * as S from './style'

const ChangelogsContainer: React.FC = () => {
  const dispatch = useDispatch()
  const changelogs = useSelector(makeSelectChangelogs)

  useEffect(() => {
    dispatch(getChangelogs())
  }, [dispatch])

  return (
    <S.ChangelogsContainer>
      {changelogs.map((changelog: any) => (
        <S.Changelog key={changelog.id}>
          <S.ChangelogTitle level={2}>
            <S.ChangelogName href={changelog.url} target="_blank">
              {changelog.name}
            </S.ChangelogName>
          </S.ChangelogTitle>
          <S.ChangelogUrl href={changelog.url} target="_blank">
            <S.ChangelogText>Url</S.ChangelogText>
            {changelog.url}
          </S.ChangelogUrl>
          <S.ChangelogTag>
            <S.ChangelogText>Tag</S.ChangelogText>
            {changelog.tag}
          </S.ChangelogTag>
          <S.ChangelogBody>
            <ReactMarkdown>{changelog.body}</ReactMarkdown>
          </S.ChangelogBody>
        </S.Changelog>
      ))}
    </S.ChangelogsContainer>
  )
}

export default ChangelogsContainer
