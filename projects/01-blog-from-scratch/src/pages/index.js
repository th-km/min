import React from "react"
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Layout from "../components/Layout"
import Content from "../components/Content"
import Posts from "../components/Posts"
import usePosts from "../hooks/usePosts"

export default () => {
  const posts = usePosts()

  return (
    <Layout>
      <Content>
        <Styled.h2>Blog</Styled.h2>
        {posts.map(post => (
          <Posts key={post.id} post={post} />
        ))}
      </Content>
    </Layout>
  )
}
