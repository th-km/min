/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import useSiteMetadata from "../hooks/useSiteMetadata"

const Header = () => {
  const { title } = useSiteMetadata()

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
          {title}
        </Link>
        <Styled.a as={Link} to="/about">
          About
        </Styled.a>
      </nav>
    </header>
  )
}

export default Header
