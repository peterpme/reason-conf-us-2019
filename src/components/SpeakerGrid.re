[%bs.raw {|require('./SpeakerGrid.css')|}];

[@react.component]
let make = (~speakers) => {
  <div className="SpeakerGrid">
    {speakers
     ->Belt.Array.map(s =>
         <SpeakerCard
           name=s##name
           title=s##title
           company=s##company
           bio=s##bio
           imageUrl=s##imageUrl
         />
       )
     ->ReasonReact.array}
  </div>;
};
