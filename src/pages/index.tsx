import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img, { GatsbyImageProps } from "gatsby-image"
import {
  FcGraduationCap,
  FcSelfServiceKiosk,
  FcFilmReel,
  FcLike,
  FcReddit,
  FcHeadset,
  FcFlashOn,
  FcSteam,
  FcKindle,
} from "react-icons/fc"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

type imageType = {
  imageOne: {
    childImageSharp: GatsbyImageProps
  }
  imageTwo: {
    childImageSharp: GatsbyImageProps
  }
  imageThree: {
    childImageSharp: GatsbyImageProps
  }
}

const IndexPage = () => {
  const data: imageType = useStaticQuery(graphql`
    query {
      imageOne: file(name: { eq: "astronaut11" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTwo: file(name: { eq: "astronaut18" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThree: file(name: { eq: "astronaut19" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
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
            fluid={data.imageOne.childImageSharp.fluid}
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

        <article className="homeArticle">
          <div className="homeArticlePost">
            <p>
              <FcGraduationCap /> <span>Maltepe University</span>
            </p>
            <p>
              <FcSelfServiceKiosk />
              <span>Works full time as a frontend developer</span>
            </p>
            <p>
              <FcFilmReel /> <span>Addicted of sci-fi movies/series</span>
            </p>
            <p>
              <FcLike /> <span>Fan of the Lord of the Rings and Star Wars</span>
            </p>
            <p>
              <FcReddit /> <span>Follower of the reddit and stackoverflow</span>
            </p>
            <p>
              <span>
                <FcHeadset /> AC
                <FcFlashOn />
                DC
              </span>
            </p>
            <p></p>
            <p>
              <FcSteam />
              <span>Hardcore Gamer</span>
            </p>
            <p>
              <FcKindle />
              <span>Lover of the fantastic novels</span>
            </p>
          </div>
          <Img
            className="homeArticleImage"
            fluid={data.imageTwo.childImageSharp.fluid}
          />
        </article>

        <article className="homeArticle homeArticle1">
          <Img
            className="homeArticleImage"
            fluid={data.imageThree.childImageSharp.fluid}
          />
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
        </article>
      </section>
    </Layout>
  )
}

export default IndexPage
