import PageLayout from "../layout/PageLayout";
import PostCard from "../custom_components/PostCard";
import TagFilter from "../custom_components/TagFilter";
import { useTagFilter } from "../hooks/useTagFilter";
import { ALL_POST_TAGS, SORTED_POSTS } from "../data/posts";
import "../styles/blog.css";

function BlogPage() {
  const { tag, setTag, matches } = useTagFilter({ allTags: ALL_POST_TAGS });
  const visible = SORTED_POSTS.filter((post) => matches(post.tags));

  return (
    <PageLayout
      //title="Blog"*/
      className="page--blog"
    >
      {ALL_POST_TAGS.length > 0 ? <div className="control-bar__blog">
        <span className="control-bar__blog-label" aria-hidden="true">
          Select Field
        </span>
        <div className="control-bar__blog-filter">
          <TagFilter
            allTags={ALL_POST_TAGS}
            selected={tag}
            onSelect={setTag}
            label="Filter posts by tag"
            collapsible
            breakpoint={900}
          />
        </div>
      </div> : <br/>}

      {visible.length > 0 ? (
        <div className="post-grid">
          {visible.map((post) => (
            <PostCard key={post.slug} post={post} headingLevel="h2" />
          ))}
        </div>
      ) : (
        <p className="post-grid__empty">The first post is on its way.</p>
      )}
    </PageLayout>
  );
}

export default BlogPage;