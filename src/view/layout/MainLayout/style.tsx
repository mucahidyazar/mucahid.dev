import styled from 'styled-components'

import {container} from '@/styles'

const MainLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const MainLayoutContent = styled.div`
  flex-grow: 1;
  ${container}
`

export {MainLayout, MainLayoutContent}
