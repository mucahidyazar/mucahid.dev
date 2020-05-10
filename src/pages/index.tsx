import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = () => {
  const illustratorsData = useStaticQuery(graphql`
    query {
      placeholderImage: allFile(
        filter: { sourceInstanceName: { eq: "illustrators" } }
      ) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <article className="homeArticle homeArticle1">
          <Img
            className="homeArticleImage"
            fluid={
              illustratorsData.placeholderImage.nodes[9].childImageSharp.fluid
            }
          />
          <div className="homeArticlePost">
            <p>
              I am Mucahid from Turkey. I'm a programmer and I specialize in
              front-end development. I live in Istanbul and I am 28 years old. I
              want to talk about some myself. I studied Work and Health Safety
              and graduated from Maltepe University. And I began coding 1.5
              years ago when I was on the half of the second year on my
              university. I have been studying all day new technologies,
              libraries and frameworks almost for 1.5 year. I am aware of my age
              and the situation that I began coding too late. But I know those
              are not obstacles for me and therefore I have been trying to study
              harder more. In the circumstances I got my first job about 3
              months ago. Now I work for GRANOBRA as Frontend Developer.
            </p>
            <span>08.05.2020</span>
          </div>
        </article>

        <article className="homeArticle homeArticle1">
          <div className="homeArticlePost">
            <p>
              This is my first Blog. This design is my own design. Of course I
              looked some blogers and websites to inspire. In fact I wrote some
              of those blogs into my notes on my blog. As you see on the footer
              I built this blog with GatsbyJS. I am hering you are asking why
              GatsbyJS? Actually I can prefer NextJS as well but I prefered
              GatsbyJS. I am not an expert for GatsbyJS or NextJS for now. But I
              feel GatsbyJS faster than NextJS and I think NextJS more
              customizable than GatsbyJS. And I want also learn GatsbyJS. So I
              learned something with GatsbyJS and built my Blog. It doesn't have
              much cool things or effects bu I think its pretty for now. I don't
              write here so much the sections on my home page on here is the
              place of my little articles. See you soon. With pleasure.
            </p>
            <span>10.05.2020</span>
          </div>
          <Img
            className="homeArticleImage"
            fluid={
              illustratorsData.placeholderImage.nodes[16].childImageSharp.fluid
            }
          />
        </article>
      </section>
    </Layout>
  )
}

export default IndexPage
