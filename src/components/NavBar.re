[%bs.raw {|require('./NavBar.scss')|}];

module NavItem = {
  [@react.component]
  let make = (~label, ~to_) => {
    <Link
      className="navbar-item"
      label
      to__=to_
    />
  };
};

module ExternalLink {
  [@react.component]
  let make = (~label, ~href) => {
  <a className="navbar-item navbar-item--link" href>
    <span className="navbar-button"> label->React.string </span>
  </a>
  }
}

[@react.component]
let make = () => {
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
        <Logo />
        </a>
        <div onClick=(_e => toggleHamburger()) className={"navbar-burger burger" ++ activeClassName}>
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
          <ExternalLink label="Tickets" href="/tickets" />
        </div>
      </div>
    </div>
  </nav>;
};
