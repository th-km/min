/** @jsx jsx */
import { jsx } from "theme-ui"

const Footer = () => {
  return (
    <footer
      sx={{
        py: 4,
      }}
    >
      <p
        sx={{
          fontSize: 0,
          fontFamily: "mono",
          color: "gray",
        }}
      >
        © {new Date().getFullYear()} Minimal Gatsby blog
      </p>
    </footer>
  )
}

export default Footer
