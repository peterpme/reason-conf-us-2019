[%bs.raw {|require('./SectionHeading.css')|}];

[@react.component]
let make = (~heading, ~children) => {
  <div className="SectionHeading-container" href="/tickets">
    <StyledText className="SectionHeading" fontSize="30px">
      heading->React.string
    </StyledText>
    children
  </div>;
};
