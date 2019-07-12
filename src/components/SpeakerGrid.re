[%bs.raw {|require('./SpeakerGrid.css')|}];

[@react.component]
let make = (~speakers) => {
  <div className="SpeakerGrid">
    {speakers
     ->Belt.Array.map(s =>
         <SpeakerCard
           key=s##id
           name=s##name
           about=s##about
           location=s##location
           githubUrl=s##githubUrl
           twitterUrl=s##twitterUrl
           imageUrl=s##imageUrl
         />
       )
     ->ReasonReact.array}
  </div>;
};
