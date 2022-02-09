import React, {useEffect, useRef, useState} from 'react'
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
import {
  connectBlockchain,
  getAllMessages,
  makeSelectBlockchainAccount,
  makeSelectBlockchainContract,
  makeSelectBlockchainStatus,
} from '@/store/blockchain'

import * as S from './style'

const ContactContainer: NextComponentType = () => {
  const [type, setType] = useState(ContactType.EMAIL)
  const contract = useSelector(makeSelectBlockchainContract)
  const blockChainStatus = useSelector(makeSelectBlockchainStatus)
  const blockChainAccount = useSelector(makeSelectBlockchainAccount)
  const messages = useSelector(makeSelectMessages)
  const board = useSelector(makeSelectBoard)
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
        let gasLimit = 3000000
        contract.methods
          .addToBlockchain(blockChainAccount, title, content, type)
          .send({
            gasLimit,
            from: blockChainAccount,
            // value = 0.005 ether
            // 1 eth = 1000000000000000000,
            value: 500000000000000000,
          })
          .then((/*receipt*/) => {
            dispatch(getAllMessages())
          })
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
      {blockChainStatus !== Status.OK && (
        <S.ConnectMetamaskButtonContainer>
          <S.ConnectMetamaskButton>
            <Image
              src="/svgs/metamask-icon.svg"
              alt="metamask-icon"
              width={60}
              height={60}
            />
            (
            <S.ConnectMetamaskButtonText onClick={connectMetaMaskHandler}>
              Connect Metamask
            </S.ConnectMetamaskButtonText>
            )
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
            <S.ContactFormInput
              type="number"
              min="0"
              name="ether"
              placeholder="0.00000 ether"
            />
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
