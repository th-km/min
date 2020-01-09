exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.error) {
    reporter.panicOnBuild("ERROR", result.errors)
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(({ node }) => {
    actions.createPage({
      path: node.frontmatter.slug,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
