import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import { make as PageContainer } from "../components/PageContainer.bs"
import { make as Section } from "../components/Section.bs"
import { make as CTAButton } from "../components/CTAButton.bs"
import { make as HeroGraphic } from "../components/HeroGraphic.bs"
import SpeakerList from "../components/SpeakerList"
import { make as Hero } from "../components/Hero.bs"
import { make as SponsorRow } from "../components/SponsorRow.bs"
import { make as CodeOfConduct } from "../components/CodeOfConduct.bs"

import "./indexPage.css"
import "../components/Link.scss"

const IndexPageTemplate = ({ data, isMobile }) => {
  const { allSpeakersJson, allSponsorsJson, site } = data
  const speakers = allSpeakersJson.speakers
  const sponsors = allSponsorsJson.tiers

  const meta = site.siteMetadata
  return (
    <Layout>
      <PageContainer>
        <Hero
          title={meta.city}
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
      <CodeOfConduct />
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
        city
        date
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
