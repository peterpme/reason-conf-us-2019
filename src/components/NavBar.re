[%bs.raw {|require('./NavBar.css')|}];

module NavItem = {
  [@react.component]
  let make = (~label, ~to__) => {
    <Link
      className="Navbar-linkLabel"
      labelClassName="Navbar-linkLabel"
      label
      to__
    />;
  };
};

[@react.component]
let make = (~className) => {
  <nav className={"NavBar " ++ className}>
    <NavItem label="Workshops" to__="/" />
    <NavItem label="Speakers" to__="/" />
    <NavItem label="Sponsors" to__="/" />
    <NavItem label="Schedule" to__="/" />
    <NavItem label="Visit" to__="/visit" />
    <NavItem label="Contact" to__="/" />
    <TicketsButton />
  </nav>;
};