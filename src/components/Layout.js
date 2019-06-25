import React from "react"
import Helmet from "react-helmet"
import { make as NavBar } from "../components/NavBar.bs.js"
import { make as Footer } from "../components/Footer.bs.js"
import { make as PageContainer } from "../components/PageContainer.bs.js"
import useSiteMetadata from "./SiteMetadata"

import "./Layout.scss"

import "../../styles/main.css"

export default function TemplateWrapper({ children }) {
  const { title, description } = useSiteMetadata()
  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/"/>
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <NavBar />
      <div className="pt-10 flex flex-col max-w-5xl ml-auto mr-auto w-full">{children}</div>
      <Footer />
    </React.Fragment>
  )
}
