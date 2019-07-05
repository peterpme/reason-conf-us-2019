[%bs.raw {|require('./NavBar.scss')|}];
let svgLogo = [%bs.raw {|require('../img/logo-horizontal-white.svg')|}];

module NavItem = {
  [@react.component]
  let make = (~label, ~to_) =>
    <Link className="navbar-item" label to__=to_> label->React.string </Link>;
};

[@react.component]
let make = (~isMobile) => {
  let (active, setActive) = React.useState(() => false);
  let (activeClassName, setActiveClassName) = React.useState(() => "");
  let toggleHamburger = () => {
    let activeState = !active;
    setActive(_ => activeState);
    setActiveClassName(_ => activeState ? "is-active" : "");
  };
  <nav className="navbar" role="navigation" ariaLabel="main-navigation">
    <div className="container">
      <div className="navbar-brand">
        <a href="/">
          {
            isMobile ?
              <img className="navbar-logo--small" src=svgLogo width="240" height="60" /> : <Logo />
          }
        </a>
        <div
          onClick={_e => toggleHamburger()}
          className={"navbar-burger burger" ++ activeClassName}>
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navMenu" className={"navbar-menu" ++ activeClassName}>
        <div className="navbar-end has-text-centered">
          <NavItem label="Workshops" to_="/workshops" />
          <NavItem label="Speakers" to_="/speakers" />
          <NavItem label="Sponsors" to_="/sponsors" />
          <NavItem label="Schedule" to_="/schedule" />
          <NavItem label="Visit" to_="/visit" />
          <NavItem label="Contact" to_="/contact" />
          <Button
            mode="solid"
            label="Tickets"
            href="https://ti.to/chicagojs/reasonconf-us-2019"
          />
        </div>
      </div>
    </div>
  </nav>;
};
