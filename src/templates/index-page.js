import React from "react"
import withSizes from "react-sizes"

import { make as Layout } from "../components/Layout.bs"
import { make as PageContainer } from "../components/PageContainer.bs"
import { make as SectionHeading } from "../components/SectionHeading.bs"
import { make as CTAButton } from "../components/CTAButton.bs"
import { make as HeroGraphic } from "../components/HeroGraphic.bs"
import { make as SpeakerGrid } from "../components/SpeakerGrid.bs"
import { make as Hero } from "../components/Hero.bs"

import "./indexPage.css"

const speakers = [
  {
    speakerName: "First" + "\n" + "Name",
    title: "Software Engineer",
    company: "Facebook",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu imperdiet risus. Nullam ac elit id metus tempor porttitor. Curabitur aliquam, lacus non varius ultrices, tortor diam mollis quam, ornare ultricies tortor leo id libero.",
    imageUrl:
      "https://images.unsplash.com/photo-1559697242-07e90b48b9fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    speakerName: "First" + "\n" + "Name",
    title: "Software Engineer",
    company: "Facebook",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu imperdiet risus. Nullam ac elit id metus tempor porttitor. Curabitur aliquam, lacus non varius ultrices, tortor diam mollis quam, ornare ultricies tortor leo id libero.",
    imageUrl:
      "https://images.unsplash.com/photo-1559697242-07e90b48b9fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    speakerName: "First" + "\n" + "Name",
    title: "Software Engineer",
    company: "Facebook",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu imperdiet risus. Nullam ac elit id metus tempor porttitor. Curabitur aliquam, lacus non varius ultrices, tortor diam mollis quam, ornare ultricies tortor leo id libero.",
    imageUrl:
      "https://images.unsplash.com/photo-1559697242-07e90b48b9fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  }
]

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 800
})

const IndexPage = ({ isMobile }) => {
  return (
    <Layout>
      <PageContainer className="Landing-HeroContainer">
        <Hero
          title="Chicago, IL"
          subtitle="October 7-9, 2019"
          bio="A hands-on two-day conference with workshops and talks on React Native from Expo and Software Mansion."
          graphic={
            <HeroGraphic width={isMobile ? "360" : "760"} height={isMobile ? "200" : "380"} />
          }
          ctaLabel="Tickets"
          href="/tickets">
          <a
            style={{
              color: "#ffffff",
              textDecoration: "underline",
              fontWeight: "bold",
              maxWidth: "160px"
            }}>
            Become A Sponsor
          </a>
        </Hero>
      </PageContainer>
      <PageContainer className="Landing-SpeakerContainer">
        <SectionHeading heading="Heading about talks and speakers">
          <CTAButton buttonStyle="Landing-SpeakersCTA" label="View All Speakers" to="/Speakers" />
        </SectionHeading>
        <SpeakerGrid className="Landing-SpeakerGrid" speakers={speakers} />
      </PageContainer>
      <PageContainer className="Landing-SponsorContainer">
        <SectionHeading heading="Sponsored by">
          <CTAButton buttonStyle="Landing-SpeakersCTA" label="Become a sponsor" to="/Sponsors" />
        </SectionHeading>
      </PageContainer>
    </Layout>
  )
}

export default withSizes(mapSizesToProps)(IndexPage)
