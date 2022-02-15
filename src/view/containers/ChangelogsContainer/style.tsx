import styled from 'styled-components'

import {Title} from '@/ui'
import {titleHover2} from '@/styles'
// import {BreakpointSize} from '@/constants'

const ChangelogsContainer = styled.div``
const Changelog = styled.div`
  &:not(:last-child) {
    margin-bottom: 5rem;
  }
`
const ChangelogTitle = styled(Title)`
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`
const ChangelogText = styled.p`
  color: var(--color-white);
  margin-right: 1rem;
  min-width: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &::after {
    content: ':';
    display: block;
  }
`
const ChangelogName = styled.a`
  ${titleHover2}
`
const ChangelogUrl = styled.a`
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  font-size: var(--font-size-s);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: var(--color-primary);
  }
`
const ChangelogTag = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: var(--font-size-s);

  &:hover {
    color: var(--color-primary);
  }
`

const ChangelogBody = styled.div`
  & h2 {
    font-size: var(--font-size);
    font-weight: 600;
    margin: 1rem 0 0;
  }

  & li {
    font-size: 14px;
  }
`

export {
  ChangelogsContainer,
  Changelog,
  ChangelogTitle,
  ChangelogText,
  ChangelogName,
  ChangelogUrl,
  ChangelogTag,
  ChangelogBody,
}
