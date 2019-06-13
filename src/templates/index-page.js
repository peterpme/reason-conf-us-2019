import React from "react"
import { graphql } from "gatsby"
import withSizes from "react-sizes"

import Layout from "../components/Layout"
// import { make as Layout } from "../components/Layout.bs"
import { make as PageContainer } from "../components/PageContainer.bs"
import { make as SectionHeading } from "../components/SectionHeading.bs"
import { make as Section } from "../components/Section.bs"
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
  const meta = site.siteMetadata
  return (
    <Layout>
      <PageContainer>
        <Hero
          title={meta.title}
          subtitle={meta.date}
          bio={meta.description}
          graphic={
            <HeroGraphic width={isMobile ? "360" : "760"} height={isMobile ? "200" : "380"} />
          }
          ctaLabel="Tickets"
          href={meta.ticketLink}>
          <a
            href={meta.sponsorLink}
            rel="noreferrer nofollow"
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
      <PageContainer>
        <Section
          title="Heading about talks and speakers"
          extra={
            <CTAButton buttonStyle="Landing-SpeakersCTA" label="View All Speakers" to="/Speakers" />
          }>
          <SpeakerGrid speakers={speakers} />
        </Section>
      </PageContainer>
      <PageContainer>
        <Section
          title="Sponsored by"
          extra={
            <CTAButton buttonStyle="Landing-SpeakersCTA" label="Become a sponsor" to="/Sponsors" />
          }></Section>
      </PageContainer>
    </Layout>
  )
}

export default IndexPageTemplate
export const query = graphql`
  query HomePage {
    allSpeakersJson(filter: { featured: { ne: false } }) {
      speakers: nodes {
        name
        bio
        title
        company
        imageUrl
      }
    }
    site {
      siteMetadata {
        description
        title
        ticketLink
        cfpLink
        sponsorLink
      }
    }
    allSponsorsJson {
      tiers: nodes {
        tier
        sponsors {
          name
          imageUrl
        }
      }
    }
  }
`
