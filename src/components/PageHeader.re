[%bs.raw {|require('./PageHeader.css')|}];

[@react.component]
let make = () => {
  <PageContainer className="PageHeader">
    <Logo />
    <NavBar className="PageHeader-navBar" />
  </PageContainer>;
};