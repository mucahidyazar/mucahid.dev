// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps } from "gatsby"
import { FaTag } from "react-icons/fa"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { notes } from "../../contents/data/notes"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page two" />
    <section className="linksSection">
      {notes.map((note, index) => (
        <article key={index} className="linksArticle">
          <FaTag className="linksArticleIcon" />
          <h3 className="linksArticleTitle">{note.title}</h3>
          <p className="linksArticleDescription">{note.description}</p>
          {note.links.map((link, linkIndex) => (
            <a
              className="linksArticleLink"
              style={{ display: "block" }}
              key={linkIndex}
              href={link}
              target="_blank"
            >
              {link}
            </a>
          ))}
        </article>
      ))}
    </section>
  </Layout>
)

export default SecondPage
