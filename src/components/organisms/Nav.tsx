import {Header} from '../molecules/Header'
import {StickyTop} from '../molecules/StickyTop'

export function Nav() {
  return (
    <nav className="fixed top-0 z-50 flex w-full flex-col">
      <div className="relative mx-auto w-full max-w-6xl bg-background">
        <StickyTop />

        <Header />
      </div>
    </nav>
  )
}
