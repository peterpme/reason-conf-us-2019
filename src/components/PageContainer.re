[%bs.raw {|require('./PageContainer.scss')|}];
[@react.component]
let make = (~children) =>
  <div className="PageContainer">
    children
  </div>;
