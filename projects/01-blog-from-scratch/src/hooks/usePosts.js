import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
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
    }
  `)

  return data.allMarkdownRemark.edges.map(({ node }) => ({
    id: node.id,
    title: node.frontmatter.title,
    date: node.frontmatter.date,
    slug: node.frontmatter.slug,
    excerpt: node.excerpt,
  }))
}

export default usePosts
