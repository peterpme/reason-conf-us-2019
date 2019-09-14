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
        ctaLabel="Purchase Tickets"
        href={meta.ticketLink}>
        <div />
      </Hero>
      <div style={{ marginBottom: 48 }}>
        {talks.map(talk => {
          return (
            <section key={talk.id} className="ScheduleRow">
              <span className="ScheduleRow-time">{talk.time}</span>{" "}
              {talk.photoUrl ? (
                <img src={talk.photoUrl} width="60" height="60" className="ScheduleRow-image" />
              ) : (
                <span className="ScheduleRow-image" />
              )}
              <div>
                <span className="ScheduleRow-name">{talk.fullName}</span>
                <span className="ScheduleRow-title">{talk.talkTitle ? talk.talkTitle : null}</span>
              </div>
            </section>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query SchedulePage {
    allTalksJson {
      talks: nodes {
        id
        time
        talkTitle
        fullName
        photoUrl
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
