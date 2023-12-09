import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import {prepareMetadata} from '@/utils/prepareMetadata'

async function getPost(postId: string) {
  try {
    const GET_POST = `
    query {
      post(
        slug: "${postId}"
        hostname: "mucahid.dev"
      ) {
        sourcedFromGithub
        isRepublished
        followersCount
        cuid
        slug
        title
        type
        partOfPublication
        dateUpdated
        totalReactions
        numCollapsed
        isDelisted
        isFeatured
        isActive
        replyCount
        responseCount
        popularity
        dateAdded
        contentMarkdown
        content
        brief
        coverImage
      }
    }
  `

    const {data} = await axios.post('https://api.hashnode.com', {
      query: GET_POST,
    })
    return data.data.post
  } catch (error) {
    return null
  }
}

export async function generateMetadata({params}: {params: {id: string}}) {
  const postId = params?.id
  const post = await getPost(postId)

  const title = post.title
  const description = post.brief

  return prepareMetadata({
    title,
    description,
    page: 'Article',
  })
}

export default async function BlogDetail({params}: {params: {id: string}}) {
  const postId = params?.id
  const post = await getPost(postId)

  return (
    <div id="blog-detail">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: props => (
            <h1 className="mb-4 mt-8 text-4xl font-bold" {...props} />
          ),
          h2: props => (
            <h2 className="mb-3 mt-6 text-3xl font-bold" {...props} />
          ),
          h3: props => (
            <h3 className="mb-2 mt-4 text-2xl font-bold" {...props} />
          ),
          h4: props => (
            <h4 className="mb-1.5 mt-3 text-xl font-bold" {...props} />
          ),
          h5: props => (
            <h5 className="mb-1 mt-2 text-lg font-bold" {...props} />
          ),
          h6: props => (
            <h6 className="mb-0.5 mt-1 text-base font-bold" {...props} />
          ),
          p: props => <p className="mb-4 text-base leading-7" {...props} />,
          ul: props => <ul className="mb-6 ml-8 list-disc" {...props} />,
          ol: props => <ol className="mb-6 ml-8 list-decimal" {...props} />,
          li: props => <li className="mb-2" {...props} />,
          a: props => (
            <a
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noreferrer"
              {...props}
            />
          ),
          blockquote: props => (
            <blockquote
              className="border-l-4 border-gray-200 pl-4 italic"
              {...props}
            />
          ),
          // code({
          //   node,
          //   inline,
          //   className,
          //   children,
          //   style,
          //   ...props
          // }: CodeProps) {
          //   return (
          //     <SyntaxHighlighter
          //       style={synthwave84}
          //       language="javascript"
          //       PreTag="div"
          //       {...props}
          //     >
          //       {String(children).replace(/\n$/, '')}
          //     </SyntaxHighlighter>
          //   )
          // },
          pre: props => (
            <pre
              {...props}
              className="mb-6 rounded bg-gray-900 px-2 py-1 font-mono text-sm"
            />
          ),
          table: props => (
            <table
              className="table-auto border-collapse border border-gray-200"
              {...props}
            />
          ),
          img: props => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="max-w-full rounded"
              alt={props.alt}
              src={props.src}
            />
          ),
        }}
      >
        {post?.contentMarkdown}
      </ReactMarkdown>
      {/* <div dangerouslySetInnerHTML={{__html: post.content}} /> */}
    </div>
  )
}
