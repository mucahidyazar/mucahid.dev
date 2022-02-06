import styled, {css} from 'styled-components'

import {BreakpointSize} from '@/constants'

import {Subtitle} from '../Typography'

const CardImage = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
`

interface ICard {
  type: number
}
const Card = styled.div<ICard>`
  display: flex;
  gap: 60px;
  width: 100%;

  ${({type}) =>
    type === 2 &&
    css`
      background: rgba(62, 76, 103, 0.5);
      padding: 20px;

      ${CardImage} {
        width: 480px;

        @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
          width: 100%;
        }
      }
    `}

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    flex-direction: column;
    gap: 20px;
  }
`
const CardContentTitle = styled.a`
  color: var(--color-white);
  font-size: var(--font-size-l);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`
const CardContentSubtitle = styled(Subtitle)``
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;

  ${CardContentSubtitle} {
    margin-bottom: 8px;
  }
`
const CardContentText = styled.div`
  display: -webkit-box;
  /* -webkit-line-clamp: 3; */
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: 100;
  font-size: var(--font-size-s);
`
const CardContentTags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 20px;
  flex-wrap: wrap;
`
const CardContentDate = styled(Subtitle)`
  font-weight: 600;
  align-self: flex-end;
  margin-top: auto;
`

export {
  Card,
  CardImage,
  CardContentTitle,
  CardContentSubtitle,
  CardContent,
  CardContentText,
  CardContentTags,
  CardContentDate,
}
