import React from 'react'
import type {NextPage} from 'next'
import {MainLayout} from '@/layout/index'
import {ProjectsContainer} from '@/containers/index'

const Projects: NextPage = () => {
  return (
    <MainLayout
      title="Check out my projects!"
      description="I love open-source projects really much. There is not so much open-source countributing but I like to share my open-source projects by the community. Even my blog also is an open source project. I shared its codes on my Github. I also have a few open-source library and I published them to npm as well. Also you can see the github projects which I starred on my Github."
    >
      <ProjectsContainer />
    </MainLayout>
  )
}

export default Projects
