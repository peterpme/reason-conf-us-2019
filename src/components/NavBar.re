[%bs.raw {|require('./NavBar.css')|}];

module NavItem = {
  [@genType]
  [@react.component]
  let make = (~label, ~link=?) => {
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
  let make = (~link=?) => {
    <button className="TicketsButton">
      <span className="TicketsButton-label"> "Tickets"->React.string </span>
    </button>;
  };
};