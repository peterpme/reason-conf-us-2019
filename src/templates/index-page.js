import React from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../components/Layout'
import { make as Logo } from '../components/Logo.bs'
import { make as NavBar } from '../components/NavBar.bs'
import {make as SectionHeading } from '../components/SectionHeading.bs'
import {make as CTAButton } from '../components/CTAButton.bs'
import { make as SpeakerCard } from '../components/SpeakerCard.bs'
import { make as HeroGraphic } from '../components/HeroGraphic.bs'
import { make as HeroHeader } from '../components/HeroHeader.bs'
import { make as Hero } from '../components/Hero.bs'

export const IndexPageTemplate = () => (
  <div style={{backgroundColor:"#000000"}}>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
    </Helmet>
    <Logo width="400" height="400"/>
    <NavBar className="temp"/>
    <SpeakerCard imageUrl="https://images.unsplash.com/photo-1559489744-3492970a72f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" speakerName={"Fuck" + "\n" +"Off"} title="Software Engineer" company="Draftbit" bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu imperdiet risus. Nullam ac elit id metus tempor porttitor. Curabitur aliquam, lacus non varius ultrices, tortor diam mollis quam, ornare ultricies tortor leo id libero."/>
    <Hero title="Chicago, IL" subtitle="October 7-9, 2019" bio="A hands-on two-day conference with workshops and talks on React Native from Expo and Software Mansion." ctaLabel="Tickets" href="/tickets">
        <a style={{color:"#ffffff", textDecoration:"underline", fontWeight: "bold", maxWidth:"160px"}}>Because Peter Complains When I Don't use children</a>
    </Hero>
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