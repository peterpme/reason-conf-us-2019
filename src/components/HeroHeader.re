[%bs.raw {|require('./HeroHeader.css')|}];

[@react.component]
let make = (~title, ~subtitle, ~bio, ~ctaLabel, ~href, ~children) => {
  <div className="HeroHeader">
    <h1 className="HeroHeader-title"> title->React.string </h1>
    <span className="HeroHeader-subtitle"> subtitle->React.string </span>
    <p className="HeroHeader-bio"> bio->React.string </p>
    <div className="HeroHeader-linkSection">
    <Button href mode="solid" label=ctaLabel />
      children
    </div>
  </div>;
};
