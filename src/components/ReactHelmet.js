import React from "react"
import { Helmet } from "react-helmet"

const ReactHelmet = () => {
  return (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <style>
        {
          "body { display: flex; flex-direction: column; align-items:center; background: linear-gradient(159.38deg, #3A7EDD -2.87%, #0A1423 65.41%);}"
        }
      </style>
    </Helmet>
  )
}

export default ReactHelmet
