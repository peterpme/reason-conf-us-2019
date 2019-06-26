import React, { useState } from "react"
import ReactMapGL, { Marker } from "react-map-gl"
import { StaticQuery, graphql } from "gatsby"
import "./Map.css"

const LegendNavItem = ({ label, category, setState, selected }) => {
  return (
    <button
      className={selected ? "Map-LegendNavItem Map-LegendNavItem-selected" : "Map-LegendNavItem"}
      onClick={() => setState(category)}>
      {label}
    </button>
  )
}

const PlaceCard = ({ name, address, info, website }) => {
  return (
    <a className="Map-PlaceCard" href={website}>
      <span className="Map-PlaceCardName">{name}</span>
      <span className="Map-PlaceCardAddress">{address}</span>
      <span className="Map-PlaceCardType">{info}</span>
    </a>
  )
}

const MapView = ({ food, bar, coffee, sightseeing }) => {
  const [viewport, setViewport] = useState({
    width: 710,
    height: 430,
    latitude: 41.8764515,
    longitude: -87.6269634,
    zoom: 13,
    pitch: 75
  })

  const [mapMarkers, setMapMarkers] = useState(food)
  let meme = mapMarkers.map(marker => (marker.coords))
  console.log(meme)
  return (
    <div className="Map-container">
      <div className="Map-legend">
        <div className="Map-legendNav">
          <LegendNavItem
            setState={setMapMarkers}
            label="Food"
            category={food}
            selected={mapMarkers[0].type === "food"}
          />
          <LegendNavItem
            setState={setMapMarkers}
            label="Drink"
            category={bar}
            selected={mapMarkers[0].type === "Bar"}
          />
          <LegendNavItem
            setState={setMapMarkers}
            label="Coffee"
            category={coffee}
            selected={mapMarkers[0].type === "coffee"}
          />
          <LegendNavItem
            setState={setMapMarkers}
            label="Sightseeing"
            category={sightseeing}
            selected={mapMarkers[0].type === "sightseeing"}
          />
        </div>
        <div className="Map-PlaceCardContainer">
          {mapMarkers.map(item => {
            return (
              <PlaceCard
                name={item.name}
                address={item.address}
                desc={item.desc}
                link={item.link}
              />
            )
          })}
        </div>
      </div>
      <ReactMapGL
        {...viewport}
        mapStyle={"mapbox://styles/sebastiankurp/cjwr24hr8076i1cn5s5478no0"}
        mapboxApiAccessToken="pk.eyJ1Ijoic2ViYXN0aWFua3VycCIsImEiOiJjandwZWZ1emkxOHR1NDhwOG1lM2pmeHVmIn0.fHuAftP7b6uRy1UfWieSPQ"
        onViewportChange={viewport => setViewport(viewport)}>
        {meme.map(marker => {
          return (
            <Marker latitude={marker[0]} longitude={marker[1]}>
              <div className="Map-marker">
                <div className="Map-markerInnerCircle" />
              </div>
            </Marker>
          )
        })}
      </ReactMapGL>
    </div>
  )
}

export default function Map() {
  return (
    <StaticQuery
      query={graphql`
        query Interests {
          allInterestsJson(filter: { Type: { ne: "hotel" } }) {
            interests: nodes {
              address: Address
              coords: Coords
              amenities: Amenities
              info: Info
              name: Name
              phone: Phone
              type: Type
              website: Website
              id
            }
          }
        }
      `}
      render={data => {
        const DEFAULT_COORDS = [41.8767575, -87.6278634]
        const interests = data.allInterestsJson.interests.map(i => ({
          ...i,
          // coords: DEFAULT_COORDS
        }))

        const food = interests.filter(i => i.type === "food")
        const drink = interests.filter(i => i.type === "bar")
        const coffee = interests.filter(i => i.type === "coffee")
        const sightseeing = interests.filter(i => i.type === "sightseeing")

        return <MapView food={food} drink={drink} coffee={coffee} sightseeing={sightseeing} />
      }}
    />
  )
}
