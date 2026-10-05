import { useId } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { MOBILE_BREAKPOINT } from "../hooks/useMobile";

/**
 * Toggle buttons for every available tag, plus a way to clear them.
 * aria-pressed tells assistive tech each button is an on/off switch.
 */
function TagFilter({
  allTags,
  selected,
  onSelect,
  onToggle,
  label = "Filter by tag",
  allLabel = "All",
  collapsible = false, // Omit, or pass {false}, to keep buttons at every width
  breakpoint = MOBILE_BREAKPOINT, // Optional, defaults to MOBILE_BREAKPOINT
}) {
  /**
   * Hooks must run on every render in the same order, so the media query is always
   * evaluated, and `collapsible` only decides whether its answer is used.
   */
  const isNarrow = useMediaQuery(`(max-width: ${breakpoint}px)`);
  const selectId = useId();

  if (allTags.length === 0) return null;

  if (collapsible && isNarrow) {
    return (
      <div className="tag-select">
        {/* A real <label>, visually hidden, so the select has an accessible name. */}
        <label htmlFor={selectId} className="visually-hidden">
          {label}
        </label>
        <select
          id={selectId}
          /* A <select> value is always a string, so '' stands for "no filter" (null). */
          value={selected ?? ""}
          onChange={(event) => onSelect(event.target.value || null)}
        >
          <option id="All" value="">
            {allLabel}
          </option>
          {allTags.map((tag) => (
            <option value={tag}>{tag}</option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="tag-filter" role="group" aria-label={label}>
      <button
        type="button"
        className="tag-toggle cursor-target"
        aria-pressed={selected === null}
        onClick={() => onSelect(null)}
      >
        {allLabel}
      </button>
      {allTags.map((tag) => (
        <button
          key={tag}
          type="button"
          className="tag-toggle cursor-target"
          aria-pressed={selected === tag}
          onClick={() => onSelect(selected === tag ? null : tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

export default TagFilter;
