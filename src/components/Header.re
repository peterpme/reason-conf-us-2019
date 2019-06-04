[%bs.raw {|require('./Header.css')|}];

[@react.component]
let make = (~heading) => {
  <div className="Header-container" href="/tickets">
    <StyledText className="Heading" fontSize="36px">
      heading->React.string
    </StyledText>
  </div>;
};