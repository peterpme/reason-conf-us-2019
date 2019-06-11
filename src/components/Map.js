import React, { useState } from "react"
import ReactMapGL, { Marker } from "react-map-gl"

import "./Map.css"

const food = [
  {
    name: "Food Palce",
    type: "food",
    address: "Random Address",
    desc: "Food Type",
    link: "/link.com",
    coords: [41.8767575, -87.6278634]
  },
  {
    name: "Food Palce",
    type: "food",
    address: "Random Address",
    desc: "Food Type",
    link: "/link.com",
    coords: [41.8765575, -87.6259634]
  },
  {
    name: "Food Palce",
    type: "food",
    address: "Random Address",
    desc: "Food Type",
    link: "/link.com",
    coords: [41.8763585, -87.6298654]
  },
  {
    name: "Food Palce",
    type: "food",
    address: "Random Address",
    desc: "Food Type",
    link: "/link.com",
    coords: [41.8769585, -87.6288694]
  },
  {
    name: "Food Palce",
    type: "food",
    address: "Random Address",
    desc: "Food Type",
    link: "/link.com",
    coords: [41.8765595, -87.6138694]
  }
]

const drink = [
  {
    name: "Drink Palce",
    type: "drink",
    address: "Random Address",
    desc: "Drink Type",
    link: "/link.com",
    coords: [41.8767575, -87.6278634]
  },
  {
    name: "Drink Palce",
    type: "drink",
    address: "Random Address",
    desc: "Drink Type",
    link: "/link.com",
    coords: [41.8767575, -87.6278634]
  },
  {
    name: "Drink Palce",
    type: "drink",
    address: "Random Address",
    desc: "Drink Type",
    link: "/link.com",
    coords: [41.8767575, -87.6278634]
  },
  {
    name: "Drink Palce",
    type: "drink",
    address: "Random Address",
    desc: "Drink Type",
    link: "/link.com",
    coords: [41.8767575, -87.6278634]
  },
  {
    name: "Drink Palce",
    type: "drink",
    address: "Random Address",
    desc: "Drink Type",
    link: "/link.com",
    coords: [41.8767575, -87.6278634]
  }
]

const coffee = [
  {
    name: "Coffee Palce",
    type: "coffee",
    address: "Random Address",
    desc: "Coffee Type",
    link: "/link.com",
    coords: [41.8767575, -87.6278634]
  },
  {
    name: "Coffee Palce",
    type: "coffee",
    address: "Random Address",
    desc: "Coffee Type",
    link: "/link.com",
    coords: [41.8767575, -87.6278634]
  },
  {
    name: "Coffee Palce",
    type: "coffee",
    address: "Random Address",
    desc: "Coffee Type",
    link: "/link.com",
    coords: [41.8767575, -87.6278634]
  },
  {
    name: "Coffee Palce",
    type: "coffee",
    address: "Random Address",
    desc: "Coffee Type",
    link: "/link.com",
    coords: [41.8767575, -87.6278634]
  },
  {
    name: "Coffee Palce",
    type: "coffee",
    address: "Random Address",
    desc: "Coffee Type",
    link: "/link.com",
    coords: [41.8767575, -87.6278634]
  },
  {
    name: "Coffee Palce",
    type: "coffee",
    address: "Random Address",
    desc: "Coffee Type",
    link: "/link.com",
    coords: [41.8767575, -87.6278634]
  }
]

const sightseeing = [
  {
    name: "SightSeeing Palce",
    type: "sightseeing",
    address: "Random Address",
    desc: "Sightseeing Type",
    link: "/link.com",
    coords: [41.8767575, -87.6278634]
  },
  {
    name: "SightSeeing Palce",
    type: "sightseeing",
    address: "Random Address",
    desc: "Sightseeing Type",
    link: "/link.com",
    coords: [41.8767575, -87.6278634]
  },
  {
    name: "SightSeeing Palce",
    type: "sightseeing",
    address: "Random Address",
    desc: "Sightseeing Type",
    link: "/link.com",
    coords: [41.8767575, -87.6278634]
  },
  {
    name: "SightSeeing Palce",
    type: "sightseeing",
    address: "Random Address",
    desc: "Sightseeing Type",
    link: "/link.com",
    coords: [41.8767575, -87.6278634]
  },
  {
    name: "SightSeeing Palce",
    type: "sightseeing",
    address: "Random Address",
    desc: "Sightseeing Type",
    link: "/link.com",
    coords: [41.8767575, -87.6278634]
  },
  {
    name: "SightSeeing Palce",
    type: "sightseeing",
    address: "Random Address",
    desc: "Sightseeing Type",
    link: "/link.com",
    coords: [41.8764575, -87.6268634]
  }
]

const LegendNavItem = ({ label, category, setState, selected }) => {
  return (
    <button
      className={selected ? "Map-LegendNavItem Map-LegendNavItem-selected" : "Map-LegendNavItem"}
      onClick={() => setState(category)}>
      {label}
    </button>
  )
}

const PlaceCard = ({ name, address, desc, link }) => {
  return (
    <a className="Map-PlaceCard" href={link}>
      <span className="Map-PlaceCardName">{name}</span>
      <span className="Map-PlaceCardAddress">{address}</span>
      <span className="Map-PlaceCardType">{desc}</span>
    </a>
  )
}
const Map = () => {
  const [viewport, setViewport] = useState({
    width: 710,
    height: 430,
    latitude: 41.8764515,
    longitude: -87.6269634,
    zoom: 13,
    pitch: 90
  })
  const [mapMarkers, setMapMarkers] = useState(food)

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
            category={drink}
            selected={mapMarkers[0].type === "drink"}
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
        {mapMarkers.map(marker => {
          return (
            <Marker latitude={marker.coords[0]} longitude={marker.coords[1]}>
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

export default Map
