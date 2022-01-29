import {css} from 'styled-components'

import {BreakpointSize} from '@/constants'

export const Breakpoint = Object.keys(BreakpointSize).reduce((acc, label) => {
  if (!acc[label]) {
    acc[label] = {}
  }
  acc[label].BELOW = (...args) => css`
    @media (max-width: ${BreakpointSize[label].MAX}px) {
      ${css(...args)}
    }
  `
  acc[label].ABOVE = (...args) => css`
    @media (min-width: ${BreakpointSize[label].MIN}px) {
      ${css(...args)}
    }
  `
  acc[label].BETWEEN = (...args) => css`
    @media (min-width: ${BreakpointSize[label]
        .MIN}px) and (max-width: ${BreakpointSize[label].MAX}px) {
      ${css(...args)}
    }
  `

  return acc
}, {})
