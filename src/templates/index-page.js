import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import { make as HeroGraphic } from "../components/HeroGraphic.bs"
import { make as Hero } from "../components/Hero.bs"
import { make as CodeOfConduct } from "../components/CodeOfConduct.bs"
import { make as StyledText } from "../components/StyledText.bs"
import SpeakerList from "../components/SpeakerList"
import SponsorList from "../components/SponsorList"

import "./indexPage.css"
import "../components/Link.scss"

const IndexPageTemplate = ({ data, isMobile }) => {
  const meta = data.site.siteMetadata
  return (
    <Layout>
      <Hero
        title={meta.city}
        subtitle={meta.date}
        bio={meta.description}
        graphic={<HeroGraphic width={isMobile ? "360" : "760"} height={isMobile ? "200" : "380"} />}
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
      <CodeOfConduct />
      <StyledText className="SectionHeading" fontSize="30px">
        Speakers
      </StyledText>
      <div style={{ marginBottom: 30 }} />
      <SpeakerList />
      <StyledText className="SectionHeading" fontSize="30px">
        Sponsors
      </StyledText>
      <div style={{ marginBottom: 30 }} />
      <SponsorList />
    </Layout>
  )
}

export default IndexPageTemplate
export const query = graphql`
  query HomePage {
    allSpeakersJson {
      edges {
        speaker: node {
          id
          name
          about
          type
          location
          twitterUrl
          githubUrl
          imageUrl
        }
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
  }
`
