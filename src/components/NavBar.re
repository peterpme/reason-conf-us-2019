[%bs.raw {|require('./NavBar.scss')|}];

module NavItem = {
  [@react.component]
  let make = (~label, ~to_) => {
    let bg = "active:bg-transparent hover:bg-transparent focus:bg-transparent";
    let color = "active:text-gray-200 hover:text-gray-200 focus:text-gray-200";
    <Link
      className={j|$bg $color ml-4 font-montserrat font-bold font-montserrat text-sm text-white|j}
      label
      to__=to_>
      label->React.string
    </Link>;
  };
};

module ExternalLink = {
  [@react.component]
  let make = (~label, ~href) =>
    <a className="navbar-item navbar-item--link" href>
      <span className="navbar-button"> label->React.string </span>
    </a>;
};

module BurgerButton = {
  [@react.component]
  let make = (~onClick=?) => {
    let spanClass = "border-b-4 border-white w-full h-full";
    <div
      ?onClick
      className="block absolute top-0 right-0 mr-4 md:hidden w-12 h-12 flex items-center justify-center">
      <div className="relative w-5 h-5 flex flex-col items-center">
        <span className=spanClass />
        <span className=spanClass />
        <span className=spanClass />
      </div>
    </div>;
  };
};

[@react.component]
let make = () => {
  let (active, setActive) = React.useState(() => false);
  let toggleHamburger = () => {
    let activeState = !active;
    setActive(_ => activeState);
  };

  let activeClassName = active ? "block" : "hidden";

  <nav
    className="flex flex-col md:items-center md:justify-between w-full md:flex-row ml-auto mr-auto max-w-5xl"
    role="navigation"
    ariaLabel="main-navigation">
    <div className="navbar-brand w-56">
      <a href="/"> <Logo /> </a>
      <BurgerButton onClick={_e => toggleHamburger()} />
    </div>
    <div id="w-2/3" className={"md:block " ++ activeClassName}>
      <div className="flex flex-col md:flex-row justify-between">
        <NavItem label="Workshops" to_="/workshops" />
        <NavItem label="Speakers" to_="/speakers" />
        <NavItem label="Sponsors" to_="/sponsors" />
        <NavItem label="Schedule" to_="/schedule" />
        <NavItem label="Visit" to_="/visit" />
        <NavItem label="Contact" to_="/contact" />
        <ExternalLink label="Tickets" href="/tickets" />
      </div>
    </div>
  </nav>;
};
