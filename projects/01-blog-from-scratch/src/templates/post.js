/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"

const Post = ({ data: { mdx: post } }) => (
  <Layout>
    <article sx={{ variant: "articles.full" }}>
      <header sx={{ variant: "headers.article" }}>
        <h1 sx={{ variant: "titles.full" }}>{post.frontmatter.title}</h1>
        <small sx={{ variant: "dates.small" }}>{post.frontmatter.date}</small>
      </header>
      <section>
        <MDXRenderer>{post.body}</MDXRenderer>
      </section>
    </article>
  </Layout>
)

export default Post

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`
