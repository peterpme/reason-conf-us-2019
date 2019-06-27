[@genType.import ("gatsby", "Link")] [@react.component]
external make:(
    ~className: string=?,
    ~activeClassName: string=?,
    ~labelClassName: string=?,
    ~to__: string=?,
    ~label: string=?,
    ~style: ReactDOMRe.style=?,
    ~children: React.element=?
  ) => React.element = ""
