import React from 'react'
import Image from 'next/image'

import {Modal} from '@/ui'
import {ModalType} from '@/constants'
import {makeSelectSelectedNews} from '@/store/home'
import {useTypedSelector} from '@/store/index'

import * as S from './style'

interface INewsModalProps {}

const NewsModal: React.FC<INewsModalProps> = () => {
  const selectedNews = useTypedSelector(makeSelectSelectedNews)

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
        {selectedNews && <S.ModalMainNews news={selectedNews} isModal />}
      </S.ModalNews>
    </Modal>
  )
}

NewsModal.propTypes = {}

NewsModal.defaultProps = {}

export default NewsModal
