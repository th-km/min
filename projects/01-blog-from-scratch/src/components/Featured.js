/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"

const Featured = () => {
  const { mdx: post } = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { featured: { eq: true } }) {
        frontmatter {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
          alt
          image {
            sharp: childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        excerpt(pruneLength: 200)
      }
    }
  `)

  return (
    <article sx={{ variant: "articles.full" }}>
      <header sx={{ variant: "headers.article" }}>
        <h2 sx={{ variant: "titles.full" }}>{post.frontmatter.title}</h2>
        <small sx={{ variant: "dates.small" }}>{post.frontmatter.date}</small>
      </header>
      <section>
        <Image
          fluid={post.frontmatter.image.sharp.fluid}
          alt={post.frontmatter.alt}
        />
        <p sx={{ fontSize: [1, 2, 3] }}>{post.excerpt}</p>
        <AniLink
          cover
          bg="currentColor"
          direction="left"
          sx={{ variant: "links.more" }}
          to={post.frontmatter.slug}
        >
          Read more
        </AniLink>
      </section>
    </article>
  )
}

export default Featured
