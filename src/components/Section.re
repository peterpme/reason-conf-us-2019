[%bs.raw {|require('./Section.scss')|}];
[@react.component]
let make = (~title, ~extra, ~children) => {
  <section className="Section">
  <SectionHeading heading=title>{extra}</SectionHeading>
  <div className="Section-content">
    {children}
  </div>
  </section>
}
