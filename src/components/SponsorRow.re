[%bs.raw {|require('./SponsorRow.scss')|}];

[@react.component]
let make = (~tier, ~sponsors) => {
  <div className="SponsorRow">
    <span className="SponsorRow-Tier"> tier </span>
    <div className="SponsorRow-Row">
      {sponsors##sponsors
       ->Belt.Array.map(s =>
           <a href=s##url target="_blank">
             <img className="SponsorRow-Logo" src=s##logo alt=s##name />
           </a>
         )
       ->ReasonReact.array}
    </div>
  </div>;
};