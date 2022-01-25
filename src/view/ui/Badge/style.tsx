import styled, {css} from 'styled-components'
import {LinkPreview as StyledLinkPreview} from '@dhaiwat10/react-link-preview'

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
      background: rgba(62, 76, 103, 0.8);
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

const LinkPreview = styled(StyledLinkPreview)`
  display: flex;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.9) !important;
  width: 600px;
  height: 220px;
  overflow: hidden;

  &:hover {
    background: rgba(0, 0, 0, 0.95) !important;
  }

  & > div {
    object-fit: cover;
    border-radius: 0;
  }

  & h3 {
    color: var(--color-white) !important;
    font-size: var(--font-size-xl) !important;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  & span {
    color: #95a1c1 !important;
    font-size: var(--font-size-s);
  }
`

export {Badge, LinkPreview}
