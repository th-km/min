/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { Link } from "gatsby"

const Header = () => {
  const [colorMode, setColorMode] = useColorMode()
  const colorModes = ["dark", "light"]

  const cycleColorMode = () => {
    const i = colorModes.indexOf(colorMode)
    const n = (i + 1) % colorModes.length
    setColorMode(colorModes[n])
  }

  return (
    <header sx={{ variant: "headers.menu" }}>
      <nav
        sx={{
          display: "flex",
          alignItems: "baseline",
        }}
      >
        <h1
          sx={{
            mr: [3, 4],
            fontSize: [3, 4, 5],
            fontFamily: "mono",
            fontWeight: "bold",
          }}
        >
          <Link to="/">Minimal</Link>
        </h1>
        <Link
          activeClassName="active"
          sx={{ variant: "links.nav" }}
          to="/about"
        >
          About
        </Link>
        <button
          mode={colorMode}
          sx={{
            display: "inline-block",
            ml: "auto",
            p: 2,
            border: 0,
            fontFamily: "mono",
            fontSize: "0.75rem",
            color: "background",
            backgroundColor: "text",
            borderRadius: "sm",
            boxShadow: "sm",
            appearance: "none",
          }}
          onClick={cycleColorMode}
        >
          {colorMode.replace(/^\w/, c => c.toUpperCase())}
        </button>
      </nav>
    </header>
  )
}

export default Header
