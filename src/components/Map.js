import React, { useState } from "react"
import ReactMapGL, { Marker,Popup } from "react-map-gl"
import { StaticQuery, graphql } from "gatsby"
import "./Map.css"

const MapMarker = ({latitude, longitude, name, address }) => {
    const googleMapsDestination = address.replace(/ /g, "+")
    const [popUpVisible, setPopUpVisible] = useState(false)
        if(latitude === 41.874040 && longitude === -87.624800 ) {
            return (
            <>
            {popUpVisible && <Popup
                latitude={41.874040 }
                longitude={-87.624800}
                offsetLeft={10}
                offsetTop={20}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setPopUpVisible(false)}
                anchor="top" >
                <div className="Map-Popover">
                    <span className="Map-Popover-Title">{name}</span>
                    <a className="Map-Popover-Directions" href={`https://www.google.com/maps?saddr=610+S+Michigan+Ave,Chicago,IL+60605,USA&daddr=${googleMapsDestination}`} target="_blank" > Directions </a>
                </div>
            </Popup>}
            <Marker latitude={41.874040} longitude={-87.624800}>
                <button className="Map-marker Map-marker-venue" onClick={() => setPopUpVisible(true)} >
                    <div className="Map-markerInnerCircle" />
                </button>
            </Marker>
            </>
            )
        } else {
            return (
            <>
                {popUpVisible && <Popup
                    latitude={latitude}
                    longitude={longitude}
                    offsetLeft={10}
                    offsetTop={20}
                    closeButton={true}
                    closeOnClick={false}
                    onClose={() => setPopUpVisible(false)}
                    anchor="top" >
                    <div className="Map-Popover">
                        <span className="Map-Popover-Title">{name}</span>
                        <a className="Map-Popover-Directions" href={`https://www.google.com/maps?saddr=610+S+Michigan+Ave,Chicago,IL+60605,USA&daddr=${googleMapsDestination}`} target="_blank" > Directions </a>
                    </div>
                </Popup>}
                <Marker latitude={latitude} longitude={longitude}>
                    <button className="Map-marker" onClick={() => setPopUpVisible(true)}>
                        <div className="Map-markerInnerCircle"/>
                    </button>
                </Marker>
            </>
            )
        }
}

const LegendNavItem = ({ label, category, setState, selected }) => {
  return (
    <button
      className={selected ? "Map-LegendNavItem Map-LegendNavItem-selected" : "Map-LegendNavItem"}
      onClick={() => setState(category)}>
      {label}
    </button>
  )
}

const PlaceCard = ({ name, address, info, website, onClick }) => {
  return (
    <a className="Map-PlaceCard" href={website} target="_blank" onClick={()=> onClick} >
      <span className="Map-PlaceCardName">{name}</span>
      <span className="Map-PlaceCardAddress">{address}</span>
      <span className="Map-PlaceCardType">{info}</span>
    </a>
  )
}

const MapView = ({ food, drink, coffee, sightseeing }) => {
  const [viewport, setViewport] = useState({
    width: 710,
    height: 430,
    latitude: 41.8764515,
    longitude: -87.6269634,
    zoom: 13,
    pitch: 75
  })

  const [mapMarkers, setMapMarkers] = useState(food)
  const [selectedMarker, setSelectedMarker] = useState(mapMarkers[0].coords)
  let selectedMapMarkers = mapMarkers.map(marker => ({coords:marker.coords, name: marker.name, address: marker.address}))

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
            selected={mapMarkers[0].type === "bar"}
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
                website={item.website}
                onClick={() => setSelectedMarker(item.coords)}
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
        <MapMarker latitude={41.874040} longitude={-87.624800} name="Venue SIX10" address="610 S Michigan Ave, Chicago, IL 60605, USA"/>
        {selectedMapMarkers.map(marker => {
          return (
            <MapMarker latitude={marker.coords[0]} longitude={marker.coords[1]} name={marker.name} address={marker.address}/>
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
        const interests = data.allInterestsJson.interests.map(i => ({
          ...i
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
