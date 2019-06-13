[%bs.raw {|require('./CTAButton.scss')|}];

[@react.component]
let make = (~label, ~to__) => {
  <Link
    className="CTAButton"
    label
    to__
  />;
};
