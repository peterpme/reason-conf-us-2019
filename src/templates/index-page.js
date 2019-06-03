import React from 'react'
import {Helmet} from "react-helmet"

import Layout from '../components/Layout'
import Logo from '../components/Logo.bs.js'
import NavBar from '../components/NavBar.bs.js'

export const IndexPageTemplate = () => (
  <div>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
    </Helmet>
    <Logo width="400" height="400"/>
    <NavBar className="temp"/>
  </div>
)


const IndexPage = () => {
  return (
    <Layout>
      <IndexPageTemplate
      />
    </Layout>
  )
}

export default IndexPage