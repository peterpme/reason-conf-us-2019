import React from "react"
import groupBy from "lodash.groupby"
import { StaticQuery, graphql } from "gatsby"

const getImageSize = (tier, name) => {
  if (name === "Facebook") return { width: 75, height: 75 }
  switch (tier) {
    case "Platinum":
      return { width: 250, height: 50 }
    case "Gold":
      return { width: 200, height: 50 }
    case "Silver":
      return { width: 150, height: 50 }
    case "Bronze":
      return { width: 100, height: 50 }
    default:
      return { width: 50, height: 50 }
  }
}

const Row = ({ title, sponsors }) => {
  return (
    <div
      style={{
        paddingBottom: 36,
        marginBottom: 36,
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
      }}>
      <h2 style={{ fontSize: 20, marginBottom: 18 }}>{title}</h2>
      <div style={{ textAlign: "center", display: "flex", alignItems: "center" }}>
        {sponsors
          .filter(s => Boolean(s.imageUrl))
          .map(s => {
            const { width, height } = getImageSize(title, s.name)
            return (
              <figure style={{ paddingRight: 24 }}>
                <a href={s.url}>
                  <img style={{ width }} width={width} src={s.imageUrl} title={s.name} />
                </a>
              </figure>
            )
          })}
      </div>
    </div>
  )
}

const SponsorRow = ({ sponsors }) => {
  const tiers = groupBy(sponsors, "package")
  return (
    <section>
      <Row title="Platinum" sponsors={tiers.Platinum} />
      <Row title="Gold" sponsors={tiers.Gold} />
      <Row title="Silver" sponsors={tiers.Silver} />
      <Row title="Bronze" sponsors={tiers.Bronze} />
    </section>
  )
}

export default function SponsorList() {
  return (
    <StaticQuery
      query={graphql`
        query Speakers {
          allSponsorsJson {
            nodes {
              id
              name
              package
              url
              imageUrl
            }
          }
        }
      `}
      render={data => <SponsorRow sponsors={data.allSponsorsJson.nodes} />}
    />
  )
}
