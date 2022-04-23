import React, {useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import {useTranslation} from 'next-i18next'

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
import {useTypedDispatch, useTypedSelector} from '@/store/index'

import * as S from './style'

const ContactContainer: React.FC = () => {
  const {t} = useTranslation()
  const [type, setType] = useState(ContactType.EMAIL)
  const stats = useTypedSelector(makeSelectStats)
  const contract = useTypedSelector(makeSelectBlockchainContract)
  const blockChainStatus = useTypedSelector(makeSelectBlockchainStatus)
  const messages = useTypedSelector(makeSelectBlockchainMessageMessages)
  const board = useTypedSelector(makeSelectBlockchainBoardMessages)
  const emailStatus = useTypedSelector(makeSelectEmailStatus)
  const dispatch = useTypedDispatch()
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
          <S.StatDescription>{t('totalMessages')}</S.StatDescription>
        </S.Stat>
        <S.Stat>
          <S.StatIcon name="ethereum" size={48} />
          <S.StatTitle level={5}>{stats.totalGiveaways}</S.StatTitle>
          <S.StatDescription>{t('totalGiveaways')}</S.StatDescription>
        </S.Stat>
        <S.Stat>
          <S.StatIcon name="coffee" size={48} />
          <S.StatTitle level={5}>{stats.totalCoffee}</S.StatTitle>
          <S.StatDescription>{t('totalCoffee')}</S.StatDescription>
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
              {t('connectMetamask')}
            </S.ConnectMetamaskButtonText>
          </S.ConnectMetamaskButton>
        </S.ConnectMetamaskButtonContainer>
      )}
      <Sections
        sectionOne={
          <Section
            title={t('messagesSectionTitle')}
            subtitle={t('messagesSectionDescription')}
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
            title={t('boardSectionTitle')}
            subtitle={t('boardSectionDescription')}
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
              {t('email')}
            </S.ContactFormTypeItem>
            <S.ContactFormTypeItem
              onClick={() => setType(ContactType.MESSAGE)}
              isSelected={ContactType.MESSAGE === type}
            >
              {t('message')}
            </S.ContactFormTypeItem>
            <S.ContactFormTypeItem
              onClick={() => setType(ContactType.BOARD)}
              isSelected={ContactType.BOARD === type}
            >
              {t('board')}
            </S.ContactFormTypeItem>
          </S.ContactFormType>
          {type === ContactType.MESSAGE && (
            <S.ContactFormWarning>
              {t('messageSupportWarning')}
            </S.ContactFormWarning>
          )}
          {type === ContactType.BOARD && (
            <S.ContactFormWarning>
              {t('boardSupportWarning')}
            </S.ContactFormWarning>
          )}
          <S.ContactFormInput name="title" placeholder="Title" />
          <S.ContactFormTextarea name="content" placeholder="Message" />
          <S.ContactFormButton>
            {emailStatus === Status.LOADING ? t('loading') : t('send')}
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
