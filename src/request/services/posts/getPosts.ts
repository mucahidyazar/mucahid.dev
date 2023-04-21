import { DocumentNode, gql } from "@apollo/client"

import { apolloClient } from "@/configs"

function generateSchema(page: string): DocumentNode {
  return gql`
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
            dateUpdated
            dateFeatured
            contentMarkdown
            numUniqueUsersWhoReacted
          }
        }
      }
    }
  `
}

interface IGetPostsReturn {
  posts: any[]
  numPosts: number
}
export async function getPosts(page: string): Promise<IGetPostsReturn> {
  const response = await apolloClient.query({
    query: generateSchema(page),
  })

  const posts = response?.data?.user.publication.posts
  const numPosts = response?.data?.user.numPosts

  return { posts, numPosts }
}