import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import { make as SectionHeading } from "../../components/SectionHeading.bs"
import { make as CTAButton } from "../../components/CTAButton.bs"
import HotelList from "../../components/HotelList"
import { make as Hero } from "../../components/Hero.bs"
import Map from "../../components/Map.js"

import "./visitIndexPage.css"

export default function VisitPage({ data }) {
  const meta = (data && data.site && data.site.siteMetadata) || {}
  return (
    <Layout>
      <Hero
        title={meta.visit.title}
        subtitle={meta.venue.name}
        bio={meta.venue.address + "\n" + meta.venue.city + "\n" + meta.venue.zip}
        graphic={
          <img className="Visit-HeroGraphic" alt={meta.venue.name} src={meta.venue.imageUrl} />
        }
        ctaLabel="Directions"
        href={meta.venue.directionsLink}
      />
      <br />
      <SectionHeading heading="Hotels Nearby" />
      <HotelList />
      <br />
      <SectionHeading heading="City Guide" />
      <Map />
      <br />
    </Layout>
  )
}

export const query = graphql`
  query VisitPage {
    site {
      siteMetadata {
        ticketLink
        cfpLink
        venue {
          name
          address
          city
          zip
          imageUrl
          directionsLink
        }
        visit {
          title
        }
      }
    }
  }
`
