[%bs.raw {|require('./Header.css')|}];

[@react.component]
let make = (~heading, ~cta=false) => {
  <div className="Header-container" href="/tickets">
    <StyledText className="Heading" fontSize="36px">
      heading->React.string
    </StyledText>
    {cta
       ? <Link
           className="CTAButton"
           labelClassName="CTAButton-label"
           label="View All Speakers"
           to_="/speakers"
         />
       : React.null}
  </div>;
};