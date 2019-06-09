import React from "react"

import { make as Layout } from "../../components/Layout.bs"
import { make as PageContainer } from "../../components/PageContainer.bs"
import { make as SectionHeading } from "../../components/SectionHeading.bs"
import { make as CTAButton } from "../../components/CTAButton.bs"
import { make as SpeakerCard } from "../../components/SpeakerCard.bs"
import { make as HeroGraphic } from "../../components/HeroGraphic.bs"
import { make as SpeakerGrid } from "../../components/SpeakerGrid.bs"
import { make as Hero } from "../../components/Hero.bs"
import { make as PageHeader } from "../../components/PageHeader.bs"

import "./visitIndexPage.css"

const speakers = [
  {
    speakerName: "Fuck" + "\n" + "Off",
    title: "Software Engineer",
    company: "Facebook",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu imperdiet risus. Nullam ac elit id metus tempor porttitor. Curabitur aliquam, lacus non varius ultrices, tortor diam mollis quam, ornare ultricies tortor leo id libero.",
    imageUrl:
      "https://images.unsplash.com/photo-1559697242-07e90b48b9fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    speakerName: "Fuck" + "\n" + "Off",
    title: "Software Engineer",
    company: "Facebook",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu imperdiet risus. Nullam ac elit id metus tempor porttitor. Curabitur aliquam, lacus non varius ultrices, tortor diam mollis quam, ornare ultricies tortor leo id libero.",
    imageUrl:
      "https://images.unsplash.com/photo-1559697242-07e90b48b9fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    speakerName: "Fuck" + "\n" + "Off",
    title: "Software Engineer",
    company: "Facebook",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu imperdiet risus. Nullam ac elit id metus tempor porttitor. Curabitur aliquam, lacus non varius ultrices, tortor diam mollis quam, ornare ultricies tortor leo id libero.",
    imageUrl:
      "https://images.unsplash.com/photo-1559697242-07e90b48b9fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  }
]

const VisitIndexPage = () => {
  return (
    <Layout>
      <PageContainer className="Visit-HeroContainer">
        <Hero
          title="Downtown Chicago"
          subtitle="VENUE SIX10"
          bio={"610 S. Michigan Ave," + "\n" + "Chicago,IL" + "\n" + "60605"}
          graphic={
            <img
              className="Visit-HeroGraphic"
              src="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            />
          }
          ctaLabel="Directions"
          href="/tickets"
        />
      </PageContainer>
      <PageContainer className="Visit-SpeakerContainer">
        <SectionHeading heading="Hotels Nearby" />
        <SpeakerGrid className="Visit-SpeakerGrid" speakers={speakers} />
      </PageContainer>
      <PageContainer className="Visit-SponsorContainer">
        <SectionHeading heading="Sponsored by">
          <CTAButton buttonStyle="Visit-SpeakersCTA" label="Become a sponsor" to="/Sponsors" />
        </SectionHeading>
      </PageContainer>
    </Layout>
  )
}

export default VisitIndexPage
