import {prepareMetadata} from '@/utils/prepareMetadata'

export function generateMetadata() {
  const title = 'MHRS'
  const description =
    'It is an appointment booking system for the MHRS (Merkezi Hekim Randevu Sistemi) in Turkey.'

  return prepareMetadata({
    title,
    description,
    page: title,
  })
}

export default function Layout({children}: {children: React.ReactNode}) {
  return children
}
