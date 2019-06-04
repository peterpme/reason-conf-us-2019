[%bs.raw {|require('./SectionHeading.css')|}];

[@react.component]
let make = (~heading) => {
  <div className="SectionHeading-container" href="/tickets">
    <StyledText className="SectionHeading" fontSize="36px">
      heading->React.string
    </StyledText>
  </div>;
};