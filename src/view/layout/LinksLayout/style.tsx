import styled from 'styled-components'

import {container} from '@/styles'

const LinksLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const LinksLayoutContent = styled.div`
  flex-grow: 1;
  ${container}
`

export {LinksLayout, LinksLayoutContent}
