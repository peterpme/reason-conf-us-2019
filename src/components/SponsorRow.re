[%bs.raw {|require('./SponsorRow.scss')|}];

[@react.component]
let make = (~tier, ~sponsors) => {
  <div className="SponsorRow">
    <span className="SponsorRow-Tier"> tier->React.string </span>
    <div className="SponsorRow-Row">
      {sponsors
       ->Belt.Array.map(s =>
           <a className="SponsorRow-Link" href=s##url target="_blank">
             <div
               className="SponsorRow-Logo"
               style={ReactDOMRe.Style.make(
                 ~backgroundImage="url(" ++ s##imageUrl ++ ")",
                 ~backgroundRepeat="no-repeat",
                 (),
               )}
               alt=s##name
             />
           </a>
         )
       ->ReasonReact.array}
    </div>
  </div>;
};