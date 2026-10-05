import { Link, NavLink } from "react-router";

import { useScroll } from "../hooks/useScroll";
import { NAVBAR_SOLID_AFTER } from "../config";
import { NAV_LINKS } from "../data/site";
import "./Navbar.css";

/**
 * Floating pill navbar.
 *   - Desktop: centered at the top.
 *   - Mobile: docked at the bottom, icon over label, where thumbs reach it.
 *
 * The background is translucent at the top of the page and opaque after scrolling.
 */
function Navbar() {
  const { isScrolled } = useScroll({ threshold: NAVBAR_SOLID_AFTER });

  return (
    <nav
      className={`Navbar-container${isScrolled ? " is-solid" : ""}`}
      aria-label="Main"
    >
      {NAV_LINKS.map(({ to, label, icon: Icon, end, hash }) => {
        const content = (
          <>
            <Icon className="Navbar-icon" aria-hidden="true" />
            <span>{label}</span>
          </>
        );
        /* NavLink only compares pathnames, so a hash link would look active on every visit to /. */
        return hash ? (
          <Link key={to} to={to} className="Navbar-element cursor-target">
            {content}
          </Link>
        ) : (
          <NavLink
            key={to}
            to={to}
            end={end}
            className="Navbar-element cursor-target"
          >
            {content}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default Navbar;