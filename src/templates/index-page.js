import React from 'react'
import {Helmet} from "react-helmet"

import Layout from '../components/Layout'
import { make as Logo } from '../components/Logo.bs'
import { make as NavBar } from '../components/NavBar.bs'
import { make as SpeakerCard } from '../components/SpeakerCard.bs'
import { make as HeroGraphic } from '../components/HeroGraphic.bs'
import { make as SpeakerGrid } from '../components/SpeakerGrid.bs'

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
  <div>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
    </Helmet>
    <Logo width="400" height="400"/>
    <NavBar className="temp"/>
    <HeroGraphic />
    <SpeakerCard imageUrl="https://images.unsplash.com/photo-1559489744-3492970a72f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" speakerName={"Fuck" + "\n" +"Off"} title="Software Engineer" company="Draftbit" bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu imperdiet risus. Nullam ac elit id metus tempor porttitor. Curabitur aliquam, lacus non varius ultrices, tortor diam mollis quam, ornare ultricies tortor leo id libero."/>
    <SpeakerGrid speakers={speakers} />
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