/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/Layout"
import Posts from "../components/Posts"
import Featured from "../components/Featured"
import usePosts from "../hooks/usePosts"

export default () => {
  const posts = usePosts()

  return (
    <Layout>
      <Featured />
      <div sx={{ display: ["block", "null", "flex"], mx: -4 }}>
        {posts.map(post => (
          <Posts key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  )
}
