import React from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../components/Layout'
import { make as Logo } from '../components/Logo.bs'
import { make as NavBar } from '../components/NavBar.bs'
import {make as SectionHeading } from '../components/SectionHeading.bs'
import {make as CTAButton } from '../components/CTAButton.bs'

export const IndexPageTemplate = () => (
  <div>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
    </Helmet>
    <Logo width="400" height="400"/>
    <NavBar className="temp"/>
    <SectionHeading heading="Heading about talks and speakers" />
    <CTAButton label="Call To Action" to="/test" height="50px" width="200px" />
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