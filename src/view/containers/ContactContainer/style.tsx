import {Card} from '@/ui/index'
import styled from 'styled-components'
import {BreakpointSize} from '@/constants/index'
import {Button, Input, Textarea} from '@/ui/index'

const SummarySection = styled.div`
  max-width: 100%;
`

const SectionsContainer = styled.div`
  display: flex;
  gap: 80px;
  justify-content: space-between;
  margin: 5rem 0;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    padding: 5rem 0;
  }

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    flex-direction: column;
  }

  ${Card.S.CardImage} {
    min-width: 20%;
  }
  ${Card.S.Card} {
    gap: 20px;
    position: relative;
    cursor: pointer;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(62, 76, 103, 0.5);
    }
  }
  ${Card.S.CardContentText} {
    -webkit-line-clamp: 2;
  }
`

const SectionOneContainer = styled.div`
  width: 50%;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    width: 100%;
  }
`

const SectionTwoContainer = styled.div`
  width: 50%;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    width: 100%;
  }
`

const ConnectionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 5rem;
`
const ConnectionIcon = styled.a`
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
`
const ConnectMetamaskButtonText = styled.p`
  text-transform: uppercase;
  font-size: var(--font-size-l);
  font-weight: 700;
`

const MessagesContainer = styled.div`
  height: 600px;
  overflow: auto;
`
const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  height: 600px;
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

export {
  SummarySection,
  SectionsContainer,
  SectionOneContainer,
  SectionTwoContainer,
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
}
