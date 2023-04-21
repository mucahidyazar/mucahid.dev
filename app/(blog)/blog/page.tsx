import Link from 'next/link'

import {getPosts} from '@/request/services/posts'

export default async function BlogPage({searchParams}: any) {
  const page = searchParams.page || '1'

  const {posts, numPosts} = await getPosts(page)

  return (
    <div id="blog">
      <section id="year-2022">
        <aside className="[&:not(:first-child)]:-translate-y-10">
          {/* <h2 className="text-8xl font-black opacity-10 sm:-translate-x-10">
              {year}
            </h2> */}
          <ul className="flex flex-col gap-4 mb-8 -translate-y-14">
            {posts?.map((post: any) => (
              <li className="group cursor-pointer" key={post.cuid}>
                <Link
                  className="font-semibold link group-hover:text-white"
                  href={`/blog/${post.slug}`}
                >
                  {post.title}
                </Link>
                <div className="flex items-center text-gray-400 text-sm group-hover:text-gray-300">
                  <p>{post.dateAdded}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
        {Number(page) * 6 < numPosts && (
          <Link href={`/blog?page=${Number(page) + 1}`}>
            <button className="italic font-bold uppercase line-through hover:underline duration-150 hover:scale-110 -translate-y-20">
              Next page
            </button>
          </Link>
        )}
      </section>
    </div>
  )
}
