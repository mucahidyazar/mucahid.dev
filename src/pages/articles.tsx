// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const SecondPage = (props: PageProps) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
            link
            host
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Layout>
      <SEO title="Page two" />
      <section>
        <h2 className="articleArticleYearCategory">2020</h2>
        {data.allMarkdownRemark.nodes.map((node, index) => (
          <article key={index} className="articleArticle">
            <h3 className="articleArticleTitle">{node.frontmatter.title}</h3>
            <div className="articleArticleBottom">
              <span className="articleArticleDate">
                {node.frontmatter.date}
              </span>
              <div className="articleArticleButtons">
                <a href="" className="articleArticleButton">
                  Read on here
                </a>
                <Link to="/" className="articleArticleButton">
                  Read on Medium
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export default SecondPage
