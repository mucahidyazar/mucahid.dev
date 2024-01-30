import Link from 'next/link'

import {bookByYears} from '@/mocks'

import {MediaCard} from '../molecules/MediaCard'

export function BooksTemplate() {
  return (
    <div className="flex flex-col gap-8">
      <blockquote className="text-xs italic">
        Not all books I read are listed here. I only list books that I love and
        suggest to others with the year I read them.
      </blockquote>

      {Object.entries(bookByYears)
        .sort(() => -1)
        .map(([year, books]) => (
          <div key={year}>
            <h2 className="mb-4 text-2xl text-primary underline underline-offset-4">
              {year}
            </h2>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {books.map(book => (
                <Link href={`/media/books/${book.slug}`} key={book.slug}>
                  <MediaCard media={book} />
                </Link>
              ))}
            </div>
          </div>
        ))}
    </div>
  )
}
