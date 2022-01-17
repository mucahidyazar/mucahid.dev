import React from 'react'
import type {NextComponentType} from 'next'
import {Window} from '@/layout/index'
import {
  Introduction,
  SectionHeader,
  Welcome,
  SectionSlider,
  AboutWelcome,
} from '@/components/index'
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

const ArticlesContainer: NextComponentType = () => {
  // generate mock articles data which variable name is mockData
  // mock data is an array of objects
  // each object is an article
  // each article has a id(string), title, a description, a date, a category, tags and a image
  // and mockData has 10 articles
  const mockData = [
    {
      id: '1',
      title: 'How to use React Hooks',
      description:
        'React Hooks is a new feature in React 16.8. It lets you use state and other React features without writing a class.',
      date: '2020-05-01',
      category: 'React',
      tags: ['React', 'Hooks'],
      image: 'https://picsum.photos/id/1/200/300',
    },
    {
      id: '2',
      title: 'How to use React Hooks',
      description:
        'React Hooks is a new feature in React 16.8. It lets you use state and other React features without writing a class.',
      date: '2020-05-01',
      category: 'React',
      tags: ['React', 'Hooks'],
      image: 'https://picsum.photos/id/2/200/300',
    },
    {
      id: '3',
      title: 'How to use React Hooks',
      description:
        'React Hooks is a new feature in React 16.8. It lets you use state and other React features without writing a class.',
      date: '2020-05-01',
      category: 'React',
      tags: ['React', 'Hooks'],
      image: 'https://picsum.photos/id/3/200/300',
    },
    {
      id: '4',
      title: 'How to use React Hooks',
      description:
        'React Hooks is a new feature in React 16.8. It lets you use state and other React features without writing a class.',
      date: '2020-05-01',
      category: 'React',
      tags: ['React', 'Hooks'],
      image: 'https://picsum.photos/id/4/200/300',
    },
    {
      id: '5',
      title: 'How to use React Hooks',
      description:
        'React Hooks is a new feature in React 16.8. It lets you use state and other React features without writing a class.',
      date: '2020-05-01',
      category: 'React',
      tags: ['React', 'Hooks'],
      image: 'https://picsum.photos/id/5/200/300',
    },
    {
      id: '6',
      title: 'How to use React Hooks',
      description:
        'React Hooks is a new feature in React 16.8. It lets you use state and other React features without writing a class.',
      date: '2020-05-01',
      category: 'React',
      tags: ['React', 'Hooks'],
      image: 'https://picsum.photos/id/6/200/300',
    },
    {
      id: '7',
      title: 'How to use React Hooks',
      description:
        'React Hooks is a new feature in React 16.8. It lets you use state and other React features without writing a class.',
      date: '2020-05-01',
      category: 'React',
      tags: ['React', 'Hooks'],
      image: 'https://picsum.photos/id/7/200/300',
    },
  ]

  return (
    <>
      <Window>
        <Welcome />
      </Window>
      <S.FiltersSection>
        <S.FilterByLabel>Search article by topic</S.FilterByLabel>
        <S.FiltersTags>
          {[
            'Css',
            'Html',
            'Javascript',
            'React',
            'Next.js',
            'Redux',
            'Sass',
            'TypeScript',
          ].map(item => (
            <Badge key={item}>{item}</Badge>
          ))}
        </S.FiltersTags>
        <S.FilterByLabel>Search article by topic</S.FilterByLabel>
        <S.FiltersTags>
          {['2019', '2020', '2021', '2022'].map(item => (
            <Badge key={item}>{item}</Badge>
          ))}
        </S.FiltersTags>
      </S.FiltersSection>

      <S.ArticlesSection>
        {mockData.map((item, index) => {
          if (index < 6) {
            return (
              <PostCard
                key={item.id}
                title={item.title}
                subtitle={item.description}
                date={item.date}
                tags={item.tags}
                imageUrl={item.image}
              />
            )
          }
        })}
      </S.ArticlesSection>
      <Button outline>Load more</Button>
      {/* <S.QuotesSection>
        <SectionHeader
          title="Quotes"
          subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
        />
        <SectionSlider data={quotesMockData} hasArrow type={2} />
      </S.QuotesSection> */}
    </>
  )
}

export default ArticlesContainer
