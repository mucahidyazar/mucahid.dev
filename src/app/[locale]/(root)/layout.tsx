import {prepareMetadata} from '@/utils/prepareMetadata'

export function generateMetadata() {
  return prepareMetadata()
}

type RootLayoutProps = {
  children: React.ReactNode
}
export default async function RootLayout({children}: RootLayoutProps) {
  return children as JSX.Element
}
