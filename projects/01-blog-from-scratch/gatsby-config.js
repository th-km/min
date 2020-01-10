/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Minimal",
    description: "A Minimal Gatsby blog with Theme UI",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `posts`,
      },
    },
    `gatsby-plugin-mdx`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-theme-ui",
  ],
}
