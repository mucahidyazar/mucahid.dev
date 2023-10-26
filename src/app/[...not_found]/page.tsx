import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="text-foreground flex flex-col flex-grow text-center">
      <h2 className="mb-4 text-7xl">404</h2>
      <p className="mb-2">
        You didn`t break the internet, but we can`t find what you`re looking
        for.
      </p>
      <Link href="/" className="text-primary">
        Return Home
      </Link>
    </div>
  )
}
