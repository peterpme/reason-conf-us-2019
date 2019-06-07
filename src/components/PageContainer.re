[@react.component]
let make = (~className=?, ~children) =>
  <div ?className style={ReactDOMRe.Style.make(~maxWidth="1150px", ())}>
    children
  </div>;