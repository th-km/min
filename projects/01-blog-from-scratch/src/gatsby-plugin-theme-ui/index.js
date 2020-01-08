import { tailwind } from "@theme-ui/presets"

export default {
  ...tailwind,
  styles: {
    ...tailwind.styles,
    a: {
      color: "black",
      textDecoration: "none",
    },
  },
}
