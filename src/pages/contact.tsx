// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"
import {
  FaHeart,
  FaGooglePlusSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSteam,
  FaStackOverflow,
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaDev,
} from "react-icons/fa"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page two" />
    <section className="contactSection">
      <h3 className="contactSectionTitle">
        I'd <FaHeart /> to help!
      </h3>
      <article className="contactArticle">
        <a className="contactArticleLink" href="mailto:mucahidyazar@gmail.com">
          <FaGooglePlusSquare className="contactArticleIcon" />
          <p>Google</p>
        </a>

        <a
          className="contactArticleLink"
          href="https://www.instagram.com/mucahidyazar"
        >
          <FaInstagram className="contactArticleIcon" />
          <p>Instagram</p>
        </a>

        <a
          className="contactArticleLink"
          href="https://www.twitter.com/mucahidyazar"
        >
          <FaTwitter className="contactArticleIcon" />
          <p>Twitter</p>
        </a>

        <a
          className="contactArticleLink"
          href="https://www.youtube.com/channel/UCTRRiBancGWK5dJ6gT7v5BA?view_as=subscriber"
        >
          <FaYoutube className="contactArticleIcon" />
          <p>Youtube</p>
        </a>

        <a
          className="contactArticleLink"
          href="https://steamcommunity.com/id/mucahidyazar"
        >
          <FaSteam className="contactArticleIcon" />
          <p>Steam</p>
        </a>

        <a
          className="contactArticleLink"
          href="https://stackoverflow.com/users/12899690/mucahid-yazar"
        >
          <FaStackOverflow className="contactArticleIcon" />
          <p>StackOverflow</p>
        </a>

        <a
          className="contactArticleLink"
          href="https://www.linkedin.com/in/mucahidyazar"
        >
          <FaLinkedin className="contactArticleIcon" />
          <p>Linkedin</p>
        </a>

        <a
          className="contactArticleLink"
          href="https://www.github.com/mucahidyazar"
        >
          <FaGithub className="contactArticleIcon" />
          <p>Github</p>
        </a>

        <a
          className="contactArticleLink"
          href="https://medium.com/@mucahidyazar"
        >
          <FaMedium className="contactArticleIcon" />
          <p>Medium</p>
        </a>

        <a className="contactArticleLink" href="https://dev.to/mucahidyazar">
          <FaDev className="contactArticleIcon" />
          <p>Dev.to</p>
        </a>
      </article>
    </section>
  </Layout>
)

export default SecondPage
