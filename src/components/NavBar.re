[%bs.raw {|require('./NavBar.css')|}];

module NavItem = {
  [@genType]
  [@react.component]
  let make = (~label) => {
    <span className="Navbar-linkLabel"> label->React.string </span>;
  };
};

[@genType]
[@react.component]
let default = () => {
  <nav> <NavItem label="Test" /> </nav>;
};

module TicketsButton = {
  [@genType]
  [@react.component]
  let make = () => {
    <button className="TicketsButton">
      <span className="TicketsButton-label"> "Tickets"->React.string </span>
    </button>;
  };
};

[@genType]
[@react.component]
let default = () => {
  <nav className="NavBar">
    <NavItem label="Workshops" />
    <NavItem label="Speakers" />
    <NavItem label="Sponsors" />
    <NavItem label="Schedule" />
    <NavItem label="Your Visit" />
    <NavItem label="Contact" />
    <TicketsButton />
  </nav>;
};