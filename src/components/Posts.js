/** @jsx jsx */
import { jsx } from "theme-ui"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"

const Posts = ({ post }) => (
  <article sx={{ variant: "articles.small" }}>
    <header sx={{ variant: "headers.article" }}>
      <h2 sx={{ variant: "titles.small" }}>{post.title}</h2>
      <small sx={{ variant: "dates.small" }}>{post.date}</small>
    </header>
    <section>
      <Image fluid={post.image.sharp.fluid} alt={post.alt} />
      <p>{post.excerpt}</p>
      <AniLink
        cover
        bg="currentColor"
        direction="left"
        sx={{ variant: "links.more" }}
        to={post.slug}
      >
        Read more
      </AniLink>
    </section>
  </article>
)

export default Posts
