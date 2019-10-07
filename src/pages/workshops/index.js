import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import { make as Hero } from "../../components/Hero.bs"
import { make as HeroGraphic } from "../../components/HeroGraphic.bs"

export default function WorkshopsPage({ data }) {
  const meta = (data && data.site && data.site.siteMetadata) || {}
  const talks = (data && data.allWorkshopsJson && data.allWorkshopsJson.workshops) || []
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
      <span style={{ width: "100%" }} className="ScheduleRow-time">
        The Dark Lang workshops are exactly the same. You don't need to go to both!
      </span>
      <div style={{ marginBottom: 48 }}>
        {talks.map(talk => {
          return (
            <section key={talk.id} className="ScheduleRow">
              <span style={{ width: 160 }} className="ScheduleRow-time">
                {talk.time}
              </span>{" "}
              {talk.photoUrl ? (
                <img src={talk.photoUrl} width="60" height="60" className="ScheduleRow-image" />
              ) : (
                <span className="ScheduleRow-image" />
              )}
              <div>
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
  query WorkshopPage {
    allWorkshopsJson {
      workshops: nodes {
        id
        time
        talkTitle
      }
    }
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
