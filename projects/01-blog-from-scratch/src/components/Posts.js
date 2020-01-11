/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Posts = ({ post }) => (
  <article
    sx={{
      maxWidth: "3xl",
      borderBottom: theme => `1px solid ${theme.colors.gray[5]}`,
      pb: 4,
    }}
  >
    <Styled.a as={Link} to={post.slug}>
      {post.title}
    </Styled.a>
    <span>{post.date}</span>
    <Image fluid={post.image.sharp.fluid} alt={post.alt} />
    <p>{post.excerpt}</p>
  </article>
)

export default Posts
