'use client'
import Link from 'next/link'
import {useQuery, gql} from '@apollo/client'
import {useState} from 'react'

export default function Blog() {
  const [page, setPage] = useState(1)

  const GET_POSTS = gql`
    query {
      user(username: "mucahidyazar") {
        username
        numPosts
        publication {
          _id
          posts(page: ${page}) {
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

  const [posts, setPosts] = useState<any>({
    numPosts: 0,
    data: [],
    byYears: {},
  })

  useQuery(GET_POSTS, {
    onCompleted: (data: any) => {
      const prevPostByYears = posts?.byYears
      data.user.publication.posts?.map((post: any) => {
        const postYear = post.dateAdded.split('-')[0]
        if (prevPostByYears?.[postYear]) {
          prevPostByYears[postYear].push(post)
        } else {
          prevPostByYears[postYear] = [post]
        }
      })

      setPosts((prev: any) => ({
        ...prev,
        numPosts: data.user.numPosts,
        data: [...prev.data, ...data.user.publication.posts],
        byYears: prevPostByYears,
      }))
    },
  })

  const postsByYears = Object.entries(posts?.byYears || {}).sort(
    (a: any, b: any) => b[0] - a[0],
  )

  return (
    <div id="blog">
      <section id="year-2022">
        {postsByYears?.map(([year, yearPosts]: any) => (
          <aside key={year} className="[&:not(:first-child)]:-translate-y-10">
            <h2 className="text-8xl font-black opacity-10 sm:-translate-x-10">
              {year}
            </h2>
            <ul className="flex flex-col gap-4 mb-8 -translate-y-14">
              {yearPosts?.map((post: any) => (
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
        ))}
        {posts?.data?.length < posts?.numPosts - 6 && (
          <button
            className="italic font-bold uppercase line-through hover:underline duration-150 hover:scale-110 -translate-y-20"
            onClick={() => setPage(page + 1)}
          >
            Show more
          </button>
        )}
      </section>
    </div>
  )
}
