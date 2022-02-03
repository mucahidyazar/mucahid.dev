import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

import {Modal} from '@/ui'
import {ModalType} from '@/constants'

import * as S from './style'

interface IAllNewsModalProps {}

const AllNewsModal: React.FC<IAllNewsModalProps> = () => {
  return (
    <Modal name={ModalType.ALL_NEWS_MODAL}>
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
        <S.ModalMainNews />
        <S.ModalOldNews>
          <S.ModalOldNewsTitle>
            When darkness overspreads my eyes
          </S.ModalOldNewsTitle>
          <S.ModalOldNewsDescription>
            by JOHANN WOLFGANG VON GOETHE
          </S.ModalOldNewsDescription>
          <S.ModalOldNewsDate>02.03.2019, 19:08</S.ModalOldNewsDate>
          <S.ModalOldNewsContent>
            When, while the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees, and but a few stray gleams steal into the inner
            sanctuary, I throw myself down among the tall grass by the trickling
            stream; and, as I lie close to the earth, a thousand unknown plants
            are noticed by me: when I hear the buzz of the little world among
            the stalks, and grow familiar with the countless indescribable forms
            of the insects and flies, then I feel the presence of the Almighty,
            who formed us in his own image, and the breath of that universal
            love which bears and sustains us, as it floats around us in an
            eternity of bliss; and then, my friend, when darkness overspreads my
            eyes, and heaven and earth seem to dwell in my soul and absorb its
            power, like the form of a beloved mistress, then I often think with
            longing, Oh, would I could describe these conceptions, could impress
            upon paper all that is living so full and warm within me, that it
            might be the mirror of my soul, as my soul is the mirror of the
            infinite God!
          </S.ModalOldNewsContent>
        </S.ModalOldNews>
        <S.ModalOldNews>
          <S.ModalOldNewsTitle>
            When darkness overspreads my eyes
          </S.ModalOldNewsTitle>
          <S.ModalOldNewsDescription>
            by JOHANN WOLFGANG VON GOETHE
          </S.ModalOldNewsDescription>
          <S.ModalOldNewsDate>02.03.2019, 19:08</S.ModalOldNewsDate>
          <S.ModalOldNewsContent>
            When, while the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees, and but a few stray gleams steal into the inner
            sanctuary, I throw myself down among the tall grass by the trickling
            stream; and, as I lie close to the earth, a thousand unknown plants
            are noticed by me: when I hear the buzz of the little world among
            the stalks, and grow familiar with the countless indescribable forms
            of the insects and flies, then I feel the presence of the Almighty,
            who formed us in his own image, and the breath of that universal
            love which bears and sustains us, as it floats around us in an
            eternity of bliss; and then, my friend, when darkness overspreads my
            eyes, and heaven and earth seem to dwell in my soul and absorb its
            power, like the form of a beloved mistress, then I often think with
            longing, Oh, would I could describe these conceptions, could impress
            upon paper all that is living so full and warm within me, that it
            might be the mirror of my soul, as my soul is the mirror of the
            infinite God!
          </S.ModalOldNewsContent>
        </S.ModalOldNews>
        <S.ModalOldNews>
          <S.ModalOldNewsTitle>
            When darkness overspreads my eyes
          </S.ModalOldNewsTitle>
          <S.ModalOldNewsDescription>
            by JOHANN WOLFGANG VON GOETHE
          </S.ModalOldNewsDescription>
          <S.ModalOldNewsDate>02.03.2019, 19:08</S.ModalOldNewsDate>
          <S.ModalOldNewsContent>
            When, while the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees, and but a few stray gleams steal into the inner
            sanctuary, I throw myself down among the tall grass by the trickling
            stream; and, as I lie close to the earth, a thousand unknown plants
            are noticed by me: when I hear the buzz of the little world among
            the stalks, and grow familiar with the countless indescribable forms
            of the insects and flies, then I feel the presence of the Almighty,
            who formed us in his own image, and the breath of that universal
            love which bears and sustains us, as it floats around us in an
            eternity of bliss; and then, my friend, when darkness overspreads my
            eyes, and heaven and earth seem to dwell in my soul and absorb its
            power, like the form of a beloved mistress, then I often think with
            longing, Oh, would I could describe these conceptions, could impress
            upon paper all that is living so full and warm within me, that it
            might be the mirror of my soul, as my soul is the mirror of the
            infinite God!
          </S.ModalOldNewsContent>
        </S.ModalOldNews>
        <S.ModalOldNews>
          <S.ModalOldNewsTitle>
            When darkness overspreads my eyes
          </S.ModalOldNewsTitle>
          <S.ModalOldNewsDescription>
            by JOHANN WOLFGANG VON GOETHE
          </S.ModalOldNewsDescription>
          <S.ModalOldNewsDate>02.03.2019, 19:08</S.ModalOldNewsDate>
          <S.ModalOldNewsContent>
            When, while the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees, and but a few stray gleams steal into the inner
            sanctuary, I throw myself down among the tall grass by the trickling
            stream; and, as I lie close to the earth, a thousand unknown plants
            are noticed by me: when I hear the buzz of the little world among
            the stalks, and grow familiar with the countless indescribable forms
            of the insects and flies, then I feel the presence of the Almighty,
            who formed us in his own image, and the breath of that universal
            love which bears and sustains us, as it floats around us in an
            eternity of bliss; and then, my friend, when darkness overspreads my
            eyes, and heaven and earth seem to dwell in my soul and absorb its
            power, like the form of a beloved mistress, then I often think with
            longing, Oh, would I could describe these conceptions, could impress
            upon paper all that is living so full and warm within me, that it
            might be the mirror of my soul, as my soul is the mirror of the
            infinite God!
          </S.ModalOldNewsContent>
        </S.ModalOldNews>
        <S.ModalOldNews>
          <S.ModalOldNewsTitle>
            When darkness overspreads my eyes
          </S.ModalOldNewsTitle>
          <S.ModalOldNewsDescription>
            by JOHANN WOLFGANG VON GOETHE
          </S.ModalOldNewsDescription>
          <S.ModalOldNewsDate>02.03.2019, 19:08</S.ModalOldNewsDate>
          <S.ModalOldNewsContent>
            When, while the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees, and but a few stray gleams steal into the inner
            sanctuary, I throw myself down among the tall grass by the trickling
            stream; and, as I lie close to the earth, a thousand unknown plants
            are noticed by me: when I hear the buzz of the little world among
            the stalks, and grow familiar with the countless indescribable forms
            of the insects and flies, then I feel the presence of the Almighty,
            who formed us in his own image, and the breath of that universal
            love which bears and sustains us, as it floats around us in an
            eternity of bliss; and then, my friend, when darkness overspreads my
            eyes, and heaven and earth seem to dwell in my soul and absorb its
            power, like the form of a beloved mistress, then I often think with
            longing, Oh, would I could describe these conceptions, could impress
            upon paper all that is living so full and warm within me, that it
            might be the mirror of my soul, as my soul is the mirror of the
            infinite God!
          </S.ModalOldNewsContent>
        </S.ModalOldNews>
        <S.ModalOldNews>
          <S.ModalOldNewsTitle>
            When darkness overspreads my eyes
          </S.ModalOldNewsTitle>
          <S.ModalOldNewsDescription>
            by JOHANN WOLFGANG VON GOETHE
          </S.ModalOldNewsDescription>
          <S.ModalOldNewsDate>02.03.2019, 19:08</S.ModalOldNewsDate>
          <S.ModalOldNewsContent>
            When, while the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees, and but a few stray gleams steal into the inner
            sanctuary, I throw myself down among the tall grass by the trickling
            stream; and, as I lie close to the earth, a thousand unknown plants
            are noticed by me: when I hear the buzz of the little world among
            the stalks, and grow familiar with the countless indescribable forms
            of the insects and flies, then I feel the presence of the Almighty,
            who formed us in his own image, and the breath of that universal
            love which bears and sustains us, as it floats around us in an
            eternity of bliss; and then, my friend, when darkness overspreads my
            eyes, and heaven and earth seem to dwell in my soul and absorb its
            power, like the form of a beloved mistress, then I often think with
            longing, Oh, would I could describe these conceptions, could impress
            upon paper all that is living so full and warm within me, that it
            might be the mirror of my soul, as my soul is the mirror of the
            infinite God!
          </S.ModalOldNewsContent>
        </S.ModalOldNews>
        <S.ModalOldNews>
          <S.ModalOldNewsTitle>
            When darkness overspreads my eyes
          </S.ModalOldNewsTitle>
          <S.ModalOldNewsDescription>
            by JOHANN WOLFGANG VON GOETHE
          </S.ModalOldNewsDescription>
          <S.ModalOldNewsDate>02.03.2019, 19:08</S.ModalOldNewsDate>
          <S.ModalOldNewsContent>
            When, while the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees, and but a few stray gleams steal into the inner
            sanctuary, I throw myself down among the tall grass by the trickling
            stream; and, as I lie close to the earth, a thousand unknown plants
            are noticed by me: when I hear the buzz of the little world among
            the stalks, and grow familiar with the countless indescribable forms
            of the insects and flies, then I feel the presence of the Almighty,
            who formed us in his own image, and the breath of that universal
            love which bears and sustains us, as it floats around us in an
            eternity of bliss; and then, my friend, when darkness overspreads my
            eyes, and heaven and earth seem to dwell in my soul and absorb its
            power, like the form of a beloved mistress, then I often think with
            longing, Oh, would I could describe these conceptions, could impress
            upon paper all that is living so full and warm within me, that it
            might be the mirror of my soul, as my soul is the mirror of the
            infinite God!
          </S.ModalOldNewsContent>
        </S.ModalOldNews>
      </S.ModalNews>
    </Modal>
  )
}

AllNewsModal.propTypes = {}

AllNewsModal.defaultProps = {}

export default AllNewsModal
