/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"

const Posts = ({ post }) => (
  <article
    sx={{
      maxWidth: "2xl",
      borderBottom: theme => `1px solid ${theme.colors.gray[5]}`,
      pb: 4,
    }}
  >
    <h3>
      <Styled.a as={Link} to={post.slug}>
        {post.title}
      </Styled.a>
    </h3>
    <p>{post.excerpt}</p>
    <span
      sx={{
        color: "gray.5",
        fontFamily: "mono",
        fontSize: 0,
      }}
    >
      {post.date}
    </span>
  </article>
)

export default Posts
