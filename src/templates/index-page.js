import React from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../components/Layout'
import { make as Logo } from '../components/Logo.bs'
import { make as NavBar } from '../components/NavBar.bs'
import {make as Header } from '../components/Header.bs'

export const IndexPageTemplate = () => (
  <div>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
    </Helmet>
    <Logo width="400" height="400"/>
    <NavBar className="temp"/>
    <Header heading="Heading about talks and speakers" cta={true}/>
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