/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"

const Post = ({ pageContext: { next, prev }, data: { mdx: post } }) => {
  return (
    <Layout>
      <article
        sx={{
          variant: "articles.full",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header sx={{ variant: "headers.article" }}>
          <h1 sx={{ variant: "titles.full" }}>{post.frontmatter.title}</h1>
          <small sx={{ variant: "dates.small" }}>{post.frontmatter.date}</small>
        </header>
        <section>
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
        <nav sx={{ mt: "auto" }}>
          <ul
            sx={{
              display: ["block", "flex"],
              justifyContent: "space-between",
              p: 0,
              listStyle: "none",
            }}
          >
            <li>
              {prev && (
                <AniLink
                  cover
                  bg="currentColor"
                  direction="left"
                  sx={{ variant: "links.article" }}
                  to={prev.frontmatter.slug}
                  rel="prev"
                >
                  <span sx={{ color: "text", fontSize: 2, fontWeight: "bold" }}>
                    Prev{" "}
                  </span>
                  {prev.frontmatter.title}
                </AniLink>
              )}
            </li>
            <li>
              {next && (
                <AniLink
                  cover
                  bg="currentColor"
                  direction="left"
                  sx={{ variant: "links.article" }}
                  to={next.frontmatter.slug}
                  rel="next"
                >
                  <span sx={{ color: "text", fontSize: 2, fontWeight: "bold" }}>
                    Next{" "}
                  </span>
                  {next.frontmatter.title}
                </AniLink>
              )}
            </li>
          </ul>
        </nav>
      </article>
    </Layout>
  )
}

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
