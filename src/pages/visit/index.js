import React from "react"

import Layout from '../../components/Layout'
import { make as PageContainer } from "../../components/PageContainer.bs"
import { make as SectionHeading } from "../../components/SectionHeading.bs"
import { make as CTAButton } from "../../components/CTAButton.bs"
import { make as HotelGrid } from "../../components/HotelGrid.bs"
import { make as Hero } from "../../components/Hero.bs"
import Map from "../../components/Map.js"

import "./visitIndexPage.css"

const hotels = [
  {
    hotelName: "Fairmont Chicago -" + "\n" + "Millennium Park",
    address: "200 North Columbus Drive, 60601, Chicago",
    description:
      "The Fairmont Chicago, Millennium Park is a sophisticated high-rise that combines classic and contemporary styles, with sweeping views of downtown Chicago",
    bookingLink: "bookingLinkTemp.com",
    imageUrl:
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
  },
  {
    hotelName: "Fairmont Chicago -" + "\n" + "Millennium Park",
    address: "200 North Columbus Drive, 60601, Chicago",
    description:
      "The Fairmont Chicago, Millennium Park is a sophisticated high-rise that combines classic and contemporary styles, with sweeping views of downtown Chicago",
    bookingLink: "bookingLinkTemp.com",
    imageUrl:
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
  },
  {
    hotelName: "Fairmont Chicago -" + "\n" + "Millennium Park",
    address: "200 North Columbus Drive, 60601, Chicago",
    description:
      "The Fairmont Chicago, Millennium Park is a sophisticated high-rise that combines classic and contemporary styles, with sweeping views of downtown Chicago",
    bookingLink: "bookingLinkTemp.com",
    imageUrl:
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
  }
]

const VisitIndexPage = () => {
  console.log("visitPage-hotels: ", hotels)
  return (
    <Layout>
      <PageContainer className="Visit-HeroContainer">
        <Hero
          title="Downtown Chicago"
          subtitle="VENUE SIX10"
          bio={"610 S. Michigan Ave," + "\n" + "Chicago,IL" + "\n" + "60605"}
          graphic={
            <img
              className="Visit-HeroGraphic"
              src="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            />
          }
          ctaLabel="Directions"
          href="/tickets"
        />
      </PageContainer>
      <PageContainer className="Visit-SpeakerContainer">
        <SectionHeading heading="Hotels Nearby" />
        <HotelGrid className="Visit-HotelsGrid" hotels={hotels} />
      </PageContainer>
      <PageContainer className="Visit-SponsorContainer">
        <SectionHeading heading="City Guide" />
        <Map />
      </PageContainer>
    </Layout>
  )
}

export default VisitIndexPage
