module.exports = {
  siteMetadata: {
    title: "Minimal",
    description: "A Minimal Gatsby blog with Theme UI",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Minimal blog",
        short_name: "Minimal",
        start_url: `/`,
        background_color: "#1e1e1e",
        theme_color: `#fafafa`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
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
    `gatsby-plugin-transition-link`,
  ],
}
