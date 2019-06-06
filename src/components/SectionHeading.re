[%bs.raw {|require('./SectionHeading.css')|}];

[@react.component]
let make = (~heading, ~children) => {
  <div className="SectionHeading-container" href="/tickets">
    <StyledText className="SectionHeading" fontSize="36px">
      heading->React.string
      children
    </StyledText>
  </div>;
};