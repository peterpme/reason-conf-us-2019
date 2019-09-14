import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import { make as Hero } from "../../components/Hero.bs"
import { make as HeroGraphic } from "../../components/HeroGraphic.bs"
import { make as Button } from "../../components/Button.bs"

export default function WorkshopsPage({ data }) {
  const meta = (data && data.site && data.site.siteMetadata) || {}
  return (
    <Layout>
      <Hero
        title={meta.workshop.title}
        subtitle={meta.workshop.date}
        bio={meta.workshop.description}
        graphic={
          <img alt="Attend a workshop" className="Visit-HeroGraphic" src={meta.workshop.imageUrl} />
        }
        ctaLabel="Purchase Tickets"
        href={meta.ticketLink}>
        <div />
      </Hero>
    </Layout>
  )
}

export const query = graphql`
  query WorkshopPage {
    site {
      siteMetadata {
        ticketLink
        cfpLink
        workshop {
          title
          description
          date
          imageUrl
        }
      }
    }
  }
`
