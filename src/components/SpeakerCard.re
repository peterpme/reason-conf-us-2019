[%bs.raw {|require('./SpeakerCard.css')|}];

[@react.component]
let make = (~speakerName, ~title, ~bio, ~image) => {
  <div className="SpeakerCard">
    <img
      className="SpeakerCard-avatar"
      src="https://images.unsplash.com/photo-1559489744-3492970a72f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
      alt="Speaker Avatar"
    />
    <span className="SpeakerCard-name"> speakerName->React.string </span>
    <div className="SpeakerCard-infoContainer">
      <span className="SpeakerCard-title"> title->React.string </span>
      <p className="SpeakerCard-bio"> bio->React.string </p>
    </div>
  </div>;
};