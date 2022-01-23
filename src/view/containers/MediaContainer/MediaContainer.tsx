import React from 'react'
import Image from 'next/image'
import type {NextComponentType} from 'next'
import {
  Introduction,
  SectionHeader,
  Welcome,
  SectionSlider,
  SubscribeBanner,
} from '@/components/index'
import {Window} from '@/layout/index'
import {
  Card,
  PostCard,
  Input,
  Textarea,
  Button,
  ProjectCard,
  Badge,
} from '@/ui/index'
import * as S from './style'
import {useSelector} from 'react-redux'
import {makeInstagramSelector} from '@/store/articles/selectors'

const MediaContainer: NextComponentType = () => {
  const instagramPhotos = useSelector(makeInstagramSelector)

  // a computer hardware mock data
  const computerMockData = [
    {
      id: '1',
      type: 'hard disk',
      name: 'WD Red 4TB',
      price: 'Rp. 1.500.000',
      tags: ['WD', 'Red', '4TB'],
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: '2',
      type: 'motherboard',
      name: 'Asus Prime B450M-PLUS',
      price: 'Rp. 1.500.000',
      tags: ['Asus', 'Prime', 'B450M-PLUS'],
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: '3',
      type: 'processor',
      name: 'Intel Core i7-9700K',
      price: 'Rp. 1.500.000',
      tags: ['Intel', 'Core', 'i7-9700K'],
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: '4',
      type: 'vga',
      name: 'Asus GeForce GTX 1660 Ti',
      price: 'Rp. 1.500.000',
      tags: ['Asus', 'GeForce', 'Gtx 1660 Ti'],
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: '5',
      type: 'ram',
      name: 'Corsair Vengeance 16GB',
      price: 'Rp. 1.500.000',
      tags: ['Corsair', 'Vengeance', '16GB'],
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: '6',
      type: 'ssd',
      name: 'Samsung 850 EVO',
      price: 'Rp. 1.500.000',
      tags: ['Samsung', '850 EVO'],
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: '7',
      type: 'psu',
      name: 'Corsair CX550',
      price: 'Rp. 1.500.000',
      tags: ['Corsair', 'CX550'],
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: '8',
      type: 'case',
      name: 'Cooler Master MasterBox',
      price: 'Rp. 1.500.000',
      tags: ['Cooler', 'Master', 'MasterBox'],
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: '9',
      type: 'monitor',
      name: 'Acer Predator X315',
      price: 'Rp. 1.500.000',
      tags: ['Acer', 'Predator', 'X315'],
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: '10',
      type: 'keyboard',
      name: 'Logitech G213',
      price: 'Rp. 1.500.000',
      tags: ['Logitech', 'G213'],
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: '11',
      type: 'mouse',
      name: 'Logitech G213',
      price: 'Rp. 1.500.000',
      tags: ['Logitech', 'G213'],
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: '12',
      type: 'speaker',
      name: 'Logitech G213',
      price: 'Rp. 1.500.000',
      tags: ['Logitech', 'G213'],
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: '13',
      type: 'headphone',
      name: 'Logitech G213',
      price: 'Rp. 1.500.000',
      tags: ['Logitech', 'G213'],
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: '14',
      type: 'charger',
      name: 'Logitech G213',
      price: 'Rp. 1.500.000',
      tags: ['Logitech', 'G213'],
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
  ]

  return (
    <>
      <Window>
        <Welcome />
      </Window>
      <S.SectionsContainer>
        <S.SectionOneContainer>
          <SectionHeader
            title="Instagram"
            subtitle="Let me show you what summary of my website is :) Let me show you what summary of my website is :) Click which you want or just wait."
            link="/"
          />
          <S.InstagramContainer>
            {instagramPhotos.splice(0, 6).map(item => (
              <S.InstagramImage key={item}>
                <Image
                  src={item}
                  alt="instagram-image"
                  layout="fill"
                  objectFit="cover"
                />
              </S.InstagramImage>
            ))}
          </S.InstagramContainer>
        </S.SectionOneContainer>
        <S.SectionTwoContainer>
          <SectionHeader
            title="Twitter"
            subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
            link="https://www.google.com"
          />
          <S.TwitterContainer></S.TwitterContainer>
        </S.SectionTwoContainer>
      </S.SectionsContainer>

      {/* TODO: Links ve Mediadaki bu Badge bloklarini bir component yap  */}
      <SectionHeader
        title="Equipments"
        subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
      />
      <S.StuffContainer>
        <S.StuffTitle>Computer</S.StuffTitle>
        <S.StuffList>
          {computerMockData.map(item => (
            <Badge key={item.id + 'computer'}>{item.name}</Badge>
          ))}
        </S.StuffList>
      </S.StuffContainer>

      <S.SummarySection>
        <SectionHeader
          title="Contents"
          subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
        />
        <SectionSlider data={computerMockData} hasArrow type={2} />
      </S.SummarySection>
    </>
  )
}

export default MediaContainer
