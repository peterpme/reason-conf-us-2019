import React from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../components/Layout'
import { make as Logo } from '../components/Logo.bs'
import { make as NavBar } from '../components/NavBar.bs'
import {make as SectionHeading } from '../components/SectionHeading.bs'
import {make as CTAButton } from '../components/CTAButton.bs'
import { make as SpeakerCard } from '../components/SpeakerCard.bs'
import { make as HeroGraphic } from '../components/HeroGraphic.bs'
import { make as SpeakerGrid } from '../components/SpeakerGrid.bs'
import { make as HeroHeader } from '../components/HeroHeader.bs'
import { make as Hero } from '../components/Hero.bs'
import { make as PageHeader } from '../components/PageHeader.bs'

const speakers = [
    {
        speakerName:"Fuck" + "\n" +"Off",
        title:"Software Engineer",
        company:"Facebook",
        bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu imperdiet risus. Nullam ac elit id metus tempor porttitor. Curabitur aliquam, lacus non varius ultrices, tortor diam mollis quam, ornare ultricies tortor leo id libero.",
        imageUrl:"https://images.unsplash.com/photo-1559697242-07e90b48b9fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        speakerName:"Fuck" + "\n" +"Off",
        title:"Software Engineer",
        company:"Facebook",
        bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu imperdiet risus. Nullam ac elit id metus tempor porttitor. Curabitur aliquam, lacus non varius ultrices, tortor diam mollis quam, ornare ultricies tortor leo id libero.",
        imageUrl:"https://images.unsplash.com/photo-1559697242-07e90b48b9fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        speakerName:"Fuck" + "\n" +"Off",
        title:"Software Engineer",
        company:"Facebook",
        bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu imperdiet risus. Nullam ac elit id metus tempor porttitor. Curabitur aliquam, lacus non varius ultrices, tortor diam mollis quam, ornare ultricies tortor leo id libero.",
        imageUrl:"https://images.unsplash.com/photo-1559697242-07e90b48b9fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
]
export const IndexPageTemplate = () => (
  <div style={{backgroundColor:"#000000"}}>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
    </Helmet>
    <PageHeader />
    <SpeakerGrid speakers={speakers} />
    <Hero title="Chicago, IL" subtitle="October 7-9, 2019" bio="A hands-on two-day conference with workshops and talks on React Native from Expo and Software Mansion." ctaLabel="Tickets" href="/tickets">
        <a style={{color:"#ffffff", textDecoration:"underline", fontWeight: "bold", maxWidth:"160px"}}>Because Peter Complains When I Don't use children</a>
    </Hero>
  </div>
)


const IndexPage = () => {
  return (
      <IndexPageTemplate
      />
  )
}

export default IndexPage