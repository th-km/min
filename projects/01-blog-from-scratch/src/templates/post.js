/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import Content from "../components/Content"

const Post = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <Content>
        <h1>{post.frontmatter.title}</h1>
        <span>{post.frontmatter.date}</span>
        <MDXRenderer>{post.body}</MDXRenderer>
        <Styled.a as={Link} to="/">
          &larr; Back to all posts
        </Styled.a>
      </Content>
    </Layout>
  )
}

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

export default Post
