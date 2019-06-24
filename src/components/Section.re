[%bs.raw {|require('./Section.scss')|}];
[@react.component]
let make = (~title, ~extra=?, ~children) => {
  <section className="Section">
  <SectionHeading heading=title>
  {
    switch (extra) {
      | Some(extra) => extra
      | None => React.null
    }
  }</SectionHeading>
  <div className="Section-content">
    {children}
  </div>
  </section>
}
