import { useMobile } from "../hooks/useMobile";
import { useInView } from "../hooks/useInView";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

import Header from "../custom_components/Header";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import FeaturedSection from "../sections/FeaturedSection";
import ContactSection from "../sections/ContactSection";
import "../styles/home.css";

function HomePage() {
  const { isMobile } = useMobile();
  useDocumentTitle(null);

  /* Once it has fully left the viewport, opaque content covers it, the hero's animations can stop. */
  const [spacerRef, heroVisible] = useInView({ initial: true });

  return (
    <>
      <Header id="home" mobile={isMobile} paused={!heroVisible} />

      <div ref={spacerRef} className="home__hero-spacer" aria-hidden="true">
        <div className="home__hero-exit" />
      </div>

      <div className="App-content home__content">
        <AboutSection />
        <SkillsSection isMobile={isMobile} />
        <FeaturedSection />
        <ContactSection />
      </div>
    </>
  );
}

export default HomePage;
