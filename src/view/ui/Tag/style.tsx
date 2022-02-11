import styled from 'styled-components'

const Tag = styled.div`
  padding: 0.1rem 0.4rem;
  font-size: var(--font-size-xs);
  display: flex;
  align-items: center;
  border-radius: 4px;
  width: max-content;

  &:nth-child(1n + 1) {
    background: #3b5998;
  }
  &:nth-child(1n + 2) {
    background: #1da1f2;
  }
  &:nth-child(1n + 3) {
    background: #e1306c;
  }
  &:nth-child(1n + 4) {
    background: #0077b5;
  }
  &:nth-child(1n + 5) {
    background: #00ab6c;
  }
  &:nth-child(1n + 6) {
    background: #333;
  }
  &:nth-child(1n + 7) {
    background: #000000;
  }
  &:nth-child(1n + 8) {
    background: #000000;
  }
  &:nth-child(1n + 9) {
    background: #7289da;
  }
  &:nth-child(1n + 10) {
    background: #f48024;
  }
`

export {Tag}
