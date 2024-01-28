import {PatternCrossSection} from '@/components/atoms/pattern-cross-section'
import {Footer} from '@/components/organisms/Footer'
import {Nav} from '@/components/organisms/Nav'
import {cn} from '@/utils'
import {prepareMetadata} from '@/utils/prepareMetadata'

export function generateMetadata() {
  return prepareMetadata()
}

type RootLayoutProps = {
  children: React.ReactNode
}
export default async function RootLayout({children}: RootLayoutProps) {
  return (
    <div className="background-pattern flex h-full w-full flex-col">
      <Nav />

      <main className="mx-auto w-full max-w-full flex-grow px-4 pt-44 lg:max-w-6xl xl:px-0">
        {children}
      </main>

      <Footer />

      <PatternCrossSection
        className={cn(`fixed inset-0 -z-10 h-full w-full`)}
      />
      {/* <PatternWaves2 className={cn(`fixed inset-0 -z-[2] h-full w-full`)} /> */}
    </div>
  )
}
