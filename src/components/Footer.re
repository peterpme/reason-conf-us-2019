[%bs.raw {|require('./Footer.scss')|}];
let svgLogo = [%bs.raw {|require('../img/Logo-horizontal-white.svg')|}];
[@react.component]
let make = () => {
  <footer className="Footer">
    <img width="200" src=svgLogo />
  </footer>
}
