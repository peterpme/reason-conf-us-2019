import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { make as SpeakerGrid } from "./SpeakerGrid.bs"

export default function SpeakerList() {
  return (
    <StaticQuery
      query={graphql`
        query SpeakerList {
          allSpeakersJson {
            speakers: nodes {
              bio
              title
              name
              imageUrl
              id
              featured
              company
            }
          }
        }
      `}
      render={data => <SpeakerGrid speakers={data.allSpeakersJson.speakers} />}
    />
  )
}
