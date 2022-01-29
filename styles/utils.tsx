import {css} from 'styled-components'

import {BreakpointSize} from '@/constants'

export const container = css`
  width: 90%;
  max-width: ${BreakpointSize.DESKTOP.MAX}px;
  margin: 0 auto;
`
