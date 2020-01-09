/** @jsx jsx */
import { Fragment } from "react"
import { jsx } from "theme-ui"
import { Global } from "@emotion/core"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = ({ children }) => (
  <Fragment>
    <Global
      styles={theme => ({
        "*, *::before, *::after": {
          boxSizing: "border-box",
        },
        body: {
          margin: 0,
          color: theme.colors.black,
          backgroundColor: theme.colors.gray[2],
          fontFamily: theme.fonts.sans,
          lineHeight: theme.lineHeights.normal,
        },
      })}
    />
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "6xl",
        minHeight: "100vh",
        mx: "auto",
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  </Fragment>
)

export default Layout
