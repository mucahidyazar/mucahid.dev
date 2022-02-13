import styled, {css} from 'styled-components'

interface IBadge {
  isActive?: boolean
  cool?: boolean
}
const Badge = styled.div<IBadge>`
  padding: 0.5rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 18px;
  background: var(--color-blue-transparent);
  width: max-content;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: rgba(62, 76, 103, 0.8);
  }

  background: ${({isActive, cool}) => {
    if (cool && isActive) {
      return css`linear-gradient(225deg, rgba(163, 161, 0, 0.8) 0%, rgba(0, 175, 144, 0.8) 100%); &:hover {background: linear-gradient(225deg, rgba(163, 161, 0, 0.8) 0%, rgba(0, 175, 144, 0.8) 100%);}`
    } else if (isActive) {
      return css`rgba(62, 76, 103, 1)`
    } else if (cool) {
      return css`linear-gradient(225deg, rgba(163, 161, 0, 0.5) 0%, rgba(0, 175, 144, 0.5) 100%); &:hover {background: linear-gradient(225deg,rgba(163, 161, 0, 0.8) 0%,rgba(0, 175, 144, 0.8) 100%);}`
    }
  }};
`

export {Badge}
