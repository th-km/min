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
    <header
      sx={{
        py: 4,
      }}
    >
      <nav
        sx={{
          display: "flex",
          alignItems: "baseline",
        }}
      >
        <Link
          sx={{
            mr: "auto",
            color: "text",
            fontSize: 4,
            fontFamily: "mono",
            fontWeight: "bold",
            textDecoration: "none",
          }}
          to="/"
        >
          Minimal
        </Link>
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
            ml: 3,
            p: 2,
            border: 0,
            borderRadius: "default",
            fontFamily: "mono",
            fontSize: 0,
            color: "background",
            backgroundColor: "text",
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
