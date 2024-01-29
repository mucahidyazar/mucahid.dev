'use client'
import Image from 'next/image'
import {useState} from 'react'

import {MediaCard} from '../molecules/MediaCard'
import {SheetTable} from '../tables/SheetTable'
import {Dialog, DialogContent, DialogTrigger} from '../ui/dialog'

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

interface RoomTemplateProps {
  sheetData: {
    coffeeSetupData: {
      values: string[][]
    }
    workspaceData: {
      values: string[][]
    }
  }
}
export function RoomTemplate({sheetData}: RoomTemplateProps) {
  const [image, setImage] = useState('')

  return (
    <div className="flex flex-col gap-8">
      <Dialog>
        {image && (
          <DialogContent className="w-fit border-none p-0">
            <Image
              src={image}
              alt="Room Image"
              width={1000}
              height={1000}
              className="h-full w-auto origin-center rounded-md object-contain"
            />
          </DialogContent>
        )}
        {Object.entries(roomsByOptions)
          .sort(() => -1)
          .map(([year, rooms]) => (
            <div key={year}>
              <h2 className="mb-4 text-2xl text-primary-500 underline underline-offset-4">
                {year}
              </h2>
              <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {rooms.map(room => (
                  <DialogTrigger key={room.name + room.ry}>
                    <MediaCard
                      media={room}
                      onClick={() => setImage(room.src)}
                    />
                  </DialogTrigger>
                ))}
              </div>
            </div>
          ))}

        {sheetData && (
          <>
            <SheetTable
              title="Coffee Setup Table"
              data={sheetData.coffeeSetupData.values as string[][]}
            />
            <SheetTable
              title="Workspace Table"
              data={sheetData.workspaceData.values as string[][]}
            />
          </>
        )}
      </Dialog>
    </div>
  )
}
