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
      return css`var(--color-pastel2); &:hover { background: var(--color-pastel2); }`
    } else if (isActive) {
      return css`rgba(62, 76, 103, 1)`
    } else if (cool) {
      return css`linear-gradient(225deg, var(--color-pastel2) 0%, var(--color-pastel7) 100%); &:hover {background: var(--color-pastel2);}`
    }
  }};
`

export {Badge}
