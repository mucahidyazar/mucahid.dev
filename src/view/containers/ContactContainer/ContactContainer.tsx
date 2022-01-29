import React from 'react'
import type {NextComponentType} from 'next'
import Image from 'next/image'
import {useSelector} from 'react-redux'

import {Sections, Section} from '@/components'
import {Card, Icon} from '@/ui'

import {socialMedias} from '@/data'
import {makeSelectBoard, makeSelectMessages} from '@/store/contact'

import * as S from './style'

const ContactContainer: NextComponentType = () => {
  const messages = useSelector(makeSelectMessages)
  const board = useSelector(makeSelectBoard)

  return (
    <>
      <S.ConnectionsContainer>
        {socialMedias.map(({id, icon, url, color}) => (
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
          >
            <S.MessagesContainer>
              {messages?.map(item => (
                <Card key={item.id} data={item} type={2} />
              ))}
            </S.MessagesContainer>
          </Section>
        }
        sectionTwo={
          <Section
            title="Board"
            subtitle="This is the board message section. You messages will be shown more clear here."
          >
            <S.BoardContainer>
              {board?.map(item => (
                <S.BoardItem key={item.id} />
              ))}
            </S.BoardContainer>
          </Section>
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
