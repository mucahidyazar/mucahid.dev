import styled from 'styled-components'

import {ZIndex} from '@/constants'

const SectionContainer = styled.div``
const BadgeContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

const SectionSliderContainer = styled.div``

const PrevArrow = styled.div`
  background-color: var(--color-blue-transparent);
  border-radius: 2px 0 0 2px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  right: 52px;
  z-index: ${ZIndex.ONE};
  cursor: pointer;
`
const NextArrow = styled(PrevArrow)`
  border-radius: 0 2px 2px 0;
  right: 20px;
  transform: rotateZ(180deg);
`

export {
  SectionContainer,
  SectionSliderContainer,
  BadgeContainer,
  PrevArrow,
  NextArrow,
}
