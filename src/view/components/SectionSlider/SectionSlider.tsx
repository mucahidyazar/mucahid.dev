import React, {useRef, useState} from 'react'
import type {NextComponentType} from 'next'
import Image from 'next/image'
import Slider from 'react-slick'
import {Badge, Card} from '@/ui/index'
import * as S from './style'

const PrevArrow = ({onClick}) => (
  <S.PrevArrow onClick={onClick}>
    <Image src="/svgs/left-arrow.svg" width={12} height={12} alt="Prev Arrow" />
  </S.PrevArrow>
)

const NextArrow = ({onClick}) => (
  <S.NextArrow onClick={onClick}>
    <Image
      src="/svgs/right-arrow.svg"
      width={12}
      height={12}
      alt="Next Arrow"
    />
  </S.NextArrow>
)

const SectionSlider: NextComponentType = ({data, hasBadge, hasArrow, type}) => {
  const slickRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(1)
  const settings = {
    dots: true,
    infinite: true,
    arrows: hasArrow,
    dots: type !== 2,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    afterChange: index => setActiveSlide(index + 1),
    slickGoTo: handleChangeSlide,
    prevArrow: type === 2 && <PrevArrow />,
    nextArrow: type === 2 && <NextArrow />,
  }

  function handleChangeSlide(index) {
    slickRef.current.slickGoTo(Number(index) - 1)
    setActiveSlide(index)
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

      <S.SectionSliderContainer type={type}>
        <Slider {...settings} ref={slickRef}>
          {data?.map(item => (
            <Card key={item.id} data={item} type={type} />
          ))}
        </Slider>
      </S.SectionSliderContainer>
    </S.SectionContainer>
  )
}

export default SectionSlider
