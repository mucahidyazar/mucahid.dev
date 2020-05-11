// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps } from "gatsby"
import { FaHeart } from "react-icons/fa"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Social } from "../../contents/data/social"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page two" />
    <section className="contactSection">
      <h3 className="contactSectionTitle">
        I'd <FaHeart /> to help!
      </h3>
      <article className="contactArticle">
        {Social.map((soc, index) => {
          const Icon = soc.icon
          return (
            <a
              key={index}
              className="contactArticleLink"
              href={soc.link}
              target="_blank"
            >
              <Icon className="contactArticleIcon" />
              <p>{soc.name}</p>
            </a>
          )
        })}
      </article>
    </section>
  </Layout>
)

export default SecondPage
