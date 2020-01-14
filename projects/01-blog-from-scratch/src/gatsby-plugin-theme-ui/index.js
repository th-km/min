import { tailwind } from "@theme-ui/presets"

export default {
  ...tailwind,
  colors: {
    ...tailwind.colors,
    text: "#fafafa",
    background: "#1e1e1e",
    gray: "#888",
  },
  styles: {
    ...tailwind.styles,
    blockquote: {
      paddingLeft: 4,
      borderLeftWidth: 4,
      borderColor: "gray",
      borderLeftStyle: "solid",
    },
    strong: {
      padding: 1,
      backgroundColor: "gray.2",
    },
  },
  links: {
    nav: {
      color: "text",
      textDecoration: "none",
      "&.active": {
        pb: 1,
        borderBottomWidth: "px",
        borderBottomStyle: "solid",
        borderColor: "text",
      },
    },
    more: {
      pb: 2,
      borderBottomWidth: "px",
      borderBottomStyle: "solid",
      borderColor: "gray",
      color: "gray",
      fontSize: 0,
      textTransform: "uppercase",
      textDecoration: "none",
      letterSpacing: "wide",
    },
    back: {
      color: "text",
      textDecoration: "none",
    },
  },
  dates: {
    small: {
      pl: [null, 3],
      fontFamily: "mono",
      fontSize: 0,
      color: "gray",
    },
  },
}
