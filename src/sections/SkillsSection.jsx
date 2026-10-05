import { Fragment } from "react";
import Marquee from "../custom_components/Marquee";
import LogoLoop from "../react_bits_components/LogoLoop";
import { SKILL_ROWS } from "../data/skills";

function SkillsSection({ isMobile }) {
  const big = isMobile
    ? { textSize: "6vh", lineHeight: "5vh" }
    : { textSize: "12vh", lineHeight: "10vh" };
  const small = isMobile
    ? { textSize: "5vh", lineHeight: "4vh" }
    : { textSize: "8vh", lineHeight: "6vh" };

  return (
    <section id="skills" className="skills" aria-label="Skills">
      {SKILL_ROWS.map((row) => (
        <Fragment key={row.label}>
          <LogoLoop
            logos={row.logos}
            speed={isMobile ? 80 : 60}
            direction={row.direction}
            logoHeight={isMobile ? 14 : 8}
            gap={isMobile ? 30 : row.gap}
            fadeOut
            ariaLabel={`${row.ariaLabel} skills`}
            style={{ rotate: row.logoTilt }}
            hoverSpeed = {isMobile ? -160 : -280}
          />
          <Marquee
            text={row.label}
            label={row.ariaLabel}
            {...small}
            tilt={row.labelTilt}
            reverse={Boolean(row.invertLabel)}
          />
        </Fragment>
      ))}
    </section>
  );
}

export default SkillsSection;