let svgGithub = [%bs.raw {|require('../img/github.svg')|}];
let svgTwitter = [%bs.raw {|require('../img/twitter.svg')|}];
[%bs.raw {|require('./SpeakerCard.css')|}];

[@react.component]
let make = (~name, ~about, ~githubUrl, ~twitterUrl, ~imageUrl, ~location) =>
  <div className="SpeakerCard">
    <img className="SpeakerCard-avatar" src=imageUrl alt="Speaker Avatar" />
    <span className="SpeakerCard-name"> name->React.string </span>
    <div className="SpeakerCard-infoContainer">
      <span className="SpeakerCard-title"> {React.string(about)} </span>
      <p className="SpeakerCard-bio"> location->React.string </p>
      <ul className="SpeakerCard-links">
        <li>
          <a href=twitterUrl>
            <img src=svgTwitter width="24" height="24" />
          </a>
        </li>
        <li>
          <a href=githubUrl> <img src=svgGithub width="24" height="24" /> </a>
        </li>
      </ul>
    </div>
  </div>;
