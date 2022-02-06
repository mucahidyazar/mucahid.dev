import React from 'react'
import Image from 'next/image'
import type {NextComponentType} from 'next'
import {useRouter} from 'next/router'
import {makeSelectActiveUsers} from '@/store/general'
import {useSelector} from 'react-redux'

import * as S from './style'

const ActiveUsers: NextComponentType = () => {
  const activeUsers = useSelector(makeSelectActiveUsers)
  // get a random between 1 and 7
  const randomNumber = Math.floor(Math.random() * 7) + 1
  const randomDefaultImage = `/gif/profile/gif-${randomNumber}.gif`

  if (activeUsers.length < 2) {
    return null
  }

  return (
    <S.ActiveUsersWrapper>
      <S.ActiveUsers>
        {activeUsers.map((user, index) => (
          <S.ActiveUser index={index} key={user.id}>
            <Image
              src={user.image ? user.image : randomDefaultImage}
              alt="user"
              layout="fill"
            />
          </S.ActiveUser>
        ))}
      </S.ActiveUsers>
    </S.ActiveUsersWrapper>
  )
}

ActiveUsers.propTypes = {}

ActiveUsers.defaultProps = {}

export default ActiveUsers
