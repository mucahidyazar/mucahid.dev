'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Modal } from '@/components'

export default function Room() {
  const [image, setImage] = useState('')

  return (
    <div id="room">
      <div className="grid grid-cols-12 grid-rows-2 gap-4">
        <Modal isOpen={!!image} setIsOpen={setImage}>
          <Image
            src={`/img/room/${image}.jpeg`}
            alt="Room Image 0"
            width={1000}
            height={1000}
            className="col-start-1 col-end-10 row-start-1 row-end-2 w-auto h-full object-contain origin-center rounded-md"
          />
        </Modal>
        <Image
          src="/img/room/room-0.jpeg"
          alt="Room Image 0"
          width={1000}
          height={1000}
          className="col-start-1 col-end-10 row-start-1 row-end-2 w-full h-80 object-cover rounded-sm hover:outline-1 hover:outline-primary hover:outline-offset-2 hover:outline duration-150 hover:cursor-zoom-in"
          onClick={() => setImage('room-0')}
        />
        <Image
          src="/img/room/room-1.jpeg"
          alt="Room Image 0"
          width={1000}
          height={1000}
          className="col-start-10 col-end-13 row-start-1 row-end-3 h-full w-auto object-cover rounded-sm hover:outline-1 hover:outline-primary hover:outline-offset-2 hover:outline duration-150 hover:cursor-zoom-in"
          onClick={() => setImage('room-1')}
        />
        <Image
          src="/img/room/room-2.jpeg"
          alt="Room Image 0"
          width={1000}
          height={1000}
          className="col-start-1 col-end-4 row-start-2 row-end-3 h-full w-full object-cover rounded-sm hover:outline-1 hover:outline-primary hover:outline-offset-2 hover:outline duration-150 hover:cursor-zoom-in"
          onClick={() => setImage('room-2')}
        />
        <Image
          src="/img/room/room-3.jpeg"
          alt="Room Image 0"
          width={1000}
          height={1000}
          className="col-start-4 col-end-7 row-start-2 row-end-3 h-full w-full object-cover rounded-sm hover:outline-1 hover:outline-primary hover:outline-offset-2 hover:outline duration-150 hover:cursor-zoom-in"
          onClick={() => setImage('room-3')}
        />
        <Image
          src="/img/room/room-4.jpeg"
          alt="Room Image 0"
          width={1000}
          height={1000}
          className="col-start-7 col-end-10 row-start-2 row-end-3 h-full w-full object-cover rounded-sm hover:outline-1 hover:outline-primary hover:outline-offset-2 hover:outline duration-150 hover:cursor-zoom-in"
          onClick={() => setImage('room-4')}
        />
      </div>
    </div>
  )
}
