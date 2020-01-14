/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, graphql, useStaticQuery } from "gatsby"
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
        excerpt
      }
    }
  `)

  return (
    <article
      sx={{
        py: 5,
        borderBottomWidth: "px",
        borderBottomStyle: "solid",
        borderColor: "gray",
      }}
    >
      <header
        sx={{
          display: ["block", "flex"],
          alignItems: "baseline",
          py: 4,
        }}
      >
        <h2 sx={{ lineHeight: "tight", fontSize: 2 }}>
          {post.frontmatter.title}
        </h2>
        <small sx={{ variant: "dates.small" }}>{post.frontmatter.date}</small>
      </header>
      <section>
        <Image
          fluid={post.frontmatter.image.sharp.fluid}
          alt={post.frontmatter.alt}
        />
        <p>{post.excerpt}</p>
        <Link sx={{ variant: "links.more" }} to={post.frontmatter.slug}>
          Read more
        </Link>
      </section>
    </article>
  )
}

export default Featured
