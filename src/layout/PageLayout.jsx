import { useDocumentTitle } from "../hooks/useDocumentTitle";

/**
 * Shell for every page except Home: space for the navbar, the page heading,
 * the tab title, and optional content between the heading and the body (filters).
 */
function PageLayout({
  title = "",
  intro = "",
  children,
  className = "",
  bgTile = "",
}) {
  useDocumentTitle(title);

  return (
    <div className={`page ${className}`}>
      {title && intro && (
        <header className="page__header">
          {title && <h1 className="page__title">{title}</h1>}
          {intro && <p className="page__intro">{intro}</p>}
        </header>
      )}
      {children}
    </div>
  );
}

export default PageLayout;