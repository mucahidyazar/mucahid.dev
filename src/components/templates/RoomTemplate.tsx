'use client'
import Image from 'next/image'
import {useState} from 'react'

import {Modal} from '@/components'

import {MediaCard} from '../molecules/MediaCard'

const roomsByOptions = {
  Setup: [
    {
      name: 'Room (Overall)',
      src: '/img/room/room-0.jpeg',
      ry: 2022,
    },
    {
      name: 'My desk',
      src: '/img/room/room-1.jpeg',
      ry: 2022,
    },
    {
      name: 'My coffee table',
      src: '/img/room/room-2.jpeg',
      ry: 2022,
    },
    {
      name: 'My shelf',
      src: '/img/room/room-3.jpeg',
      ry: 2022,
    },
    {
      name: 'My wall and furniture',
      src: '/img/room/room-4.jpeg',
      ry: 2022,
    },
  ],
}

export function RoomTemplate() {
  const [image, setImage] = useState('')

  return (
    <div className="flex flex-col gap-8">
      <Modal isOpen={!!image} setIsOpen={setImage}>
        <Image
          src={image}
          alt="Room Image"
          width={1000}
          height={1000}
          className="w-auto h-full object-contain origin-center rounded-md"
        />
      </Modal>

      {Object.entries(roomsByOptions)
        .sort(() => -1)
        .map(([year, rooms]) => (
          <div key={year}>
            <h2 className="text-2xl text-white underline underline-offset-4 mb-4">
              {year}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {rooms.map(room => (
                <MediaCard
                  media={room}
                  onClick={() => setImage(room.src)}
                  key={room.name + room.ry}
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  )
}
