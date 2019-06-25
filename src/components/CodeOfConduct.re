[%bs.raw {|require('./Link.scss')|}];
[@react.component]
let make = () => {
  <PageContainer>
  <Section title="Code of Conduct">
  <StyledText fontSize="16px" fontWeight="normal">
    "A primary goal of Reason Conf is to be inclusive to the largest number of contributors, with the most varied and diverse backgrounds possible."->React.string
  </StyledText>
  <br />
  <br />
  <StyledText fontSize="16px" fontWeight="normal">
    "As such, we are committed to providing a friendly, safe and welcoming environment for all, regardless of gender, sexual orientation, ability, ethnicity, socioeconomic status, and religion (or lack thereof)."->React.string
  </StyledText>
  <br/>
  <br />
  <StyledText fontSize="16px" fontWeight="normal">
    "This code of conduct outlines our expectations for all those who participate in our community, as well as the consequences for unacceptable behavior.
    We invite all those who participate in Reason Conf to help us create safe and positive experiences for everyone."->React.string
  </StyledText>
  <br />
  <br />
  <Link to__="/code-of-conduct">
    <span className="Link--bare">"Read More"->React.string</span>
  </Link>
  </Section>
  </PageContainer>
}
