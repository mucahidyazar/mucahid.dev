import React from 'react'
import type {NextComponentType} from 'next'
import Image from 'next/image'
import {
  Introduction,
  Sections,
  Section,
  SectionHeader,
  Welcome,
  SectionSlider,
  SubscribeBanner,
} from '@/components/index'
import {Window} from '@/layout/index'
import {
  Card,
  Icon,
  PostCard,
  Input,
  Textarea,
  Button,
  ProjectCard,
} from '@/ui/index'
import * as S from './style'
import {socialMedias} from '@/data'
import {useSelector} from 'react-redux'
import {makeSelectBoard, makeSelectMessages} from '@/store/contact'

const ContactContainer: NextComponentType = () => {
  const messages = useSelector(makeSelectMessages)
  const board = useSelector(makeSelectBoard)

  return (
    <>
      <S.ConnectionsContainer>
        {socialMedias.map(({id, name, icon, url, color}) => (
          <S.ConnectionIcon
            key={id}
            backgroundColor={color}
            href={url}
            target="_blank"
          >
            <Icon name={icon} size={24} />
          </S.ConnectionIcon>
        ))}
      </S.ConnectionsContainer>
      <S.ConnectMetamaskButtonContainer>
        <S.ConnectMetamaskButton>
          <Image
            src="/svgs/metamask-icon.svg"
            alt="metamask-icon"
            width={60}
            height={60}
          />
          <S.ConnectMetamaskButtonText>
            Connect Metamask
          </S.ConnectMetamaskButtonText>
        </S.ConnectMetamaskButton>
      </S.ConnectMetamaskButtonContainer>
      <Sections
        sectionOne={
          <Section
            title="Messages"
            subtitle="You can put your message here and you can support me :) I will also support someone who is supporting me :)"
            children={
              <S.MessagesContainer>
                {messages?.map(item => (
                  <Card key={item.id} data={item} type={2} />
                ))}
              </S.MessagesContainer>
            }
          />
        }
        sectionTwo={
          <Section
            title="Board"
            subtitle="This is the board message section. You messages will be shown more clear here."
            children={
              <S.BoardContainer>
                {board?.map(item => (
                  <S.BoardItem key={item.id} />
                ))}
              </S.BoardContainer>
            }
          />
        }
      />
      <S.ContactFormContainer>
        <S.ContactForm>
          <S.ContactFormInput placeholder="Type" />
          <S.ContactFormInput placeholder="0.00000 ether" />
          <S.ContactFormTextarea placeholder="Message" />
          <S.ContactFormButton>Send</S.ContactFormButton>
        </S.ContactForm>
      </S.ContactFormContainer>
    </>
  )
}

export default ContactContainer
