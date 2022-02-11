import styled, {css} from 'styled-components'

import {BreakpointSize} from '@/constants'
import {Button, Input, Textarea} from '@/ui'

const SummarySection = styled.div`
  max-width: 100%;
`

const ConnectionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 5rem;
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
  margin: 5rem 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(85%);
  }
`

const ConnectMetamaskButton = styled(Button)`
  background: linear-gradient(88.54deg, #41466c 0%, #e1564f 100%);
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
const ContactFormInput = styled(Input)`
  margin-bottom: 1rem;
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
`
interface IContactFormTypeItemProps {
  isSelected: boolean
}
const ContactFormTypeItem = styled.div<IContactFormTypeItemProps>`
  width: 100%;
  text-align: center;
  padding: 20px;
  background-color: rgba(62, 76, 103, 0.5);
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(62, 76, 103, 0.8);
    outline: 2px solid #e9b258;
  }

  ${({isSelected}) =>
    isSelected &&
    css`
      background-color: rgba(62, 76, 103, 0.8);
      outline: 2px solid #e9b258;
    `}
`

export {
  SummarySection,
  ConnectionsContainer,
  ConnectionIcon,
  ConnectMetamaskButtonContainer,
  ConnectMetamaskButton,
  ConnectMetamaskButtonText,
  MessagesContainer,
  BoardContainer,
  BoardItem,
  ContactFormContainer,
  ContactForm,
  ContactFormInput,
  ContactFormTextarea,
  ContactFormButton,
  ContactFormType,
  ContactFormTypeItem,
}
