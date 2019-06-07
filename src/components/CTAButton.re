[%bs.raw {|require('./CTAButton.css')|}];

[@react.component]
let make = (~buttonStyle, ~label, ~to_, ~height="50px", ~width="200px") => {
  <Link
    className={"CTAButton " ++ buttonStyle}
    labelClassName="CTAButton-label"
    style={ReactDOMRe.Style.make(~height, ~width, ())}
    label
    to_
  />;
};