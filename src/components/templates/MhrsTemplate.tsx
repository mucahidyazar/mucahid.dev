'use client'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

import {MhrsSearchForm} from '../forms/MhrsSearchForm'
import {UserCard} from '../molecules/UserCard'

// let socket: any

interface MhrsTemplateProps {
  mhrsToken: string
}
export function MhrsTemplate({mhrsToken}: MhrsTemplateProps) {
  // useEffect(() => {
  //   socketInitializer()

  //   return () => {
  //     socket.disconnect()
  //   }
  // }, [])

  // async function socketInitializer() {
  //   // localhost:8001/api/v1/socket
  //   socket = io('http://localhost:8001', {
  //     transports: ['websocket'],
  //   })
  // }

  const {data: meData} = useQuery({
    queryKey: ['me'],
    queryFn: () =>
      axios.get('/api/mhrs/me', {
        headers: {
          Authorization: `Bearer ${mhrsToken}`,
        },
      }),
    select: data => data.data,
  })
  const firstName = meData?.data.adi
  const lastName = meData?.data.soyadi
  const age = meData?.data.yas

  return (
    <div className="flex gap-4">
      <div className="flex flex-col">
        <UserCard firstName={firstName} lastName={lastName} age={age} />
        <MhrsSearchForm />
      </div>
      <ul className="border border-solid border-indigo-500 border-opacity-30 w-full rounded-md h-60 bg-indigo-500 bg-opacity-10 overflow-y-auto p-1 flex flex-col gap-1">
        {/* {urlShortenerData?.data.map((data: any) => (
          <UrlShortenerListItem key={data._id} data={data} />
        ))} */}
      </ul>
    </div>
  )
}
