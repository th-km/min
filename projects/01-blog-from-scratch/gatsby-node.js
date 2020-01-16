exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `)
  if (result.error) {
    reporter.panicOnBuild(result.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach((post, i) => {
    const prev = i === posts.length - 1 ? null : posts[i + 1]
    const next = i === 0 ? null : posts[i - 1]

    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: post.frontmatter.slug,
        title: post.frontmatter.title,
        prev,
        next,
      },
    })
  })
}
