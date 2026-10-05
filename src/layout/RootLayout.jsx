import { Outlet, ScrollRestoration } from "react-router";

import { useMobile } from "../hooks/useMobile";
import { useBackspaceNavigation } from "../hooks/useBackspaceNavigation";
import TargetCursor from "../react_bits_components/TargetCursor";

import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/layout.css";

/* Everything that exists on every page lives here. <Outlet /> is where the matched page is rendered. */
function RootLayout() {
  /* TargetCursor depends on the kind of pointer, not on the screen size. */
  // const { hasFinePointer } = useMobile();
  useBackspaceNavigation();

  return (
    <div className="App">
      {/*hasFinePointer && <TargetCursor spinDuration={8} hideDefaultCursor parallaxOn />*/}
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="site-main">
        <Outlet />
      </main>
      <Footer />
      {/* New navigations scroll to the top, or to the #hash element if the URL has one.
          Back and forward restore the scroll position the visitor left the page at. */}
      <ScrollRestoration />
    </div>
  );
}

export default RootLayout;