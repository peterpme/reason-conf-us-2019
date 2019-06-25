import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import { make as Hero } from "../../components/Hero.bs"
import { make as Button } from "../../components/Button.bs"

export default function SchedulePage({ data }) {
  const meta = (data && data.site && data.site.siteMetadata) || {}
  const talks = (data && data.allTalksJson && data.allTalksJson.talks) || []
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
      <h2>Day structure</h2>
      {talks.map(talk => {
        return (
          <section style={{ marginBottom: 10 }} key={talk.id}>
            {talk.time} {talk.title}
          </section>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query SchedulePage {
    allTalksJson {
      talks: nodes {
        id
        time
        title
      }
    }
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
