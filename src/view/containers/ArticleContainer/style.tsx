import styled from 'styled-components'

import {BreakpointSize} from '@/constants'
import {Card, Textarea, Button} from '@/ui'

const Header = styled.div``
const ShareBy = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    align-self: flex-end;
  }
`
const BottomHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`
const ArticleImage = styled.div``
const ArticleTags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`
const ArticleContent = styled.div`
  line-height: var(--line-height-xl);

  & * {
    overflow-wrap: break-word;
    white-space: pre-wrap;
    max-width: 100%;
  }
`
const Divider = styled.div`
  height: 2px;
  background-image: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.4) 51.56%,
    rgba(255, 255, 255, 0.1) 100%
  );
  margin: 5rem 0;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    margin: 2rem 0;
  }
`
const Comments = styled.div`
  ${Card.S.Card} {
    display: block;
    margin-bottom: 2rem;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  ${Card.S.CardContent} {
    font-size: var(--font-size-s);
    font-weight: 200;
  }
`

const CommentsForm = styled.form`
  position: relative;

  ${Textarea.S.Textarea} {
    margin-bottom: 1rem;
  }

  ${Button.S.Button} {
    width: 100%;
  }
`

export {
  Header,
  ShareBy,
  BottomHeader,
  ArticleImage,
  ArticleTags,
  ArticleContent,
  Divider,
  Comments,
  CommentsForm,
}
