[@bs.module "./Link.js"] [@react.component]
external make:
  (
    ~className: string=?,
    ~labelClassName: string=?,
    ~to__: string=?,
    ~label: string=?,
    ~style: ReactDOMRe.style=?
  ) =>
  React.element =
  "default";