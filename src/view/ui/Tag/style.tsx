import styled from 'styled-components'

const Tag = styled.div`
  padding: 0.1rem 0.4rem;
  font-size: var(--font-size-xs);
  display: flex;
  align-items: center;
  border-radius: 4px;
  width: max-content;

  &:nth-child(10n + 1) {
    background: var(--color-facebook);
  }
  &:nth-child(10n + 2) {
    background: var(--color-twitter);
  }
  &:nth-child(10n + 3) {
    background: var(--color-instagram);
  }
  &:nth-child(10n + 4) {
    background: var(--color-youtube);
  }
  &:nth-child(10n + 5) {
    background: var(--color-linkedin);
  }
  &:nth-child(10n + 6) {
    background: var(--color-github);
  }
  &:nth-child(10n + 7) {
    background: var(--color-black);
  }
  &:nth-child(10n + 8) {
    background: var(--color-black);
  }
  &:nth-child(10n + 9) {
    background: var(--color-discord);
  }
  &:nth-child(10n + 10) {
    background: var(--color-stackoverflow);
  }
`

export {Tag}
