'use client'
import {useQuery, gql} from '@apollo/client'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {synthwave84} from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function BlogDetail() {
  const GET_POST = gql`
    query {
      post(
        slug: "react-query-you-do-not-need-a-global-state-manager"
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
        isAnonymous
      }
    }
  `
  const {loading, error, data} = useQuery(GET_POST)
  const post = data?.post

  return (
    <div id="blog-detail">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: props => (
            <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />
          ),
          h2: props => (
            <h2 className="text-3xl font-bold mt-6 mb-3" {...props} />
          ),
          h3: props => (
            <h3 className="text-2xl font-bold mt-4 mb-2" {...props} />
          ),
          h4: props => (
            <h4 className="text-xl font-bold mt-3 mb-1.5" {...props} />
          ),
          h5: props => (
            <h5 className="text-lg font-bold mt-2 mb-1" {...props} />
          ),
          h6: props => (
            <h6 className="text-base font-bold mt-1 mb-0.5" {...props} />
          ),
          p: props => <p className="text-base leading-7 mb-4" {...props} />,
          ul: props => <ul className="list-disc ml-8 mb-6" {...props} />,
          ol: props => <ol className="list-decimal ml-8 mb-6" {...props} />,
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
          code(props) {
            return (
              <SyntaxHighlighter
                language="javascript"
                PreTag="div"
                showLineNumbers
                style={synthwave84}
                {...props}
              />
            )
          },
          pre: props => (
            <pre
              {...props}
              className="bg-gray-900 rounded px-2 py-1 text-sm font-mono mb-6"
            />
          ),
          table: props => (
            <table
              className="table-auto border-collapse border border-gray-200"
              {...props}
            />
          ),
          th: props => (
            <th
              className="border border-gray-200 px-2 py-1 text-left text-gray-500"
              {...props}
            />
          ),
          td: props => (
            <td
              className="border border-gray-200 px-2 py-1 text-left text-gray-700"
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
