import { Link } from "react-router";
import { publicUrl } from "../config";
import { formatDate } from "../utils/format";

/* Tags are plain text inside it because the whole card is one link. */
function PostCard({ post, headingLevel: Heading = "h3" }) {
  return (
    <article className="post-card">
      <Link to={`/blog/${post.slug}`} className="post-card__link cursor-target">
        <img
          className="post-card__image"
          src={publicUrl(post.image)}
          alt=""
          loading="lazy"
        />
        <div className="post-card__body">
          <Heading className="post-card__title">{post.title}</Heading>
          <div className="post-card__meta">
            <span>
              <time dateTime={post.date}>{formatDate(post.date)}</time> |{" "}
              {post.readTime} min read
            </span>
            <ul className="tag-list" aria-label="Tags">
              {post.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <p className="post-card__description">{post.description}</p>
        </div>
      </Link>
    </article>
  );
}

export default PostCard;