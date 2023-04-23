import {RoomTemplate} from '@/templates'
import {prepareMetadata} from '@/utils'

export function generateMetadata() {
  const title = 'Room'
  const description =
    'I will be sharing my room, my desk, my setup, my workspace and my environments with you. If you have a spesific question or a suggestion I will be happy to hear it.'

  return prepareMetadata({
    title,
    description,
    page: title,
  })
}

export default function Room() {
  return (
    <div id="room">
      <RoomTemplate />
    </div>
  )
}
