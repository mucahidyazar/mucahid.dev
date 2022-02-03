import {css} from 'styled-components'

import {BreakpointSize} from '@/constants'

export const Breakpoint = Object.keys(BreakpointSize).reduce(
  (acc: any, label: any) => {
    if (!acc[label]) {
      acc[label] = {}
    }
    acc[label].BELOW = (args: any) => css`
      @media (max-width: ${BreakpointSize[label].MAX}px) {
        ${css(args)};
      }
    `
    acc[label].ABOVE = (...args: any) => css`
      @media (min-width: ${BreakpointSize[label].MIN}px) {
        ${css(args)}
      }
    `
    acc[label].BETWEEN = (...args: any) => css`
      @media (min-width: ${BreakpointSize[label]
          .MIN}px) and (max-width: ${BreakpointSize[label].MAX}px) {
        ${css(args)}
      }
    `

    return acc
  },
  {},
)
