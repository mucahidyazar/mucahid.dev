import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Slider from 'react-slick'
import {Badge, Card} from '@/ui/index'
import * as S from './style'

interface IArrow {
  onClick?: () => void
}
const PrevArrow = ({onClick}: IArrow) => (
  <S.PrevArrow onClick={onClick}>
    <Image src="/svgs/left-arrow.svg" width={12} height={12} alt="Prev Arrow" />
  </S.PrevArrow>
)

const NextArrow = ({onClick}: IArrow) => (
  <S.NextArrow onClick={onClick}>
    <Image
      src="/svgs/right-arrow.svg"
      width={12}
      height={12}
      alt="Next Arrow"
    />
  </S.NextArrow>
)

type TData = {
  id?: string | number
  image?: string
  name: string
  subtitles?: string[]
  tags?: string[]
  text?: string
  date?: string
}

interface ISectionSlider {
  hasBadge?: boolean
  hasArrow?: boolean
  type?: number
  data: TData[]
}
const SectionSlider: React.FC<ISectionSlider> = ({
  data,
  hasBadge,
  hasArrow,
  type,
}) => {
  const slickRef = useRef<Slider>(null)
  const [activeSlide, setActiveSlide] = useState(1)
  const settings = {
    infinite: true,
    arrows: hasArrow,
    dots: type !== 2,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    afterChange: (index: number) => setActiveSlide(index + 1),
    slickGoTo: handleChangeSlide,
    prevArrow: type === 2 && <PrevArrow />,
    nextArrow: type === 2 && <NextArrow />,
  }

  function handleChangeSlide(index: any) {
    const numberIndex = Number(index)
    slickRef?.current?.slickGoTo(numberIndex - 1)
    setActiveSlide(numberIndex)
  }

  return (
    <S.SectionContainer>
      {hasBadge && (
        <S.BadgeContainer>
          {data?.map(item => (
            <Badge
              key={item.id}
              imagePath={item.image}
              text={item.name}
              cool
              isActive={activeSlide == item.id}
              onClick={() => handleChangeSlide(item.id)}
            />
          ))}
        </S.BadgeContainer>
      )}

      <S.SectionSliderContainer>
        <Slider ref={slickRef} {...settings}>
          {data?.map(item => (
            <Card key={item.id} data={item} type={type} />
          ))}
        </Slider>
      </S.SectionSliderContainer>
    </S.SectionContainer>
  )
}

SectionSlider.propTypes = {
  hasBadge: PropTypes.bool,
  hasArrow: PropTypes.bool,
  type: PropTypes.number,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string.isRequired,
      subtitles: PropTypes.arrayOf(PropTypes.string),
      tags: PropTypes.arrayOf(PropTypes.string),
      text: PropTypes.string,
      date: PropTypes.string,
    }),
  ).isRequired,
}

SectionSlider.defaultProps = {
  hasBadge: false,
  hasArrow: false,
  type: 1,
}

export default SectionSlider
