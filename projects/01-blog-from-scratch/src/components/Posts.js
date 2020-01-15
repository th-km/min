/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
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
      <Link sx={{ variant: "links.more" }} to={post.slug}>
        Read more
      </Link>
    </section>
  </article>
)

export default Posts
