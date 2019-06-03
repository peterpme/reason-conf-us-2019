[%bs.raw {|require('./TicketsButton.css')|}];

[@react.component]
let make = () => {
  <a className="TicketsButton" href="/tickets">
    <span className="TicketsButton-label"> "Tickets"->React.string </span>
  </a>;
};