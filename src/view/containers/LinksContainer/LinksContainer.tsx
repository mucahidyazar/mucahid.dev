import React from 'react'
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
  Badge,
  Card,
  PostCard,
  Input,
  Textarea,
  Button,
  ProjectCard,
} from '@/ui/index'
import * as S from './style'
import {computerMockData} from '@/data'

const LinksContainer: NextComponentType = () => {
  const linksData = [
    'https://www.twitter.com/',
    'https://www.facebook.com/',
    'https://www.instagram.com/',
    'https://www.github.com/',
    'https://www.linkedin.com/',
    'https://www.reddit.com/',
    'https://www.quora.com/',
    'https://www.pinterest.com/',
    'https://www.flickr.com/',
    'https://www.tumblr.com/',
    'https://www.dribbble.com/',
    'https://www.behance.net/',
    'https://www.deviantart.com/',
    'https://www.vimeo.com/',
    'https://www.youtube.com/',
    'https://www.soundcloud.com/',
    'https://www.spotify.com/',
    'https://www.last.fm/',
    'https://www.goodreads.com/',
    'https://www.twitter.com/',
    'https://www.facebook.com/',
    'https://www.instagram.com/',
    'https://www.github.com/',
    'https://www.linkedin.com/',
    'https://www.reddit.com/',
    'https://www.quora.com/',
    'https://www.pinterest.com/',
    'https://www.flickr.com/',
    'https://www.tumblr.com/',
    'https://www.dribbble.com/',
    'https://www.behance.net/',
    'https://www.deviantart.com/',
    'https://www.vimeo.com/',
    'https://www.youtube.com/',
    'https://www.soundcloud.com/',
    'https://www.spotify.com/',
    'https://www.last.fm/',
    'https://www.goodreads.com/',
  ]

  return (
    <>
      <Window>
        <Welcome
          title="Links, Notes, Bookmarks, and More"
          description="Here are some of my favorite links, notes, and bookmarks."
          illustration="prize"
        />
      </Window>
      <S.URLsSection>
        <SectionHeader
          title="Links"
          subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
        />
        <S.URLs>
          {linksData.map(link => (
            <S.URL key={link}>{link}</S.URL>
          ))}
        </S.URLs>
      </S.URLsSection>

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
    </>
  )
}

export default LinksContainer
