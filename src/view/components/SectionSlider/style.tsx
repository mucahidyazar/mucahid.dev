import styled from 'styled-components'

const SectionContainer = styled.div``
const BadgeContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  overflow-x: auto;
`

const SectionSliderContainer = styled.div``

const PrevArrow = styled.div`
  background-color: rgba(62, 76, 103, 0.5);
  border-radius: 2px 0 0 2px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  right: 52px;
  z-index: 1;
  cursor: pointer;
`
const NextArrow = styled.div`
  background-color: rgba(62, 76, 103, 0.5);
  border-radius: 0 2px 2px 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
  cursor: pointer;
`

export {
  SectionContainer,
  SectionSliderContainer,
  BadgeContainer,
  PrevArrow,
  NextArrow,
}
