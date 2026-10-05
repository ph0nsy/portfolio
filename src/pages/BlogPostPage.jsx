import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { useDocumentTitle } from "../hooks/useDocumentTitle";
import BackLink from "../custom_components/BackLink";
import Modal from '../custom_components/Modal';
import NotFoundPage from "./NotFoundPage";
import { getPost } from "../data/posts";
import { publicUrl } from "../config";
import { formatDate } from "../utils/format";
import "../styles/post.css";

const IS_ABSOLUTE_URL = /^[a-z][a-z\d+.-]*:/i; // http:, https:, mailto:, data:...

function BlogPostPage() {
  const { slug } = useParams();
  const post = getPost(slug);
  useDocumentTitle(post?.title ?? "Post not found");

  // 'loading' | 'ready' | 'error'
  const [state, setState] = useState({ status: "loading", text: "" });
  
  // modal behaviour
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  const [modalImage, setIsModalImage] = useState('');
  
  // check img clicks for modal
  useEffect(() => {
    const handler = (event) => { 
      if (event.target.tagName === "IMG") {
        setIsModalImage(String(event.target.src));
        setIsModalOpen(true);
        console.log("Clicked:" + event.target.src)
      }
    };
    document.body.addEventListener("click", handler);
    return () => document.body.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    if (!post) return undefined;

    /**
     * Aborting on cleanup prevents a slow response for post A from overwriting post B
     * when the visitor navigates quickly between posts.
     */
    const controller = new AbortController();
    setState({ status: "loading", text: "" });

    fetch(publicUrl(`posts/${slug}/index.md`), { signal: controller.signal })
      .then((response) => {
        /**
         * Dev servers and most SPA hosts answer missing files with index.html and a 200,
         * so a missing markdown file would otherwise render the page's HTML as the post.
         */
        const isHtml = response.headers
          .get("content-type")
          ?.includes("text/html");
        if (!response.ok || isHtml)
          throw new Error(`Missing markdown for "${slug}"`);
        return response.text();
      })
      .then((text) => setState({ status: "ready", text }))
      .catch((error) => {
        if (error.name !== "AbortError")
          setState({ status: "error", text: "" });
      });

    return () => controller.abort();
  }, [post, slug]);

  /**
   * How markdown elements are rendered. Memoised so react-markdown does not
   * receive new component identities (and remount images) on every render.
   */
  const components = useMemo(
    () => ({
      /* `node` is the syntax tree node react-markdown passes in; it must not reach the DOM. */
      img: ({ node: _node, src = "", alt = "", ...rest }) => (
        <img
          src={resolvePostAsset(src, slug)}
          alt={alt}
          loading="lazy"
          {...rest}
        />
      ),
      a: ({ node: _node, href = "", children, ...rest }) =>
        href.startsWith("/") ? (
          <Link to={href} {...rest}>
            {children}
          </Link>
        ) : (
          <a
            href={href}
            {...rest}
            {...(IS_ABSOLUTE_URL.test(href)
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
            {children}
          </a>
        ),
    }),
    [slug]
  );

  if (!post) { return <NotFoundPage />; }

  return (
    <article className="post">
      <BackLink fallback="/blog">Back to all posts</BackLink>

      <Modal isOpen={isModalOpen} onClose={closeModal} child={modalImage}/>

      <header className="post__header">
        <h1 className="post__title">{post.title}</h1>
        <p className="post__subtitle">{post.description}</p>
        <p className="post__meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time> |{" "}
          {post.readTime} min read
        </p>
      </header>

      <img className="post__cover" src={publicUrl(post.image)} alt="" />

      <div className="post__body prose">
        {state.status === "loading" && (
          <p className="post__status">Loading post...</p>
        )}
        {state.status === "error" && (
          <p className="post__status">
            This post could not be loaded. Refresh the page, or go back to{" "}
            <Link to="/blog">all posts</Link>.
          </p>
        )}
        {state.status === "ready" && (
          <Markdown remarkPlugins={[remarkGfm]} components={components}>
            {state.text}
          </Markdown>
        )}
      </div>
    </article>
  );
}

// ![alt](cover.png) > /posts/<slug>/cover.png
// ![alt](/assets/shared.png) > /assets/shared.png (plus BASE_PATH)
// ![alt](https://example.com/x) > unchanged
function resolvePostAsset(src, slug) {
  if (IS_ABSOLUTE_URL.test(src)) return src;
  if (src.startsWith("/")) return publicUrl(src);
  return publicUrl(`posts/${slug}/${src}`);
}

export default BlogPostPage;