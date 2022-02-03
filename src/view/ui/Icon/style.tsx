import styled, {css} from 'styled-components'

import {IconSize} from '@/constants'

const smallStyle = css`
  min-width: 12px;
  min-height: 12px;
`

const mediumStyle = css`
  min-width: 18px;
  min-height: 18px;
`

const largeStyle = css`
  min-width: 24px;
  min-height: 24px;
`

const xlargeStyle = css`
  min-width: 30px;
  min-height: 30px;
`

const IconSizeStyles = {
  [IconSize.SMALL]: smallStyle,
  [IconSize.MEDIUM]: mediumStyle,
  [IconSize.LARGE]: largeStyle,
  [IconSize.XLARGE]: xlargeStyle,
}

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({format}: any) => format !== IconSize.NONE && IconSizeStyles[format]};
`

const Path = styled.path``

const Icon = styled.svg`
  fill: currentColor;
  width: ${({size}: any) => `${size}px`};
  height: ${({size}: any) => `${size}px`};

  ${Path} {
    width: ${({size}: any) => `${size}px`};
    height: ${({size}: any) => `${size}px`};
  }

  ${({spinning}: any) =>
    spinning &&
    css`
      animation: 1.5s loading linear infinite;

      @keyframes loading {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}
`

export {Icon, Path, Wrapper}
