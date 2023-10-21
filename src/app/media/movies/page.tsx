import {MoviesTemplate} from '@/templates'
import {prepareMetadata} from '@/utils/prepareMetadata'

export function generateMetadata() {
  const title = 'Movies'
  const description =
    'I will be sharing my favorite movies with my score and a short description about the movie.'

  return prepareMetadata({
    title,
    description,
    page: title,
  })
}

export default function Page() {
  return (
    <div id="media">
      <MoviesTemplate />
    </div>
  )
}
