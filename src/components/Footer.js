/** @jsx jsx */
import { jsx } from "theme-ui"

const Footer = () => {
  return (
    <footer
      sx={{
        mt: 4,
        py: 4,
        borderColor: "muted",
        borderTopStyle: "solid",
        borderTopWidth: "px",
      }}
    >
      <p
        sx={{
          fontSize: 0,
          fontFamily: "mono",
          color: "muted",
        }}
      >
        © {new Date().getFullYear()} Minimal Gatsby blog
      </p>
    </footer>
  )
}

export default Footer
