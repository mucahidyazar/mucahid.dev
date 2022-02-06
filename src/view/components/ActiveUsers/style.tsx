import styled from 'styled-components'

import {BreakpointSize} from '@/constants'
import {Title} from '@/ui'

const ActiveUsersWrapper = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5rem;
`

const ActiveUsers = styled.div`
  display: flex;
  filter: opacity(0.5);
  position: relative;
  height: 4rem;

  &:hover {
    filter: opacity(1);
  }
`
const ActiveUser = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #e9b258;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  border: 2px solid #e9b258;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: ${({index}) => index * 32}px;
  transform: translateY(-50%);
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: brightness(0.8);
    z-index: ${({index}) => index + 1 * 10};
    transform: translateY(-50%) scale(1.4);
  }
`

export {ActiveUsersWrapper, ActiveUsers, ActiveUser}
