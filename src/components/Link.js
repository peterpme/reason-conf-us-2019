import React from "react"
import { Link as GatsbyLink } from "gatsby"

const Link = ({ className, to, label }) => {
  return (
    <GatsbyLink className={className} to={to}>
      {label}
    </GatsbyLink>
  )
}

export default Link
