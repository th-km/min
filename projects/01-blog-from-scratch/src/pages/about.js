/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/Layout"

export default () => (
  <Layout>
    <div sx={{ py: [4, 5] }}>
      <h2 sx={{ variant: "titles.featured" }}>About</h2>
      <p>Gatsby blog with Theme UI</p>
    </div>
  </Layout>
)
