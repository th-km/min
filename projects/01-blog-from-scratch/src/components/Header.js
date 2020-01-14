/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const Header = () => {
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
      </nav>
    </header>
  )
}

export default Header
