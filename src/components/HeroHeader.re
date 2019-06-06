[%bs.raw {|require('./HeroHeader.css')|}];

[@react.component]
let make = (~title, ~subtitle, ~bio, ~ctaLabel, ~href, ~children) => {
  <div className="HeroHeader">
    <span className="HeroHeader-title"> title->React.string </span>
    <span className="HeroHeader-subtitle"> subtitle->React.string </span>
    <p className="HeroHeader-bio"> bio->React.string </p>
    <div className="HeroHeader-linkSection">
      <a className="CTAButton" href>
        <span className="CTAButton-label"> ctaLabel->React.string </span>
      </a>
      children
    </div>
  </div>;
};