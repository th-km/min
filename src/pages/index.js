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
      {posts.map(post => (
        <Posts key={post.id} post={post} />
      ))}
    </Layout>
  )
}
