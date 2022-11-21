import Link from 'next/link'

export default function Blog() {
  return (
    <div id="blog">
      <section id="year-2022">
        <h2 className="text-8xl font-black opacity-10 sm:-translate-x-10">
          2022
        </h2>
        <div className="-translate-y-14">
          <aside className="group cursor-pointer">
            <Link
              className="font-semibold link group-hover:text-white"
              href="/"
            >
              Dev SSR on Next with Vite
            </Link>
            <div className="flex items-center text-gray-400 text-sm group-hover:text-gray-300">
              <p>Oct 4 - 15 min</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
