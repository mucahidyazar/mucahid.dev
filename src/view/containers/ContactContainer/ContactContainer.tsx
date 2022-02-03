import React, {useRef, useState} from 'react'
import type {NextComponentType} from 'next'
import Image from 'next/image'
import {useDispatch, useSelector} from 'react-redux'

import {Sections, Section, LoadingWrapper} from '@/components'
import {Card, Icon} from '@/ui'
import {socialMedias} from '@/data'
import {
  makeSelectBoard,
  makeSelectEmailStatus,
  makeSelectMessages,
  sendEmail,
} from '@/store/contact'
import {ContactType, Status} from '@/constants'

import * as S from './style'

const ContactContainer: NextComponentType = () => {
  const [type, setType] = useState(ContactType.EMAIL)
  const messages = useSelector(makeSelectMessages)
  const board = useSelector(makeSelectBoard)
  const emailStatus = useSelector(makeSelectEmailStatus)
  const dispatch = useDispatch()
  const contactFormRef = useRef()

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    // const ether = form.get('ether')
    const title = form.get('title')
    const content = form.get('content')

    if (title && type && content) {
      const data = {
        title,
        content,
        type,
      }
      dispatch(sendEmail(data))
      contactFormRef?.current?.reset()
    }
  }

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
              {messages?.map((item: any) => (
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
              {board?.map((item: any) => (
                <S.BoardItem key={item.id} />
              ))}
            </S.BoardContainer>
          </Section>
        }
      />
      <S.ContactFormContainer>
        <S.ContactForm onSubmit={onSubmitHandler} ref={contactFormRef}>
          <S.ContactFormType>
            <S.ContactFormTypeItem
              onClick={() => setType(ContactType.MESSAGE)}
              isSelected={ContactType.MESSAGE === type}
            >
              Message
            </S.ContactFormTypeItem>
            <S.ContactFormTypeItem
              onClick={() => setType(ContactType.BOARD)}
              isSelected={ContactType.BOARD === type}
            >
              Board
            </S.ContactFormTypeItem>
            <S.ContactFormTypeItem
              onClick={() => setType(ContactType.EMAIL)}
              isSelected={ContactType.EMAIL === type}
            >
              Email
            </S.ContactFormTypeItem>
          </S.ContactFormType>
          {type !== ContactType.EMAIL && (
            <S.ContactFormInput name="ether" placeholder="0.00000 ether" />
          )}
          <S.ContactFormInput name="title" placeholder="Title" />
          <S.ContactFormTextarea name="content" placeholder="Message" />
          <S.ContactFormButton>
            {emailStatus === Status.LOADING ? 'Loading' : 'Send'}
          </S.ContactFormButton>
          <LoadingWrapper isLoading={emailStatus === Status.LOADING} />
        </S.ContactForm>
      </S.ContactFormContainer>
    </>
  )
}

export default ContactContainer
