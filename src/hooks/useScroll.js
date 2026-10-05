/** 
 * Originally based on @trujic1000's react-navbar:
 * https://github.com/trujic1000/react-navbar/blob/master/src/hooks/useScroll.js
 */

import {
	useEffect,
	useState
} from 'react';

/*
  Returns { isScrolled: true } once the page has scrolled vertically past
  `threshold` times the viewport height (0 means any scroll at all, 0.1 means 10%).

  Notes:
    - The listener is passive, telling the browser we never call `preventDefault`,
      so scrolling is not blocked waiting for our JavaScript.
    - At most one `requestAnimationFrame` is queued per frame. Scroll events can fire
      several times per frame; reading scrollY once per paint is enough.
    - The state is a boolean. So, since React skips re-rendering when a setter receives
      the valueit already holds, consumers only re-render when the threshold is crossed.
 */
export function useScroll({
	threshold = 0
} = {}) {
	const [isScrolled, setIsScrolled] = useState(() => readIsScrolled(threshold));

	useEffect(() => {
		let frame = 0;

		const update = () => {
			frame = 0;
			setIsScrolled(readIsScrolled(threshold));
		};
		const schedule = () => {
			if (!frame) frame = requestAnimationFrame(update);
		};

		/* The page may already be scrolled on mount */
		update();
		window.addEventListener('scroll', schedule, {
			passive: true
		});
		window.addEventListener('resize', schedule);

		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('scroll', schedule);
			window.removeEventListener('resize', schedule);
		};
	}, [threshold]);

	return {
		isScrolled
	};
}

function readIsScrolled(threshold) {
	if (typeof window === 'undefined') return false;
	return window.scrollY > window.innerHeight * threshold;
}