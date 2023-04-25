'use client'
import {useCallback, useState} from 'react'
import Carousel, {Modal, ModalGateway} from 'react-images'
import Gallery from 'react-photo-gallery'

const photos = [
  {
    src: '/img/room/room-0.jpeg',
    width: 4,
    height: 3,
  },
  {
    src: '/img/room/room-1.jpeg',
    width: 1,
    height: 1,
  },
  {
    src: '/img/room/room-2.jpeg',
    width: 3,
    height: 4,
  },
  {
    src: '/img/room/room-3.jpeg',
    width: 3,
    height: 4,
  },
  {
    src: '/img/room/room-4.jpeg',
    width: 3,
    height: 4,
  },
]

export function RoomTemplate() {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((_event: any, {index}: {index: number}) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const AnyModalGateway = ModalGateway as any

  return (
    <div id="room-template">
      <Gallery photos={photos} onClick={openLightbox} />
      <AnyModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                source: x.src,
              }))}
            />
          </Modal>
        ) : null}
      </AnyModalGateway>
    </div>
  )
}
