import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import {useSelector} from 'react-redux'

import {Modal} from '@/ui'
import {ModalType} from '@/constants'
import {makeSelectSelectedNews} from '@/store/home'

import * as S from './style'

interface INewsModalProps {}

const NewsModal: React.FC<INewsModalProps> = () => {
  const selectedNews = useSelector(makeSelectSelectedNews)

  return (
    <Modal name={ModalType.NEWS_MODAL}>
      <S.NewsHeader>
        <S.NewsHeaderImage>
          <Image
            src="/svgs/thenewyorktimes.svg"
            alt="The New York Times"
            layout="fill"
          />
        </S.NewsHeaderImage>
        <S.NewsHeaderDescription>
          <S.NewsHeaderDate>Tarih : 01.01.2020</S.NewsHeaderDate>
          <S.NewsHeaderMainTheme>All is well.</S.NewsHeaderMainTheme>
          <S.NewsHeaderTotalNews>Total News: 7</S.NewsHeaderTotalNews>
        </S.NewsHeaderDescription>
      </S.NewsHeader>
      <S.ModalNews>
        <S.ModalMainNews news={selectedNews} isModal />
      </S.ModalNews>
    </Modal>
  )
}

NewsModal.propTypes = {}

NewsModal.defaultProps = {}

export default NewsModal
