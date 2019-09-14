import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import { make as Hero } from "../../components/Hero.bs"
import { make as Button } from "../../components/Button.bs"
import SpeakerList from "../../components/SpeakerList"

export default function SpeakersPage({ data }) {
  const meta = (data && data.site && data.site.siteMetadata) || {}
  return (
    <Layout>
      <Hero
        title={meta.speakers.title}
        subtitle={meta.speakers.date}
        bio={meta.speakers.description}
        graphic={<img alt="Chicago" className="Visit-HeroGraphic" src={meta.speakers.imageUrl} />}
        ctaLabel="Purchase Tickets"
        href={meta.ticketLink}>
        <div />
      </Hero>
      <SpeakerList />
    </Layout>
  )
}

export const query = graphql`
  query SpeakersPage {
    site {
      siteMetadata {
        ticketLink
        cfpLink
        speakers {
          title
          date
          description
          imageUrl
        }
      }
    }
  }
`
