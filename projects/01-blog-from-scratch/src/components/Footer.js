import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"

const Footer = () => {
  return (
    <footer
      sx={{
        p: 4,
        backgroundColor: "black",
      }}
    >
      <p
        sx={{
          fontSize: 0,
          fontFamily: "mono",
          color: "white",
        }}
      >
        © Minimal Gatsby blog
      </p>
    </footer>
  )
}

export default Footer
