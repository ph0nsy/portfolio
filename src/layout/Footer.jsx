import { Link } from "react-router";
import { NAV_LINKS, SOCIALS } from "../data/site";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <ul className="socials" aria-label="Elsewhere">
        {SOCIALS.map(({ label, href, icon: Icon, color }) => (
          <li key={label}>
            <a
              href={href}
              className="socials__item cursor-target"
              style={{ "--social-color": color }}
              aria-label={label}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              <Icon size={28} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>

      <p className="site-footer__copy">Alonso 'ph0nsy' Moreno © {year}</p>
    </footer>
  );
}

export default Footer;