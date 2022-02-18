import styled, {css} from 'styled-components'

import {BreakpointSize} from '@/constants'
import {Button, Input, Textarea, Title, Icon, Subtitle} from '@/ui'

import {Sections} from '../../components/Sections/style'

const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 10rem;
`
const Stat = styled.div`
  width: 200px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(144, 19, 254, 0.15);
  box-shadow: 0 8px 32px 8px rgba(144, 19, 254, 0.2);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  animation: statAnimation 10s ease-in-out infinite alternate;

  // keyframes box-shadow, background, backdrop-filter and -webkit-backdrop-filter
  @keyframes statAnimation {
    0% {
      box-shadow: 0 4px 24px 6px rgba(181, 72, 69, 0.2);
      background: rgba(181, 72, 69, 0.15);
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
    }
    25% {
      box-shadow: 0 4px 32px 8px rgba(181, 72, 69, 0.3);
      background: rgba(181, 72, 69, 0.25);
      backdrop-filter: blur(1px);
      -webkit-backdrop-filter: blur(1px);
    }
    50% {
      box-shadow: 0 4px 24px 6px rgba(144, 19, 254, 0.2);
      background: rgba(144, 19, 254, 0.15);
    }
    75% {
      box-shadow: 0 4px 32px 8px rgba(144, 19, 254, 0.3);
      background: rgba(144, 19, 254, 0.25);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }
  }
`
const StatIcon = styled(Icon)``
const StatTitle = styled(Title)`
  font-size: var(--font-size-2xl);
  font-weight: 200;
  margin: 1.5rem 0;
`
const StatDescription = styled.p`
  text-transform: uppercase;
  color: var(--color-gray);
  text-align: center;
`

const ConnectionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 10rem;
  overflow-y: auto;
`
interface IConnectionIcon {
  backgroundColor: string
}
const ConnectionIcon = styled.a<IConnectionIcon>`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({backgroundColor}) => backgroundColor};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(85%);
  }
`

const ConnectMetamaskButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(85%);
  }
`

const ConnectMetamaskButton = styled(Button)`
  background: linear-gradient(
    88.54deg,
    var(--color-metamask-dark) 0%,
    var(--color-metamask-light) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  gap: 2rem;
  color: var(--color-white);

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    width: 100%;
  }
`
const ConnectMetamaskButtonText = styled.p`
  text-transform: uppercase;
  font-size: var(--font-size-l);
  font-weight: 700;
`

const MessagesContainer = styled.div`
  max-height: 600px;
  overflow: auto;
`
const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  max-height: 600px;
  overflow: auto;
`
const BoardItem = styled.div`
  width: 100%;
  height: 200px;
  background-color: var(--color-white);
`

const ContactFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5rem 0;
`

const ContactForm = styled.form`
  width: 50%;
  position: relative;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    width: 100%;
  }
`
const ContactFormWarning = styled(Subtitle)`
  text-align: center;
`
const ContactFormInput = styled(Input)`
  margin: 1rem 0;
`
const ContactFormTextarea = styled(Textarea)`
  margin-bottom: 1rem;
`
const ContactFormButton = styled(Button)`
  width: 100%;
`

const ContactFormType = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 0.5rem;
`
interface IContactFormTypeItemProps {
  isSelected: boolean
}
const ContactFormTypeItem = styled.div<IContactFormTypeItemProps>`
  width: 100%;
  text-align: center;
  padding: 20px;
  background-color: var(--color-blue-transparent);
  cursor: pointer;

  &:hover {
    background-color: rgba(62, 76, 103, 0.8);
    outline: 2px solid var(--color-primary);
  }

  ${({isSelected}) =>
    isSelected &&
    css`
      background-color: rgba(62, 76, 103, 0.8);
      outline: 2px solid var(--color-primary);
    `}
`

const ContactContainer = styled.div`
  ${Sections} {
    margin-top: 0;
  }
`

export {
  ContactContainer,
  Stats,
  Stat,
  StatIcon,
  StatTitle,
  StatDescription,
  ConnectionsContainer,
  ConnectionIcon,
  ConnectMetamaskButtonContainer,
  ConnectMetamaskButton,
  ConnectMetamaskButtonText,
  Sections,
  MessagesContainer,
  BoardContainer,
  BoardItem,
  ContactFormContainer,
  ContactForm,
  ContactFormWarning,
  ContactFormInput,
  ContactFormTextarea,
  ContactFormButton,
  ContactFormType,
  ContactFormTypeItem,
}
