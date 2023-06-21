'use client'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import {useEffect} from 'react'
import {io, Socket} from 'socket.io-client'

import {MhrsSearchForm} from '../forms/MhrsSearchForm'
import {UserCard} from '../molecules/UserCard'

// let socket: any

interface MhrsTemplateProps {
  mhrsToken: string
}
export function MhrsTemplate({mhrsToken}: MhrsTemplateProps) {
  let socket: Socket

  async function socketInitializer() {
    // localhost:8001/api/v1/socket
    await fetch('/api/socket')
    socket = io('', {
      transports: ['websocket'],
      path: '/api/mhrs/socket',
    })
    socket.emit('initialize', {mhrsToken, userId})

    socket.on('authError', clearAuth)
    socket.on('connect', () => {
      console.log('connected')
    })
  }

  const clearAuth = () => {
    Cookies.remove('mhrsToken')
    window.location.reload()
  }
  const {data: meData} = useQuery({
    queryKey: ['me'],
    queryFn: () =>
      axios.get('/api/mhrs/me', {
        headers: {
          Authorization: `Bearer ${mhrsToken}`,
        },
      }),
    select: data => data.data,
    onError: clearAuth,
  })
  const firstName = meData?.data.adi
  const lastName = meData?.data.soyadi
  const age = meData?.data.yas
  const userId = meData?.data.uuid

  useEffect(() => {
    if (userId && mhrsToken) {
      socketInitializer()
    }

    return () => {
      socket?.disconnect()
    }
  }, [userId, mhrsToken])

  return (
    <div className="flex gap-4">
      <div className="flex flex-col">
        <UserCard firstName={firstName} lastName={lastName} age={age} />
        <MhrsSearchForm mhrsToken={mhrsToken} userId={userId} />
      </div>
      <ul className="border border-solid border-indigo-500 border-opacity-30 w-full rounded-md h-60 bg-indigo-500 bg-opacity-10 overflow-y-auto p-1 flex flex-col gap-1">
        {/* {urlShortenerData?.data.map((data: any) => (
          <UrlShortenerListItem key={data._id} data={data} />
        ))} */}
      </ul>
    </div>
  )
}
