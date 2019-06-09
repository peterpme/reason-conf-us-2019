[%bs.raw {|require('./Hero.css')|}];

[@react.component]
let make = (~title, ~subtitle, ~bio, ~ctaLabel, ~href, ~graphic, ~children) => {
  <div className="Hero">
    <HeroHeader title subtitle bio ctaLabel href> children </HeroHeader>
    graphic
  </div>;
};