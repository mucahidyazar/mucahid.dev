'use client'
import Link from 'next/link'
import {useQuery, gql} from '@apollo/client'

export default function Blog() {
  const GET_POSTS = gql`
    query {
      user(username: "mucahidyazar") {
        username
        publication {
          _id
          posts {
            followersCount
            cuid
            slug
            title
            popularity
            totalReactions
            partOfPublication
            isActive
            replyCount
            responseCount
            dateAdded
            brief
            isAnonymous
            dateUpdated
            dateFeatured
            contentMarkdown
            numUniqueUsersWhoReacted
          }
        }
      }
    }
  `
  const {loading, error, data} = useQuery(GET_POSTS)
  const posts = data?.user?.publication?.posts

  return (
    <div id="blog">
      <section id="year-2022">
        <h2 className="text-8xl font-black opacity-10 sm:-translate-x-10">
          2022
        </h2>
        <aside className="-translate-y-14">
          <ul className="flex flex-col gap-4">
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
      </section>
    </div>
  )
}
