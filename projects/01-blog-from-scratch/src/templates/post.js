/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"

const Post = ({ data: { mdx: post } }) => (
  <Layout>
    <article
      sx={{
        py: 5,
        "* + *": {
          mt: 4,
        },
        li: {
          mt: 2,
        },
      }}
    >
      <header
        sx={{
          display: ["block", "flex"],
          alignItems: "baseline",
          py: 4,
        }}
      >
        <h1>{post.frontmatter.title}</h1>
        <small sx={{ variant: "dates.small" }}>{post.frontmatter.date}</small>
      </header>
      <MDXRenderer>{post.body}</MDXRenderer>
      <Link sx={{ variant: "links.back" }} to="/">
        &larr; Back
      </Link>
    </article>
  </Layout>
)

export default Post

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      body
    }
  }
`
