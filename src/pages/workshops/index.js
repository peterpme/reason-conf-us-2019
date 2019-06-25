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
        title="Workshops"
        subtitle="October 7th"
        bio="We're looking for exciting workshops topics ranging from beginner to advanced levels. Have something you'd love to teach someone? Apply to give one!"
        graphic={
          <img
            className="Visit-HeroGraphic"
            src="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          />
        }
        ctaLabel="Give a workshop"
        href={meta.cfpLink}>
        <Button mode="bare" href={meta.ticketLink} label="Attend a workshop" />
      </Hero>
    </Layout>
  )
}

export const query = graphql`
  query WorkshopPage {
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
