// Gatsby supports TypeScript natively!
import React, { useState, useEffect } from "react"
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
  const [articles, setArticles] = useState([])
  const [filters, setFilters] = useState({
    platforms: [],
    tags: [],
    years: [],
  })
  const [filteredArticles, setFilteredArticles] = useState([])

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
            tags
            platforms
          }
        }
      }
    }
  `)

  useEffect(() => {
    if (data.allMarkdownRemark.nodes.length) {
      setArticles(data.allMarkdownRemark.nodes)
    }
  }, [data])

  const handlerTechColor = value => {
    switch (value) {
      case "css3":
        return "#1572B6"
      case "gastbyjs":
        return "#744C9E"
      case "graphql":
        return "#D54599"
      case "html5":
        return "#E34E26"
      case "javascript":
        return "#FBD601"
      case "nextjs":
        return "#000000"
      case "nodejs":
        return "#8CC84B"
      case "react":
        return "#00D8FF"
      case "sass":
        return "#CF649A"
      case "typescript":
        return "#1976D2"
      default:
        return "#000000"
    }
  }

  const handlerPlatform = value => {
    const filterDatas = { ...filters }
    const valueIndex = filterDatas.platforms.findIndex(data => data === value)

    if (filterDatas.platforms.includes(value)) {
      filterDatas.platforms.splice(valueIndex, 1)
      setFilters(filterDatas)
    } else {
      filterDatas.platforms.push(value)
      setFilters(filterDatas)
    }
  }

  const handlerTags = value => {
    const filterDatas = { ...filters }
    const valueIndex = filterDatas.tags.findIndex(data => data === value)

    if (filterDatas.tags.includes(value)) {
      filterDatas.tags.splice(valueIndex, 1)
      setFilters(filterDatas)
    } else {
      filterDatas.tags.push(value)
      setFilters(filterDatas)
    }
  }

  const handlerYear = value => {
    const filterDatas = { ...filters }
    const valueIndex = filterDatas.years.findIndex(data => data === value)

    if (filterDatas.years.includes(value)) {
      filterDatas.years.splice(valueIndex, 1)
      setFilters(filterDatas)
    } else {
      filterDatas.years.push(value)
      setFilters(filterDatas)
    }
  }

  useEffect(() => {
    const filterConcat = [
      ...filters.platforms,
      ...filters.tags,
      ...filters.years,
    ]
    setFilteredArticles(
      articles.filter(article => {
        const articleConcat = [
          ...article.frontmatter.platforms,
          ...article.frontmatter.tags,
          article.frontmatter.date.split(" ")[2],
        ]
        return articleConcat.some(ar => filterConcat.includes(ar))
      })
    )
    console.log(filters)
  }, [filters])

  return (
    <Layout>
      <SEO title="Reading..." />
      <section className="articles">
        <div className="articlesContainer">
          <h2 className="articleArticleYearCategory">2020</h2>
          {(filters.platforms.length ||
          filters.tags.length ||
          filters.years.length
            ? filteredArticles
            : articles
          ).map((node, index) => {
            return (
              <article key={index} className="articleArticle">
                <h3 className="articleArticleTitle">
                  {node.frontmatter.title}
                </h3>
                <div className="articleArticleTags">
                  {node.frontmatter.tags.map((tag, index2) => {
                    return (
                      <div
                        className="articleArticleTagsItem"
                        key={index2}
                        style={{
                          backgroundColor: handlerTechColor(tag.toLowerCase()),
                          color:
                            handlerTechColor(tag.toLowerCase()) === "#000000" &&
                            "#fff",
                        }}
                      >
                        {tag}
                      </div>
                    )
                  })}
                </div>
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
            )
          })}
        </div>
        <div className="articlesFilter">
          <div className="filterItem">
            <input type="checkbox" id="platform" className="filterItemInput" />
            <label htmlFor="platform" className="filterItemHeader">
              <p>Platform</p>
              <p>+</p>
            </label>
            <div className="filterItemBody">
              <div onClick={() => handlerPlatform("medium")}>
                <label htmlFor="medium">Medium</label>
                <input id="medium" type="checkbox" />
              </div>
              <div onClick={() => handlerPlatform("devto")}>
                <label htmlFor="devto">Dev.to</label>
                <input id="devto" type="checkbox" />
              </div>
              <div onClick={() => handlerPlatform("blog")}>
                <label htmlFor="blog">Blog</label>
                <input id="blog" type="checkbox" />
              </div>
            </div>
          </div>
          <div className="filterItem">
            <input
              type="checkbox"
              id="technologies"
              className="filterItemInput"
            />
            <label htmlFor="technologies" className="filterItemHeader">
              <p>Technologies</p>
              <p>+</p>
            </label>
            <div className="filterItemBody">
              <div onClick={() => handlerTags("react")}>
                <label htmlFor="react">React</label>
                <input id="react" type="checkbox" />
              </div>
              <div onClick={() => handlerTags("redux")}>
                <label htmlFor="redux">Redux</label>
                <input id="redux" type="checkbox" />
              </div>
              <div onClick={() => handlerTags("nodejs")}>
                <label htmlFor="nodejs">NodeJS</label>
                <input id="nodejs" type="checkbox" />
              </div>
              <div onClick={() => handlerTags("typescript")}>
                <label htmlFor="typescript">Typescript</label>
                <input id="typescript" type="checkbox" />
              </div>
              <div onClick={() => handlerTags("html")}>
                <label htmlFor="html">Html</label>
                <input id="html" type="checkbox" />
              </div>
              <div onClick={() => handlerTags("css")}>
                <label htmlFor="css">Css</label>
                <input id="css" type="checkbox" />
              </div>
              <div onClick={() => handlerTags("gatsbyjs")}>
                <label htmlFor="gatsbyjs">Gatsby</label>
                <input id="gatsbyjs" type="checkbox" />
              </div>
              <div onClick={() => handlerTags("vscode")}>
                <label htmlFor="vscode">VS Code</label>
                <input id="vscode" type="checkbox" />
              </div>
              <div onClick={() => handlerTags("sass")}>
                <label htmlFor="sass">Sass</label>
                <input id="sass" type="checkbox" />
              </div>
              <div onClick={() => handlerTags("javascript")}>
                <label htmlFor="javascript">Javascript</label>
                <input id="javascript" type="checkbox" />
              </div>
              <div onClick={() => handlerTags("graphql")}>
                <label htmlFor="graphql">GraphQL</label>
                <input id="graphql" type="checkbox" />
              </div>
              <div onClick={() => handlerTags("nextjs")}>
                <label htmlFor="nextjs">NextJS</label>
                <input id="nextjs" type="checkbox" />
              </div>
            </div>
          </div>
          <div className="filterItem">
            <input type="checkbox" id="year" className="filterItemInput" />
            <label htmlFor="year" className="filterItemHeader">
              <p>Year</p>
              <p>+</p>
            </label>
            <div className="filterItemBody">
              <div onClick={() => handlerYear("2020")}>
                <label htmlFor="2020Checkbox">2020</label>
                <input type="checkbox" id="2020Checkbox" />
              </div>
              <div onClick={() => handlerYear("2019")}>
                <label htmlFor="2019Checkbox">2019</label>
                <input type="checkbox" id="2019Checkbox" />
              </div>
              <div onClick={() => handlerYear("2018")}>
                <label htmlFor="2018Checkbox">2018</label>
                <input type="checkbox" id="2018Checkbox" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SecondPage
