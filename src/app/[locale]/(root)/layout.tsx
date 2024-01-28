import {Footer} from '@/components/organisms/Footer'
import {Nav} from '@/components/organisms/Nav'
import {prepareMetadata} from '@/utils/prepareMetadata'

export function generateMetadata() {
  return prepareMetadata()
}

type RootLayoutProps = {
  children: React.ReactNode
}
export default async function RootLayout({children}: RootLayoutProps) {
  return (
    <div className="flex h-full w-full flex-col">
      <Nav />

      <main className="mx-auto w-full max-w-full flex-grow px-4 pt-44 lg:max-w-6xl xl:px-0">
        {children}
      </main>

      <Footer />
    </div>
  )
}
