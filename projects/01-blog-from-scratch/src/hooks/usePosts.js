import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          frontmatter {
            title
            slug
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  `)

  return data.allMdx.nodes.map(post => ({
    id: post.id,
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt,
  }))
}

export default usePosts
