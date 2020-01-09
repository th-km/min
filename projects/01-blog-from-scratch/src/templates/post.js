/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Content from "../components/Content"

const Post = ({ data: { markdownRemark: post } }) => {
  return (
    <Layout>
      <Content>
        <h1>{post.frontmatter.title}</h1>
        <span>{post.frontmatter.date}</span>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Styled.a as={Link} to="/">
          &larr; Back to all posts
        </Styled.a>
      </Content>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`

export default Post
