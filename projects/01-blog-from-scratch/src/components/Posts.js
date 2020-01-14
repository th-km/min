/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Posts = ({ post }) => (
  <article
    sx={{
      py: 5,
      px: 4,
    }}
  >
    <header
      sx={{
        display: ["block", "flex"],
        alignItems: "baseline",
        py: 4,
      }}
    >
      <h2 sx={{ lineHeight: "tight", fontSize: 2 }}>{post.title}</h2>
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
