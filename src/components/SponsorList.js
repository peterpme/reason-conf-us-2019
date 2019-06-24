import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { make as SpeakerGrid } from "./SpeakerGrid.bs"

export default function SpeakerList() {
  return (
    <StaticQuery
      query={graphql`
        query Speakers {
          allSponsorsJson {
            tiers: nodes {
              tier
              sponsors {
                name
                imageUrl
              }
            }
          }
        }
      `}
      render={data => <SpeakerGrid speakers={data.allSpeakersJson.speakers} />}
    />
  )
}
