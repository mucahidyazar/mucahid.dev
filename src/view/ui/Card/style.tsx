import styled, {css} from 'styled-components'
import {BreakpointSize} from '@/constants/index'
import {Title, Subtitle} from '../Typography'
import {Button} from '../Button'

const Card = styled.div`
  display: flex;
  gap: 60px;
  width: 100%;

  ${({type}) =>
    type === 2 &&
    css`
      background: rgba(62, 76, 103, 0.5);
      padding: 20px;

      ${CardImage} {
        height: auto;
        min-width: 280px;
      }
    `}

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    flex-direction: column;
    gap: 20px;
  }
`
const CardImage = styled.div`
  height: 320px;
  min-width: 320px;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    width: 100%;

    span {
      min-width: 100%;
    }
    img {
      object-fit: cover !important;
    }
  }
`
const CardContentTitle = styled.a`
  color: var(--color-white);
  font-size: var(--font-size-l);

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
