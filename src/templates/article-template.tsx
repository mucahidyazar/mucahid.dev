import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export const data = graphql`
  query GET_ARTICLE($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM Do YYYY")
        link
      }
    }
  }
`

const ArticleTemplate = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: { title, date, link },
    },
  } = data

  return (
    <Layout>
      <div className="article" dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export default ArticleTemplate
