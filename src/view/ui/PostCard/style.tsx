import styled, {css} from 'styled-components'
import {BreakpointSize} from '@/constants/index'
import {Title, Subtitle} from '../Typography'
import {Tag} from '../Tag'

const Card = styled.div`
  width: 100%;
  cursor: pointer;
`
const CardImage = styled.div`
  position: relative;
  width: 100%;
  min-height: 540px;
  margin-bottom: 0.5rem;
`

const CardImageHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: 1;
  height: 40px;
`
const Link = styled.a`
  background-color: rgba(0, 0, 0, 0.5);
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`

const CopyIcon = styled(Link).attrs({as: 'div'})``

const Tags = styled.div`
  width: calc(75%);
  display: flex;
  gap: 4px;
  align-items: flex-start;
  flex-wrap: wrap;
  z-index: 1;

  ${Tag.S.Tag} {
    padding: 0.2rem 0.8rem;
    font-size: var(--font-size-s);
  }
`

const CardContent = styled.div``
const CardContentTitle = styled(Title)`
  &:hover {
    text-decoration: underline;
    color: var(--color-pastel1);
  }
`
const CardContentSubtitle = styled(Subtitle)`
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
const CardContentDate = styled(Subtitle)`
  font-weight: 600;
`

export {
  Card,
  CardImage,
  CardImageHeader,
  Tags,
  CardContent,
  CardContentTitle,
  CardContentSubtitle,
  CardContentDate,
  Links,
  Link,
  CopyIcon,
}
