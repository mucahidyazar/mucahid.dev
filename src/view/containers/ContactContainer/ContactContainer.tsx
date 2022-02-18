import React, {useEffect, useRef, useState} from 'react'
import type {NextComponentType} from 'next'
import Image from 'next/image'
import {useDispatch, useSelector} from 'react-redux'

import {Sections, Section, LoadingWrapper} from '@/components'
import {Card, Icon} from '@/ui'
import {socialMedias} from '@/data'
import {
  getStats,
  makeSelectEmailStatus,
  makeSelectStats,
  mintMessage,
  sendEmail,
} from '@/store/contact'
import {ContactType, Status} from '@/constants'
import {
  connectBlockchain,
  getAllMessages,
  makeSelectBlockchainBoardMessages,
  makeSelectBlockchainContract,
  makeSelectBlockchainMessageMessages,
  makeSelectBlockchainStatus,
} from '@/store/blockchain'
import {getUserMetamasks} from '@/store/auth'

import * as S from './style'

const ContactContainer: NextComponentType = () => {
  const [type, setType] = useState(ContactType.EMAIL)
  const stats = useSelector(makeSelectStats)
  const contract = useSelector(makeSelectBlockchainContract)
  const blockChainStatus = useSelector(makeSelectBlockchainStatus)
  const messages = useSelector(makeSelectBlockchainMessageMessages)
  const board = useSelector(makeSelectBlockchainBoardMessages)
  const emailStatus = useSelector(makeSelectEmailStatus)
  const dispatch = useDispatch()
  const contactFormRef = useRef({} as HTMLFormElement)

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    // const ether = form.get('ether')
    const title = String(form.get('title'))
    const content = String(form.get('content'))

    if (title && content && type !== undefined) {
      if (type !== ContactType.EMAIL) {
        dispatch(mintMessage(title, content, type))
      } else {
        const data = {
          title,
          content,
          type,
        }
        dispatch(sendEmail(data))
      }
      contactFormRef?.current?.reset()
    }
  }

  const connectMetaMaskHandler = () => {
    dispatch(connectBlockchain())
  }

  useEffect(() => {
    dispatch(getAllMessages())
  }, [dispatch, contract])

  useEffect(() => {
    dispatch(getUserMetamasks())
    dispatch(getStats())
  }, [dispatch])

  return (
    <S.ContactContainer>
      <S.Stats>
        <S.Stat>
          <S.StatIcon name="send" size={48} />
          <S.StatTitle level={5}>{stats.totalMessages}</S.StatTitle>
          <S.StatDescription>Total messages</S.StatDescription>
        </S.Stat>
        <S.Stat>
          <S.StatIcon name="ethereum" size={48} />
          <S.StatTitle level={5}>{stats.totalGiveaways}</S.StatTitle>
          <S.StatDescription>Total giveaways</S.StatDescription>
        </S.Stat>
        <S.Stat>
          <S.StatIcon name="coffee" size={48} />
          <S.StatTitle level={5}>{stats.totalCoffee}</S.StatTitle>
          <S.StatDescription>Total coffee</S.StatDescription>
        </S.Stat>
      </S.Stats>
      {blockChainStatus !== Status.OK && (
        <S.ConnectMetamaskButtonContainer>
          <S.ConnectMetamaskButton>
            <Image
              src="/svgs/metamask-icon.svg"
              alt="metamask-icon"
              width={60}
              height={60}
            />
            <S.ConnectMetamaskButtonText onClick={connectMetaMaskHandler}>
              Connect Metamask
            </S.ConnectMetamaskButtonText>
          </S.ConnectMetamaskButton>
        </S.ConnectMetamaskButtonContainer>
      )}
      <Sections
        sectionOne={
          <Section
            title="Messages"
            subtitle="You can put your message here and you can support me :) I will also support someone who is supporting me :)"
          >
            <S.MessagesContainer>
              {messages?.map((item: any) => (
                <Card
                  key={item.id}
                  data={{name: item.title, text: item.content}}
                  type={2}
                />
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
              onClick={() => setType(ContactType.EMAIL)}
              isSelected={ContactType.EMAIL === type}
            >
              Email
            </S.ContactFormTypeItem>
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
          </S.ContactFormType>
          {type === ContactType.MESSAGE && (
            <S.ContactFormWarning>
              This will cost 0.002 ETH. And also you need to connect with your
              Metamask.
            </S.ContactFormWarning>
          )}
          {type === ContactType.BOARD && (
            <S.ContactFormWarning>
              This will cost 0.004 ETH. And also you need to connect with your
              Metamask.
            </S.ContactFormWarning>
          )}
          <S.ContactFormInput name="title" placeholder="Title" />
          <S.ContactFormTextarea name="content" placeholder="Message" />
          <S.ContactFormButton>
            {emailStatus === Status.LOADING ? 'Loading' : 'Send'}
          </S.ContactFormButton>
          <LoadingWrapper isLoading={emailStatus === Status.LOADING} />
        </S.ContactForm>

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
      </S.ContactFormContainer>
    </S.ContactContainer>
  )
}

export default ContactContainer
