import React from "react"
import { Link as GatsbyLink } from "gatsby"

const Link = ({ className, labelClassName, to, label }) => {
  return (
    <GatsbyLink className={className} to={to}>
      <span className={labelClassName}> {label} </span>
    </GatsbyLink>
  )
}

export default Link
