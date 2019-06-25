import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { make as HotelGrid } from "./HotelGrid.bs"

export default function HotelList() {
  return (
    <StaticQuery
      query={graphql`
        query Hotels {
          allInterestsJson(filter: { Type: { eq: "hotel" } }) {
            hotels: nodes {
              id
              address: Address
              amenities: Amenities
              info: Info
              name: Name
              phone: Phone
              imageUrl: ImageUrl
              bookingLink: Website
            }
          }
        }
      `}
      render={data => <HotelGrid hotels={data.allInterestsJson.hotels} />}
    />
  )
}
