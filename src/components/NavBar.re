[%bs.raw {|require('./NavBar.css')|}];

module NavItem = {
  [@react.component]
  let make = (~label, ~to__) => {
    <Link
      className="navbar-item"
      label
      to__
    />;
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
        <Logo />
        <div onClick=(_e => toggleHamburger()) className={"navbar-burger burger" ++ activeClassName}>
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navMenu" className={"navbar-menu" ++ activeClassName}>
        <div className="navbar-end has-text-centered">
          <NavItem label="Workshops" to__="/" />
          <NavItem label="Speakers" to__="/" />
          <NavItem label="Sponsors" to__="/" />
          <NavItem label="Schedule" to__="/" />
          <NavItem label="Visit" to__="/visit" />
          <NavItem label="Contact" to__="/" />
          <ExternalLink label="Tickets" href="/tickets" />
        </div>
      </div>
    </div>
  </nav>;
};
