import AnimatedContent from "../react_bits_components/AnimatedContent";
import { LiaGithub, LiaLinkedinIn } from "react-icons/lia";
import { TbFileCv } from "react-icons/tb";
import { publicUrl } from "../config";

/* Shared animation presets. */
const TITLE_ANIM = {
  distance: 150,
  direction: "vertical",
  duration: 0.75,
  ease: "power3.out",
  initialOpacity: 0.2,
  animateOpacity: true,
  scale: 1.1,
  threshold: 0.2,
  delay: 0.01,
};
const ICON_ANIM = {
  distance: 150,
  direction: "vertical",
  duration: 0.75,
  ease: "power3.out",
  initialOpacity: 0.01,
  animateOpacity: true,
  scale: 1.1,
  threshold: 0.2,
};
const IMG_ANIM = {
  distance: 50,
  direction: "vertical",
  duration: 0.8,
  ease: "power5.in",
  initialOpacity: 0,
  animateOpacity: true,
  scale: 1.1,
  threshold: 0.2,
  delay: 0.1,
};
const BODY_ANIM = {
  distance: 120,
  direction: "vertical",
  duration: 0.5,
  ease: "power5.in",
  initialOpacity: 0,
  animateOpacity: true,
  scale: 1.1,
  threshold: 0.175,
  delay: 0.08,
};
const BULLET_ANIM = {
  distance: 100,
  direction: "horizontal",
  reverse: true,
  duration: 0.75,
  ease: "power3.in",
  initialOpacity: 0,
  animateOpacity: true,
  scale: 1.1,
  threshold: 0.1,
};

function AboutSection() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="slant slant--in-white" aria-hidden="true" />

      <div className="about__inner">
        <AnimatedContent {...TITLE_ANIM}>
          <h2 id="about-title" className="about__title">
            Who am I?
          </h2>
        </AnimatedContent>

        <div className="about__socials">
          <AnimatedContent {...ICON_ANIM} delay={0.05}>
            <a
              href="/AlonsoMorenoGil_CV_EN.pdf"
              aria-label="CV"
              className="cursor-target"
              target="_blank"
              rel="noreferrer"
              download
            >
              <TbFileCv size={70} color="black" aria-hidden="true" />
            </a>
          </AnimatedContent>
          <AnimatedContent {...ICON_ANIM} delay={0.04}>
            <a
              href="https://www.linkedin.com/in/ph0nsy"
              aria-label="LinkedIn"
              className="cursor-target"
              target="_blank"
              rel="noreferrer"
            >
              <LiaLinkedinIn size={70} color="#0a66c2" aria-hidden="true" />
            </a>
          </AnimatedContent>
          <AnimatedContent {...ICON_ANIM} delay={0.05}>
            <a
              href="https://github.com/ph0nsy"
              aria-label="GitHub"
              className="cursor-target"
              target="_blank"
              rel="noreferrer"
            >
              <LiaGithub size={70} color="black" aria-hidden="true" />
            </a>
          </AnimatedContent>
        </div>

        <AnimatedContent {...IMG_ANIM}>
          <img
            className="about__photo"
            src={publicUrl("assets/hey_thats_me.png")}
            alt="Alonso Moreno"
          />
        </AnimatedContent>
          <div className="about__text">
          <AnimatedContent {...BODY_ANIM}>
            <p>
              I'm a <b>software engineer and Computer Science graduate</b> with
              a background in game programming. I enjoy building gameplay
              systems, tools, prototypes, and the occasional experiment because
              I wanted to figure out how something works. My background combines
              traditional CS and software engineering fundamentals with hands-on
              experience building games and game technology.
            </p>
            <p>
              Some of the things I've worked with and enjoy exploring:
            </p>
          </AnimatedContent>
            {/*<p>
              I've worked on <b>gameplay, camera systems, UI flows, and game technology</b>, and I particularly enjoy the
              parts of development where small technical decisions can have a noticeable impact on how something 
              feels or works. More recently, I've also been getting deeper into lower-level systems, including C++ 
              game engine development, multithreading, graphics, and performance.
            </p>
            <p>
              Outside of larger projects, I spend a lot of time making small experiments, prototypes, tools, and games. 
              For instance, I've participated in every Global Game Jam since 2022, usually treating game jams as an 
              excuse to learn something new, work with people from different disciplines, and see how far I can take 
              an idea before the deadline wins — which it usually does.
            </p>*/}
            <p>
              <ul>
                <AnimatedContent {...BULLET_ANIM} delay={0.01}>
                <li>
                  <b>Game programming</b>: gameplay systems, camera systems, UI
                  flows, and game technology
                </li>
                </AnimatedContent>

                <AnimatedContent {...BULLET_ANIM} delay={0.06}>
                <li>
                  <b>Systems & tools</b>: C++, game engines, multithreading,
                  graphics, and performance
                </li>
                </AnimatedContent>
                
                <AnimatedContent {...BULLET_ANIM} delay={0.11}>
                <li>
                  <b>Artificial Intelligence</b>: game AI, heuristics, search,
                  and planning
                </li>
                </AnimatedContent>
                
                <AnimatedContent {...BULLET_ANIM} delay={0.16}>
                <li>
                  <b>Experimentation</b>: prototypes, small tools, games, and
                  game jams (including every Global Game Jam since 2022)
                </li>
                </AnimatedContent>
              </ul>
            </p>
            <AnimatedContent {...BODY_ANIM}>
            <p>
              More broadly, I tend to gravitate towards systems programming,
              developer tools... Really, anything that starts with a "I wonder
              how this works..." and ends with me building a little something.
            </p>
            </AnimatedContent>
          </div>
      </div>

      <div className="slant slant--out-white" aria-hidden="true" />
    </section>
  );
}

export default AboutSection;
