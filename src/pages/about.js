/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/Layout"

export default () => (
  <Layout>
    <div sx={{ py: [4, 5] }}>
      <p>
        This project is part of the #100DaysOfGatsby challenge. More information
        can be found{" "}
        <a
          sx={{ variant: "links.nav" }}
          href="https://www.gatsbyjs.org/blog/100days/"
        >
          here
        </a>
        .
      </p>
    </div>
  </Layout>
)
