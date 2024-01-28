import Image from 'next/image'

import {bookByYears} from '@/mocks'

function EmptySection() {
  return (
    <div className="rounded bg-gray-500 bg-opacity-60 px-4 py-2">
      <blockquote className="text-right text-sm italic">
        There is no note for this book.
      </blockquote>
    </div>
  )
}

export function BookTemplate({slug}: {slug: string}) {
  const allBooks = Object.values(bookByYears).flat()
  const book = allBooks.find(book => book.slug === slug)

  return (
    <div className="flex flex-col gap-8">
      <blockquote className="text-xs italic">
        Not all books I read are listed here. I only list books that I love and
        suggest to others with the year I read them.
      </blockquote>
      {book && (
        <div className="flex flex-col gap-8 md:flex-row">
          <Image
            src={book?.src}
            alt="Book cover"
            width={1000}
            height={1000}
            className="md:max-w[auto] mx-auto h-full max-w-[200px] origin-center rounded-md object-contain md:min-w-[360px]"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl underline underline-offset-4">
              {book.name}
            </h2>
            <div className="text-xs">
              <p>Point: {book.point}</p>
              <p>Read Year: {book.ry}</p>
              <p>Slug: {book.slug}</p>
            </div>
            <div>
              <p className="text-sm">{book.comment}</p>
            </div>

            <div>
              <h3 className="mb-2 underline underline-offset-4">Notes</h3>
              <EmptySection />
            </div>

            <div>
              <h3 className="mb-2 underline underline-offset-4">Quotes</h3>
              <EmptySection />
            </div>

            <div>
              <h3 className="mb-2 underline underline-offset-4">Images</h3>
              <EmptySection />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
