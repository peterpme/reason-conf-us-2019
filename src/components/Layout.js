import React from "react"
import Helmet from "react-helmet"
import useWindowSize from "@rehooks/window-size"
import { make as NavBar } from "../components/NavBar.bs.js"
import { make as Footer } from "../components/Footer.bs.js"
import { make as PageContainer } from "../components/PageContainer.bs.js"
import useSiteMetadata from "./SiteMetadata"
import "./all.sass"
import "./Layout.scss"

export default function TemplateWrapper({ children }) {
  const { title, description } = useSiteMetadata()
  const windowSize = useWindowSize()
  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <NavBar isMobile={windowSize.innerWidth < 769} />
      <div className="Site-content">
        <PageContainer>{children}</PageContainer>
      </div>
      <Footer />
    </React.Fragment>
  )
}
