'use client'
import Image from 'next/image'
import {useState} from 'react'

import {Modal} from '@/components'

import {MediaCard} from '../molecules/MediaCard'

const bookByYears = {
  2022: [
    {
      name: 'Sapiens',
      src: 'https://m.media-amazon.com/images/I/41yu2qXhXXL._SX324_BO1,204,203,200_.jpg',
      ry: 2022,
      point: 8.5,
    },
  ],
  2023: [
    {
      name: 'Atomic Habits',
      src: 'https://m.media-amazon.com/images/I/41E0EMHIKpL._SX258_BO1,204,203,200_QL70_ML2_.jpg',
      ry: 2023, // 06.2023
      point: 8.5,
    },
    {
      name: 'Steal Like an Artist',
      src: 'https://m.media-amazon.com/images/I/61W8un34n4L._AC_UF1000,1000_QL80_.jpg',
      ry: 2023, // 20.06.2023
      point: 7.5,
    },
  ],
}

export function BooksTemplate() {
  const [image, setImage] = useState('')

  return (
    <div className="flex flex-col gap-8">
      <blockquote className="text-xs italic">
        Not all books I read are listed here. I only list books that I love and
        suggest to others with the year I read them.
      </blockquote>
      <Modal isOpen={!!image} setIsOpen={setImage}>
        <Image
          src={image}
          alt="Book cover"
          width={1000}
          height={1000}
          className="w-auto h-full object-contain origin-center rounded-md"
        />
      </Modal>
      {Object.entries(bookByYears)
        .sort(() => -1)
        .map(([year, books]) => (
          <div key={year}>
            <h2 className="text-2xl text-white underline underline-offset-4 mb-4">
              {year}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {books.map(book => (
                <MediaCard
                  media={book}
                  onClick={() => setImage(book.src)}
                  key={book.name + book.ry}
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  )
}
