import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Content, { HTMLContent } from "../components/Content"
import { make as PageContainer } from "../components/PageContainer.bs"
import { make as StyledText } from "../components/StyledText.bs"

export const CocPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <PageContainer>
      <StyledText fontSize="34px">{title}</StyledText>
      <PageContent content={content} />
    </PageContainer>
  )
}

CocPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const CocPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CocPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

CocPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default CocPage

export const aboutPageQuery = graphql`
  query CocPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
