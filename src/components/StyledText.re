[%bs.raw {|require('./StyledText.css')|}];

[@react.component]
let make = (~fontWeight="bold", ~className=?, ~fontSize="13px", ~children) => {
  <span
    ?className
    style={ReactDOMRe.Style.make(
      ~fontWeight,
      ~fontSize,
      ~color="#FFF",
      ~fontFamily="Montserrat , sans-serif",
      (),
    )}>
    children
  </span>;
};
