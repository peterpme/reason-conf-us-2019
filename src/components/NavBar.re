[%bs.raw {|require('./NavBar.css')|}];

module NavItem = {
  [@genType]
  [@react.component]
  let make = (~label, ~to_) => {
    <Link
      className="Navbar-linkLabel"
      labelClassName="Navbar-linkLabel"
      label
      to_
    />;
  };
};

module TicketsButton = {
  [@genType]
  [@react.component]
  let make = () => {
    <Link
      className="TicketsButton"
      labelClassName="TicketsButton-label"
      label="Tickets"
      to_="/"
    />;
  };
};

[@genType]
[@react.component]
let default = (~className) => {
  <nav className={"NavBar " ++ className}>
    <NavItem label="Workshops" to_="/" />
    <NavItem label="Speakers" to_="/" />
    <NavItem label="Sponsors" to_="/" />
    <NavItem label="Schedule" to_="/" />
    <NavItem label="Contact" to_="/" />
    <TicketsButton />
  </nav>;
};