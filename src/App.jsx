import "./App.css";
import "./styles/base.css";
import "./styles/tokens.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { BASE_PATH } from "./config";

import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFoundPage from "./pages/NotFoundPage";

/* The router is created once. Creating it inside a component would rebuild it (and lose history state) every render. */
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "projects", element: <ProjectsPage /> },
        { path: "blog", element: <BlogPage /> },
        { path: "blog/:slug", element: <BlogPostPage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  { basename: BASE_PATH || "/" }
);

/* No TagsProvider any more: tag filters live in the URL (see hooks/useTagFilter.js). */
function App() {
  return <RouterProvider router={router} />;
}

export default App;
