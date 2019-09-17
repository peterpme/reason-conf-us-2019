import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import { make as Hero } from "../../components/Hero.bs"
import { make as Button } from "../../components/Button.bs"
import SponsorList from "../../components/SponsorList"

export default function SponsorsPage({ data }) {
  const meta = (data && data.site && data.site.siteMetadata) || {}
  return (
    <Layout>
      <Hero
        title={meta.sponsors.title}
        subtitle={meta.sponsors.date}
        bio={meta.sponsors.description}
        graphic={<img alt="Chicago" className="Visit-HeroGraphic" src={meta.sponsors.imageUrl} />}
        ctaLabel="Sponsor Reason Conf"
        href={meta.cfpLink}>
        <Button mode="bare" href={meta.ticketLink} label="Purchase Tickets" />
      </Hero>
      <SponsorList />
    </Layout>
  )
}

export const query = graphql`
  query SponsorsPage {
    site {
      siteMetadata {
        ticketLink
        cfpLink
        sponsors {
          title
          date
          description
          imageUrl
        }
      }
    }
  }
`
