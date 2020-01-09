import React from "react"
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const Posts = ({ post }) => (
  <article
    sx={{
      maxWidth: "2xl",
      borderBottom: theme => `1px solid ${theme.colors.gray[5]}`,
      pb: 4,
    }}
  >
    <h3>{post.title}</h3>
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
