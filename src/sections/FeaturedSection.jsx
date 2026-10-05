import { Link } from "react-router";
import PostCard from "../custom_components/PostCard";
import { SORTED_POSTS } from "../data/posts";
import { FEATURED_PROJECT } from "../data/projects";
import { publicUrl } from "../config";

function FeaturedSection() {
  const latestPost = SORTED_POSTS[0];
  const project = FEATURED_PROJECT;

  return (
    <section id="featured" className="featured" aria-label="Featured">
      <div className="featured__half featured__half--post">
        <h2 className="featured__heading">Latest reading</h2>
        {latestPost ? (
          <PostCard post={latestPost} />
        ) : (
          <p>First post coming soon.</p>
        )}
        <Link to="/blog" className="button featured__more cursor-target">
          All posts
        </Link>
      </div>

      <div className="featured__half featured__half--project">
        <h2 className="featured__heading">Featured project</h2>
        {project && (
          <Link
            to={{ pathname: "/projects", search: `?project=${project.slug}` }}
            className="project-teaser cursor-target"
          >
            <img
              src={
                /^https?:/.test(project.image)
                  ? project.image
                  : publicUrl(project.image)
              }
              alt=""
              loading="lazy"
            />
            <span className="project-teaser__title">{project.title}</span>
            <span className="project-teaser__summary">
              {project.description}
            </span>
          </Link>
        )}
        <Link to="/projects" className="button featured__more cursor-target">
          All projects
        </Link>
      </div>
    </section>
  );
}

export default FeaturedSection;