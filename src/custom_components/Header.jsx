import FuzzyText from "../react_bits_components/FuzzyText";
import GradientText from "../react_bits_components/GradientText";
import TextType from "../react_bits_components/TextType";
import LetterGlitch from "../react_bits_components/LetterGlitch";

import { usePrefersReducedMotion } from "../hooks/useMediaQuery";
import "./Header.css";

const SIZES = {
  desktop: { nick: "8rem", name: "5rem", job: "2.5rem" },
  mobile: { nick: "3.75rem", name: "2rem", job: "1.25rem" },
};

const ROLES = ["GAME", "SOFTWARE", "FRONTEND"];

function Header({
  id,
  mobile = false,
  paused = false, // True once the hero is completely covered. Stops requestAnimationFrame.
}) {
  const size = mobile ? SIZES.mobile : SIZES.desktop;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id={id} className="App-header" aria-labelledby="hero-title">
      {/* Text in the FuzzyText component so that browsers can find it, since the component is drawn on a canvas.*/}
      <h1 id="hero-title" className="visually-hidden">
        Alonso Moreno (ph0nsy), game developer
      </h1>

      {!paused && (
        <>
          <div className="Name_Nick-group" aria-hidden="true">
            <FuzzyText
              fontSize={size.nick}
              enableHover={false}
              baseIntensity={reducedMotion ? 0 : 0.05}
            >
              PH0NSY
            </FuzzyText>
            <FuzzyText
              fontSize={size.name}
              enableHover={false}
              baseIntensity={reducedMotion ? 0 : 0.05}
            >
              Alonso Moreno
            </FuzzyText>

            <div className="Job-line" style={{ fontSize: size.job }}>
              <GradientText
                colors={["#ee0b5c", "#a716b0", "#ee0b5c", "#a716b0", "#ee0b5c"]}
                animationSpeed={3}
                showBorder
              >
                <TextType
                  className="Job-inline"
                  text={ROLES}
                  typingSpeed={100}
                  pauseDuration={1000}
                  showCursor
                  cursorCharacter=" "
                />
                DEVELOPER
              </GradientText>
            </div>
          </div>

          {/* Skiped for reduced motion. */}
          {!reducedMotion && (
            <div className="Background" aria-hidden="true">
              <LetterGlitch
                glitchColors={["#ee0b5c", "#a716b0", "#485696"]}
                fontSize={32}
                glitchSpeed={100}
                centerVignette
                outerVignette
                smooth
              />
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default Header;
