import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-grow flex-col text-center text-foreground">
      <h2 className="mb-4 text-7xl">404</h2>
      <p className="mb-2">
        You didn`t break the internet, but we can`t find what you`re looking
        for.
      </p>
      <Link href="/" className="text-main">
        Return Home
      </Link>
    </div>
  )
}
