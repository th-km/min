/** @jsx jsx */
import { Fragment } from "react"
import { jsx } from "theme-ui"
import { Global } from "@emotion/core"
import Helmet from "react-helmet"
import Header from "../components/Header"
import Footer from "../components/Footer"
import useSiteMetadata from "../hooks/useSiteMetadata"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <Fragment>
      <Global
        styles={theme => ({
          "*, *::before, *::after": {
            boxSizing: "border-box",
          },
          body: {
            margin: 0,
            color: theme.colors.text,
            backgroundColor: theme.colors.background,
            fontFamily: theme.fonts.sans,
            lineHeight: theme.lineHeights.relaxed,
            webkitFontSmoothing: "antialiased",
            textRendering: "optimizeLegibility",
          },

          "h1, h2, h3, h4, h5, h6": {
            margin: 0,
          },
        })}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "4xl",
          minHeight: "100vh",
          px: [3, 4, null, 0],
          mx: "auto",
        }}
      >
        <Header />
        <main sx={{ flex: 1 }}>{children}</main>
        <Footer />
      </div>
    </Fragment>
  )
}

export default Layout
