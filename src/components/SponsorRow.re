[%bs.raw {|require('./SponsorRow.scss')|}];

[@react.component]
let make = (~tier, ~sponsors) => {
  <div className="SponsorRow">
    <span className="SponsorRow-Tier"> tier </span>
    <div className="SponsorRow-Row">
      {sponsors
       ->Belt.Array.map(s =>
           <a href=s##url target="_blank">
             <img
               className="SpeakerRow-Logo"
               src=s##sponsorImage
               alt=s##name
             />
           </a>
         )
       ->ReasonReact.array}
    </div>
  </div>;
};