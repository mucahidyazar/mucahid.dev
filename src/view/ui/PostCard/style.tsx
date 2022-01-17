import styled, {css} from 'styled-components'
import {BreakpointSize} from '@/constants/index'
import {Title, Subtitle} from '../Typography'
import {Tag} from '../Tag'

const Card = styled.div`
  max-width: 420px;
`
const CardImage = styled.div`
  position: relative;
`
const CardCopyIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
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
const Tags = styled.div`
  width: calc(100% - 82px);
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  gap: 4px;
  align-items: center;
  flex-wrap: wrap;

  ${Tag.S.Tag} {
    padding: 0.2rem 0.8rem;
    font-size: var(--font-size-s);
  }
`

const CardContent = styled.div``
const CardContentTitle = styled(Title)``
const CardContentSubtitle = styled(Subtitle)`
  margin-bottom: 20px;
`
const CardContentDate = styled(Subtitle)`
  font-weight: 600;
`

export {
  Card,
  CardImage,
  Tags,
  CardCopyIcon,
  CardContent,
  CardContentTitle,
  CardContentSubtitle,
  CardContentDate,
}
