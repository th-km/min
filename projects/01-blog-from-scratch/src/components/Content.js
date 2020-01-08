import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"

const Content = ({ children }) => (
  <div sx={{ flex: "1", p: 4, backgroundColor: "white" }}>{children}</div>
)

export default Content
