'use client'
import {
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

import {ArtImage} from '@/components'

type SectionData = {
  url: string
  title: string
  description: string
}
type HomeSwiperProps = {
  data: SectionData[]
}
export function HomeSwiper({data}: HomeSwiperProps) {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation
        effect="fade"
        pagination={{clickable: true}}
        scrollbar={{draggable: true}}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={swiper => console.log(swiper)}
        modules={[
          Autoplay,
          EffectFade,
          Pagination,
          Navigation,
          Scrollbar,
          A11y,
        ]}
      >
        {data.map(item => (
          <SwiperSlide key={item.url}>
            <ArtImage
              src={item.url}
              description={item.description}
              className="w-full h-80 rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
