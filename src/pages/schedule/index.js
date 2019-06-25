import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import { make as Hero } from "../../components/Hero.bs"
import { make as Button } from "../../components/Button.bs"

export default function SchedulePage({ data }) {
  const meta = (data && data.site && data.site.siteMetadata) || {}
  return (
    <Layout>
      <Hero
        title={meta.schedule.title}
        subtitle={meta.schedule.date}
        bio={meta.schedule.description}
        graphic={<img alt="Chicago" className="Visit-HeroGraphic" src={meta.schedule.imageUrl} />}
        ctaLabel="Apply to Speak"
        href={meta.cfpLink}>
        <Button mode="bare" href={meta.ticketLink} label="Purchase Tickets" />
      </Hero>
    </Layout>
  )
}

export const query = graphql`
  query SchedulePage {
    site {
      siteMetadata {
        ticketLink
        cfpLink
        schedule {
          title
          date
          description
          imageUrl
        }
      }
    }
  }
`
