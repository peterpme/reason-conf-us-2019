import React from "react"
import { graphql } from "gatsby"
import withSizes from "react-sizes"

import Layout from "../components/Layout"
// import { make as Layout } from "../components/Layout.bs"
import { make as PageContainer } from "../components/PageContainer.bs"
import { make as SectionHeading } from "../components/SectionHeading.bs"
import { make as CTAButton } from "../components/CTAButton.bs"
import { make as HeroGraphic } from "../components/HeroGraphic.bs"
import { make as SpeakerGrid } from "../components/SpeakerGrid.bs"
import { make as Hero } from "../components/Hero.bs"
import "./indexPage.css"

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 800
})

const IndexPageTemplate = ({ data, isMobile }) => {
  const { allSpeakersJson, site } = data
  const speakers = allSpeakersJson.speakers
  return (
    <Layout>
      <PageContainer className="Landing-HeroContainer">
        <Hero
          title={site.siteMetadata.title}
          subtitle="October 7-9, 2019"
          bio="A hands-on two-day conference with workshops and talks on React Native from Expo and Software Mansion."
          graphic={
            <HeroGraphic width={isMobile ? "360" : "760"} height={isMobile ? "200" : "380"} />
          }
          ctaLabel="Tickets"
          href="/tickets">
          <a
            style={{
              color: "#ffffff",
              textDecoration: "underline",
              fontWeight: "bold",
              maxWidth: "160px"
            }}>
            Become A Sponsor
          </a>
        </Hero>
      </PageContainer>
      <PageContainer className="Landing-SpeakerContainer">
        <SectionHeading heading="Heading about talks and speakers">
          <CTAButton buttonStyle="Landing-SpeakersCTA" label="View All Speakers" to="/Speakers" />
        </SectionHeading>
        <SpeakerGrid className="Landing-SpeakerGrid" speakers={speakers} />
      </PageContainer>
      <PageContainer className="Landing-SponsorContainer">
        <SectionHeading heading="Sponsored by">
          <CTAButton buttonStyle="Landing-SpeakersCTA" label="Become a sponsor" to="/Sponsors" />
        </SectionHeading>
      </PageContainer>
    </Layout>
  )
}

export default IndexPageTemplate
export const query = graphql`
  query HomePage {
    allSpeakersJson(filter: { featured: { ne: false } }) {
      speakers: nodes {
        bio
        company
        name
        imageUrl
      }
    }
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
