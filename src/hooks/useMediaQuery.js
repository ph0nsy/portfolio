import { useCallback, useSyncExternalStore } from 'react';

/*
  Subscribes a component to a CSS media query and returns whether it currently matches.

  `useSyncExternalStore` instead of `useState` + `useEffect`.
  Media query result is state that lives outside React. 
  `useSyncExternalStore` reads it synchronously during render, 
  so the first render already has the right value (no flash of the wrong layout),
  and React guarantees every component sees the same value within one render.

  `matchMedia` instead of a resize listener.
  The 'change' event only fires when the answer flips, not on every pixel of a resize,
  and the query language can ask about more than width (pointer type, reduced motion...).
 */
export function useMediaQuery(query) {
	const subscribe = useCallback(
		(onChange) => {
			const list = window.matchMedia(query);
			list.addEventListener('change', onChange);
			return () => list.removeEventListener('change', onChange);
		},
		[query]
	);

	const getSnapshot = () => window.matchMedia(query).matches;
	/* Used only for server rendering, where there is no window. Assume desktop. */
	const getServerSnapshot = () => false;

	return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/* Visitors who asked their OS for less motion. */
export const usePrefersReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)');