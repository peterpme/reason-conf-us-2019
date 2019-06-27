[%bs.raw {|require('./Button.css')|}];

[@react.component]
let make = (~href, ~label, ~mode) => {

  let className = switch(mode) {
    | "bare" => "Button--bare"
    | "solid" => "Button--solid"
    | _ => "Button--solid"
  };

  let externalLink = href->Js.String.includes("href");
  let mailto = href->Js.String.includes("mailto");
  let buttonType = mode === "button";
  switch (externalLink, mailto, buttonType) {
    | (true, false, false) => <a href className>{label->React.string}</a>
    | (false, true, false) => <a href className>{label->React.string}</a>
    | (false, false, true) => <button type_="submit" className>{label->React.string}</button>
    | _ => <span className>{label->React.string}</span>
  }
}
