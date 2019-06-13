[%bs.raw {|require('./SponsorRow.scss')|}];

[@react.component]
let make = (~tier, ~sponsors) => {
  let logoWidth =
    switch (tier) {
    | "Platinum" => "400px"
    | "Gold" => "300px"
    | "Silver" => "200px"
    | "Bronze" => "100px"
    | _ => "100px"
    };

  let logoHeight =
    switch (tier) {
    | "Platinum" => "200px"
    | "Gold" => "100px"
    | "Silver" => "50px"
    | "Bronze" => "25px"
    | _ => "100px"
    };
  <div className="SponsorRow">
    <span className="SponsorRow-Tier"> tier->React.string </span>
    <div className="SponsorRow-Row">
      {sponsors
       ->Belt.Array.map(s =>
           <a
             className="SponsorRow-Link"
             href=s##url
             target="_blank"
             rel="noopener nofollow">
             <div
               alt=s##name
               className="SponsorRow-Logo"
               style={ReactDOMRe.Style.make(
                 ~backgroundImage="url(" ++ s##imageUrl ++ ")",
                 ~backgroundRepeat="no-repeat",
                 ~width=logoWidth,
                 ~height=logoHeight,
                 (),
               )}
             />
           </a>
         )
       ->ReasonReact.array}
    </div>
  </div>;
};