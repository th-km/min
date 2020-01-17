/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { Link } from "gatsby"

const Header = () => {
  const [colorMode, setColorMode] = useColorMode()
  const colorModes = ["dark", "light", "calm", "contrast"]

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
          title="Cycle color mode"
          sx={{
            ml: "auto",
            p: 0,
            border: 0,
            color: "text",
            backgroundColor: "transparent",
            appearance: "none",
            cursor: "pointer",
            transition: "transform .25s ease",

            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
          onClick={cycleColorMode}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        </button>
      </nav>
    </header>
  )
}

export default Header
