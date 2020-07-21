// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps } from "gatsby"
import { FcIdea, FcNoIdea } from "react-icons/fc"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Announcement from "../components/Announcement"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Settings" />
    <section className="settingsSection">
      <Announcement />
      <h2 className="settingsSectionHeader">Settings</h2>
      <article className="settingsArticle">
        <div className="darkMode">
          <h4 className="darkModeHeader">Dark Mode</h4>
          <div className="darkModeBottom">
            <div className="darkModeBottomItem">
              <FcNoIdea className="darkModeBottomIcon" />
            </div>
            <div className="darkModeBottomItem">
              <FcIdea className="darkModeBottomIcon" />
            </div>
          </div>
        </div>
        <div className="iconMode">
          <h4 className="iconModeHeader">Icon Mode</h4>
          <ol className="iconModeList">
            <li className="iconModeListItem">1</li>
            <li className="iconModeListItem">2</li>
            <li className="iconModeListItem">3</li>
            <li className="iconModeListItem">4</li>
          </ol>
        </div>
      </article>
    </section>
  </Layout>
)

export default SecondPage
