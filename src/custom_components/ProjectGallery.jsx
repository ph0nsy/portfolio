import { useEffect, useRef } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router";

import TagFilter from "./TagFilter";
import { useMobile } from "../hooks/useMobile";
import { useInView } from "../hooks/useInView";
import { useTagFilter } from "../hooks/useTagFilter";
import { useFollowCamera } from "../hooks/useFollowCamera";
import { PROJECT_LANGUAGES, linkLabel } from "../data/projects";
import { publicUrl } from "../config";
import { chunk } from "../utils/format";

import { usePrefersReducedMotion } from "../hooks/useMediaQuery";

const STAGE_ID = "project-stage";
const isAbsolute = (src) => /^[a-z][a-z\d+.-]*:/i.test(src);
const imageSrc = (src) => (isAbsolute(src) ? src : publicUrl(src));

/**
 * Two pieces of state live in the URL:
 *   - ?tags=tag1,tag2%23 > the language filter (useTagFilter, replaces the old TagsProvider)
 *   - ?project=slug > the expanded project
 */
function ProjectGallery({ projects, previewOnHover = false }) {
  const { isMobile } = useMobile();
  const [params, setParams] = useSearchParams();

  /**
   * URLSearchParams percent encodes the value, which matters here since an unencoded #
   * (as in C#) would start the URL fragment and a raw + (as in C++) is read back as a space.
   */
  const {
    tag: language,
    setTag: setLanguage,
    toggleTag: toggleLanguage,
    matches,
  } = useTagFilter({ allTags: PROJECT_LANGUAGES, param: "language" });

  const reducedMotion = usePrefersReducedMotion();

  /* An unknown or filtered out slug falls back to the first panel (findIndex returns -1). */
  const roster = projects.filter((project) => matches(project.languages));
  const index = Math.max(
    0,
    roster.findIndex((project) => project.slug === params.get("project"))
  );
  const selected = roster[index];

  const rosterRef = useRef(null);
  const buttonRefs = useRef([]);
  const panelRefs = useRef([]);
  const hasMoved = useRef(false);
  const follow = useFollowCamera(rosterRef);

  function select(nextIndex) {
    const project = roster[nextIndex];
    if (!project || nextIndex === index) return;
    setParams(
      (current) => {
        const copy = new URLSearchParams(current);
        copy.set("project", project.slug);
        return copy;
      },
      {
        replace: true, // Walking the cursor across multiple panels shouldn't create multiple history entries.
        preventScrollReset: true,
      }
    );
  }

  /**
   * Relative move with wrap around, like most character select screens.
   *   - focusButton: move keyboard focus with the cursor (only when focus is already in the roster).
   *   - preventScroll stops the browser's own focus scrolling from fighting the camera.
   */
  function move(delta, focusButton = false) {
    if (roster.length === 0) return;
    const nextIndex = (index + delta + roster.length) % roster.length;
    select(nextIndex);
    if (focusButton)
      buttonRefs.current[nextIndex]?.focus({ preventScroll: true });
  }

  function jumpTo(nextIndex) {
    select(nextIndex);
    buttonRefs.current[nextIndex]?.focus({ preventScroll: true });
  }

  function onRosterKeyDown(event) {
    const actions = {
      ArrowRight: () => move(1, true),
      ArrowLeft: () => move(-1, true),
      Home: () => jumpTo(0),
      End: () => jumpTo(roster.length - 1),
    };
    /* Only when a panel button has focus; arrows inside the details are left alone. */
    if (!event.target.classList.contains("panel__select")) return;
    const action = actions[event.key];
    if (!action) return;
    event.preventDefault();
    action();
  }

  useEffect(() => {
    /* Center the selected panel. */
    follow(() => panelRefs.current[index], {
      instant: !hasMoved.current || reducedMotion,
    }); // Girst render or reduced motion
    hasMoved.current = true;
  }, [index, selected?.slug, roster.length, reducedMotion, follow]);

  useEffect(() => {
    /* Re-center instantly when the viewport changes size, since size is dependant. */
    const onResize = () =>
      follow(() => panelRefs.current[index], { instant: true });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index, follow]);

  //
  // passive listener cannot call preventDefault.
  /**
   * On mouse scroll (not trackpad):
   *   - When over the roster: vertical wheel movement turns into horizontal scrolling.
   *   - Elsewhere: hand it back to the page.
   */
  const hasRoster = roster.length > 0;
  useEffect(() => {
    const strip = rosterRef.current;
    if (!strip) return undefined;

    const onWheel = (event) => {
      if (Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return;
      // deltaMode 1 means the delta is in lines (Firefox with a mouse wheel), not pixels.
      const delta = event.deltaMode === 1 ? event.deltaY * 32 : event.deltaY;
      const max = strip.scrollWidth - strip.clientWidth;
      const atStart = strip.scrollLeft <= 0 && delta < 0;
      const atEnd = strip.scrollLeft >= max - 1 && delta > 0;
      if (max <= 0 || atStart || atEnd) return;

      event.preventDefault();
      strip.scrollLeft += delta;
    };

    /**
     * Native listener with passive: false. This is because React's wheel handlers are passive
     * and a passive listener cannot call preventDefault.
     */
    strip.addEventListener("wheel", onWheel, { passive: false });
    return () => strip.removeEventListener("wheel", onWheel);
  }, [hasRoster]);

  /* Arrow keys also work when nothing else on the page has focus. */
  useEffect(() => {
    const onKeyDown = (event) => {
      if (
        event.defaultPrevented ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey
      )
        return;
      if (document.activeElement !== document.body) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        move(1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        move(-1);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }); // no dependency array: re-subscribes each render so move() always sees the current index

  return (
    <div className="select">
      {isMobile && (
        <div className={`control-bar${isMobile ? " is-mobile" : ""}`}>
          <div className="control-bar__filter">
            <span className="control-bar__label" aria-hidden="true">
              Language
            </span>
            <TagFilter
              allTags={PROJECT_LANGUAGES}
              selected={language}
              onSelect={setLanguage}
              label="Filter projects by language"
            />
          </div>
        </div>
      )}

      {/* Only languages some project uses become filters, and unknown ones in the URL are ignored,
          so a filter can never leave the roster empty (only an empty data file can). */}
      {!selected ? (
        <p className="select__empty">Projects are on their way.</p>
      ) : (
        <div className="roster-wrap">
          <ul
            ref={rosterRef}
            className="roster"
            aria-label="Projects"
            onKeyDown={onRosterKeyDown}
          >
            {roster.map((project, i) => (
              <Panel
                key={project.slug}
                project={project}
                isOpen={i === index}
                activeLanguage={language}
                onToggleLanguage={toggleLanguage}
                panelRef={(element) => {
                  panelRefs.current[i] = element;
                }}
                buttonRef={(element) => {
                  buttonRefs.current[i] = element;
                }}
                onSelect={() => select(i)}
                onHover={previewOnHover ? () => select(i) : undefined}
              />
            ))}
          </ul>

          <button
            type="button"
            className="roster-arrow roster-arrow--prev cursor-target"
            onClick={() => move(-1)}
            aria-label="Previous project"
          >
            <span aria-hidden="true">◀</span>
          </button>
          <button
            type="button"
            className="roster-arrow roster-arrow--next cursor-target"
            onClick={() => move(1)}
            aria-label="Next project"
          >
            <span aria-hidden="true">▶</span>
          </button>
        </div>
      )}

      {/* Control bar under the roster. Holds card counter and the language filter in a single row. */}
      {!isMobile && (
        <div className="control-bar">
          {selected && (
            <p className="control-bar__count" aria-hidden="true">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(roster.length).padStart(2, "0")}
            </p>
          )}
          <div className="control-bar__filter">
            <span className="control-bar__label" aria-hidden="true">
              Programing Language:
            </span>
            <TagFilter
              allTags={PROJECT_LANGUAGES}
              selected={language}
              onSelect={setLanguage}
              label="Filter projects by language"
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* One per project */
function Panel({
  project,
  isOpen,
  activeLanguage,
  onToggleLanguage,
  panelRef,
  buttonRef,
  onSelect,
  onHover,
}) {
  const detailsId = `project-${project.slug}`;

  return (
    <li ref={panelRef} className={`panel${isOpen ? " is-open" : ""}`}>
      <div className="panel__frame">
        <img
          className="panel__image"
          src={imageSrc(project.image)}
          alt=""
          loading="lazy"
          style={{ objectFit: project.imageFit }}
        />

        {/* Accordion header. It covers the whole panel so the entire portrait is clickable.
            Only the open panel's button is in the tab order, arrows move between them. */}
        <h2 className="panel__heading">
          <button
            ref={buttonRef}
            type="button"
            className="panel__select cursor-target"
            aria-expanded={isOpen}
            aria-controls={detailsId}
            aria-disabled={isOpen || undefined}
            aria-label={`${project.title}, ${project.year}`}
            tabIndex={isOpen ? 0 : -1}
            onClick={onSelect}
            onPointerEnter={(event) => {
              if (onHover && event.pointerType === "mouse") onHover();
            }}
          >
            {/* Vertical name on collapsed panels, like names on a roster. */}
            <span className="panel__label" aria-hidden="true">
              <span className="panel__label-year">{project.year}</span>
              <span className="panel__label-title">{project.title}</span>
            </span>
          </button>
        </h2>

        {/* "hidden" removes collapsed details from layout, the tab order and the accessibility tree. */}
        <div id={detailsId} className="panel__details" hidden={!isOpen}>
          <p className="panel__year">{project.year}</p>

          {/* The stack is information only. */}
          {project.languages.length + project.stack.length > 0 && (
            <ul className="stack-list" aria-label="Built with">
              {project.languages.map((projectLanguage) => (
                <li key={projectLanguage}>{projectLanguage}</li>
              ))}
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          {/* The heading above already names this panel, so the big visual title is not a second heading. */}
          <p className="panel__title" aria-hidden="true">
            {project.title}
          </p>
          <p className="panel__description">{project.description}</p>

          <a
            href={project.link}
            className="button cursor-target"
            target="_blank"
            rel="noreferrer"
          >
            {linkLabel(project.link)}
          </a>
        </div>
      </div>
    </li>
  );
}

export default ProjectGallery;
