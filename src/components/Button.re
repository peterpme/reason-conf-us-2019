[%bs.raw {|require('./Button.css')|}];

[@react.component]
let make = (~href, ~label, ~mode) => {

  let className = switch(mode) {
    | "bare" => "Button--bare"
    | "solid" => "Button--solid"
    | _ => "Button"
  };

  let externalLink = href->Js.String.includes("href");
  let mailto = href->Js.String.includes("mailto");
  switch (externalLink, mailto) {
    | (true, false) => <a href className>{label->React.string}</a>
    | (false, true) => <a href className>{label->React.string}</a>
    | _ => <span className>{label->React.string}</span>
  }
}
