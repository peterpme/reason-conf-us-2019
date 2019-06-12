[%bs.raw {|require('./SpeakerCard.css')|}];

[@react.component]
let make = (~name, ~title, ~company, ~bio, ~imageUrl) => {
  <div className="SpeakerCard">
    <img className="SpeakerCard-avatar" src=imageUrl alt="Speaker Avatar" />
    <span className="SpeakerCard-name"> name->React.string </span>
    <div className="SpeakerCard-infoContainer">
      <span className="SpeakerCard-title">
        {{title ++ " at " ++ company}->React.string}
      </span>
      <p className="SpeakerCard-bio"> bio->React.string </p>
    </div>
  </div>;
};
