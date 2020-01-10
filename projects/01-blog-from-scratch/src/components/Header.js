/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header
      sx={{
        p: 4,
        backgroundColor: "white",
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
            color: "black",
            fontSize: 4,
            fontWeight: "bold",
            fontFamily: "mono",
            textDecoration: "none",
          }}
          to="/"
        >
          Minimal blog
        </Link>
        <Styled.a as={Link} to="/about">
          About
        </Styled.a>
      </nav>
    </header>
  )
}

export default Header
