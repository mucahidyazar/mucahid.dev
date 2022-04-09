import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {motion} from 'framer-motion'
import {useTranslation} from 'next-i18next'

import {SectionHeader, SectionSlider, Sections, Section} from '@/components'
import {Button} from '@/ui'
import {contributions, workshops} from '@/data'
import {
  getApis,
  getStarreds,
  makeSelectApis,
  makeSelectStarreds,
} from '@/store/projects'

import * as S from './style'
import {SectionCard} from './SectionCard'

const ProjectsContainer: React.FC = () => {
  const {t} = useTranslation()
  const [pagination, setPagination] = useState(6)
  const dispatch = useDispatch()
  const starreds = useSelector(makeSelectStarreds)
  const apis = useSelector(makeSelectApis)

  useEffect(() => {
    dispatch(getStarreds())
    dispatch(getApis())
  }, [dispatch])

  return (
    <>
      <Sections
        sectionOne={
          <Section
            title={t('contributionsSectionTitle')}
            subtitle={t('contributionsSectionDescription')}
            link="https://www.github.com/mucahidyazar"
          >
            <S.SectionCards>
              {contributions.map(contribution => (
                <SectionCard key={contribution.id} {...contribution} />
              ))}
            </S.SectionCards>
          </Section>
        }
        sectionTwo={
          <Section
            title={t('favoriteRepositoriesSectionTitle')}
            subtitle={t('favoriteRepositoriesSectionDescription')}
            link="https://www.github.com/mucahidyazar"
          >
            <S.SectionCards>
              {starreds.map(contribution => (
                <SectionCard
                  key={contribution.id}
                  title={contribution.name}
                  description={contribution.description}
                  url={contribution.html_url}
                />
              ))}
            </S.SectionCards>
          </Section>
        }
      />

      <S.ExperiencesSection>
        <SectionHeader title={t('randomAPIs')} subtitle="" />

        <SectionSlider data={apis} hasArrow type={2} />
      </S.ExperiencesSection>

      <S.WorkshopsSection>
        <SectionHeader
          title={t('workshopsSectionTitle')}
          subtitle={t('workshopsSectionDescription')}
        />

        <S.WorkshopsList>
          {workshops.map((workshop, index) => {
            if (index < pagination) {
              return (
                <motion.div
                  key={workshop.id}
                  initial={{opacity: 0}}
                  whileInView={{
                    opacity: 1,
                    transition: {delay: 0.5 * (index % 6)},
                  }}
                  viewport={{once: false}}
                >
                  <S.PostCard
                    title={workshop.title}
                    subtitle={workshop.description}
                    tags={workshop.technologies}
                    imageUrl={workshop.image}
                    link="https://www.google.com"
                    links={workshop.links}
                  />
                </motion.div>
              )
            }
          })}
        </S.WorkshopsList>
        {pagination < workshops.length && (
          <Button outline onClick={() => setPagination(prev => prev + 6)}>
            {t('loadMore')}
          </Button>
        )}
      </S.WorkshopsSection>
    </>
  )
}

export default ProjectsContainer
