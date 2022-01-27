import styled, {css} from 'styled-components'

const Badge = styled.div`
  padding: 0.5rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 18px;
  //#3E4C67
  background: rgba(62, 76, 103, 0.5);
  width: max-content;
  border-radius: 4px;
  cursor: pointer;

  ${({isActive}) =>
    isActive &&
    css`
      background: rgba(62, 76, 103, 1);
    `}

  &:hover {
    background: rgba(62, 76, 103, 0.8);
  }

  ${({cool}) =>
    cool &&
    css`
      background: linear-gradient(
        225deg,
        rgba(163, 161, 0, 0.5) 0%,
        rgba(0, 175, 144, 0.5) 100%
      );

      

  ${({isActive}) =>
    isActive &&
    css`
      background: linear-gradient(
        225deg,
        rgba(163, 161, 0, 0.8) 0%,
        rgba(0, 175, 144, 0.8) 100%
      );
    `}

      &:hover {
        background: linear-gradient(
          225deg,
          rgba(163, 161, 0, 0.8) 0%,
          rgba(0, 175, 144, 0.8) 100%
        );
    `}
`

export {Badge}
