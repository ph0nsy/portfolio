import { Link, useLocation, useNavigate } from "react-router";

/**
 * "Back" that behaves like the browser arrow when that keeps the visitor on the site
 * (preserving their filters and/or scroll position), and falls back to a normal link when
 * they landed here directly, for example from a shared URL.
 */
function BackLink({ fallback, children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const canGoBack = location.key !== "default";

  return (
    <Link
      to={fallback}
      className="back-link cursor-target"
      onClick={(event) => {
        if (!canGoBack) return;
        event.preventDefault();
        navigate(-1);
      }}
    >
      {children}
    </Link>
  );
}

export default BackLink;
