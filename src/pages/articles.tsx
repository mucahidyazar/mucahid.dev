// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql, useStaticQuery } from "gatsby"
import { FaMedium } from "react-icons/fa"
import { FcLike } from "react-icons/fc"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

interface dataInterface {
  allMarkdownRemark: {
    nodes: {
      html: HTMLElement
      fields: {
        slug: string
      }
      excerpt: string
      frontmatter: {
        title: string
        date(formatString: "MMMM Do YYYY"): Date
        link: string
      }
    }
  }
}

const SecondPage = (props: PageProps) => {
  const data: dataInterface = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          html
          fields {
            slug
          }
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
            link
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Page two" />
      <section>
        <h2 className="articleArticleYearCategory">2020</h2>
        {data.allMarkdownRemark.nodes.map((node, index) => (
          <article key={index} className="articleArticle">
            <h3 className="articleArticleTitle">{node.frontmatter.title}</h3>
            <p className="articleArticleDescription">{node.excerpt}</p>
            <div className="articleArticleBottom">
              <span className="articleArticleDate">
                {node.frontmatter.date}
              </span>
              <div className="articleArticleButtons">
                {node.frontmatter.link !== "" && (
                  <a
                    href={node.frontmatter.link}
                    className="articleArticleButton"
                    target="_blank"
                  >
                    <FaMedium /> <span>Read on Medium</span>
                  </a>
                )}
                <Link
                  to={`/article/${node.fields.slug}`}
                  className="articleArticleButton"
                >
                  <FcLike />
                  <span>Read on here</span>
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
