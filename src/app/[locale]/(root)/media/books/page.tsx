import {BooksTemplate} from '@/templates'
import {prepareMetadata} from '@/utils/prepareMetadata'

export function generateMetadata() {
  const title = 'Books'
  const description =
    'I will be sharing my favorite books with my score and a short description about the book.'

  return prepareMetadata({
    title,
    description,
    page: title,
  })
}

export default function Page() {
  return (
    <div id="books">
      <BooksTemplate />
    </div>
  )
}
