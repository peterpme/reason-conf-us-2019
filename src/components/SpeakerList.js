import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { make as SpeakerGrid } from "./SpeakerGrid.bs"

export default function SpeakerList() {
  return (
    <StaticQuery
      query={graphql`
        query SpeakerList {
          allSpeakersJson {
            speakers: edges {
              speaker: node {
                id
                name
                about
                type
                location
                twitterUrl
                githubUrl
                imageUrl
              }
            }
          }
        }
      `}
      render={data => {
        const speakers = data.allSpeakersJson.speakers.map(({ speaker }) => speaker)
        return <SpeakerGrid speakers={speakers} />
      }}
    />
  )
}
