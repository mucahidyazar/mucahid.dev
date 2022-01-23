import React from 'react'
import type {NextPage} from 'next'
import {MainLayout} from '@/layout/index'
import {ProjectsContainer} from '@/containers/index'

const Projects: NextPage = () => {
  return (
    <MainLayout>
      <ProjectsContainer />
    </MainLayout>
  )
}

export default Projects
