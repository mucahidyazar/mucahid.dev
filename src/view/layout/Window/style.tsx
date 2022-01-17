import styled, {css} from 'styled-components'

const Window = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  &:first-child {
    //220 / 16 = 13.5rem
    height: calc(100vh - 13.5rem);
  }

  ${({multi}) =>
    multi &&
    css`
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;

      & > div {
        max-width: 100%;
      }
    `}
`

export {Window}
