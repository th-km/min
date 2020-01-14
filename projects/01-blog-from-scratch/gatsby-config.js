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
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 900,
              linkImagesToOriginal: false,
            },
          },
        ],
        plugins: ["gatsby-remark-images"],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-theme-ui",
  ],
}
