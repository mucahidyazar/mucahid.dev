import styled, {css} from 'styled-components'

const Button = styled.button`
  background-color: rgba(62, 76, 103, 0.5);
  color: var(--color-white);
  padding: 12px 18px;
  border: none;
  outline: none;
  border-radius: 4px;

  ${({primary}) =>
    primary &&
    css`
      background-color: rgba(58, 92, 223, 0.5);
    `}

  ${({outline}) =>
    outline &&
    css`
      padding: 10px 16px;
      background-color: transparent;
      border: 2px solid var(--color-white);
    `}
`

export {Button}
