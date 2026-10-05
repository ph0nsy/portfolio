import {
	useCallback,
	useEffect,
	useRef
} from 'react';

/*
  We use this aproach instead of `scrollTo({ behavior: 'smooth' })` because the  
  target moves while we travel. 

  When the selection changes, the old panel shrinks and the new one grows over 0.5s, 
  so the position that centers the new panel keeps changing during the animation.
  
  A one shot smooth scroll aims at where the panel was when it started and ends off center.
  Instead, every frame we re-measure where the target is right now and move a fraction
  of the remaining distance toward it (exponential smoothing, same as Lerp in a game):
    
    position += (target - position) * (1 - e^(-dt / TAU))

 */

/** 
 * Using 1 - e^(-dt/TAU) instead of a fixed factor makes the motion identical at different
 * refresh rates, because the fraction depends on elapsed time, not on frame count.
 */
const TAU = 0.12; // after TAU seconds about 63% of the distance is covered

export function useFollowCamera(containerRef, {
	settleAfter = 650
} = {}) {
	const frame = useRef(0);

	const stop = useCallback(() => {
		cancelAnimationFrame(frame.current);
		frame.current = 0;
	}, []);

	/**
	 * `getTarget` returns the element to center. 
	 * It is a function, not an element, so it is re-evaluated every frame.
	 */
	const follow = useCallback(
		(getTarget, {
			instant = false
		} = {}) => {
			const strip = containerRef.current;
			if (!strip) return;
			stop();

			const targetScroll = () => {
				/* Element's position is what changes */
				const element = getTarget();
				if (!element) return strip.scrollLeft;
				const centered = element.offsetLeft - (strip.clientWidth - element.offsetWidth) / 2;
				return Math.min(Math.max(centered, 0), strip.scrollWidth - strip.clientWidth);
			};

			if (instant) {
				strip.scrollLeft = targetScroll();
				return;
			}

			let position = strip.scrollLeft; // floating point position
			const start = performance.now();
			let last = start;

			/**
			 * Reading strip.scrollLeft back each frame does not work since browsers may round 
			 * it to whole pixels, so tiny steps get rounded away and the camera never arrives.
			 */
			const tick = (now) => {
				const dt = (now - last) / 1000;
				last = now;

				const target = targetScroll();
				position += (target - position) * (1 - Math.exp(-dt / TAU));
				strip.scrollLeft = position;

				/* Keep running at least until the width transition has finished, then until close enough. */
				const settled = now - start > settleAfter && Math.abs(target - position) < 0.5;
				if (settled) {
					strip.scrollLeft = target;
					frame.current = 0;
					return;
				}
				frame.current = requestAnimationFrame(tick);
			};
			frame.current = requestAnimationFrame(tick);
		},
		[containerRef, settleAfter, stop]
	);

	/**
	 * Listening on window and checking the target means this works even if the container
	 * mounts later (for example after clearing an empty filter), and it subscribes only once. 
	 */
	useEffect(() => {
		const events = ['wheel', 'touchstart', 'pointerdown'];

		/* The visitor grabbing the scroll (wheel, finger, scrollbar) always wins over the camera.*/
		const onInput = (event) => {
			if (containerRef.current?.contains(event.target)) stop();
		};
		events.forEach((name) => window.addEventListener(name, onInput, {
			passive: true,
			capture: true
		}));
		return () => {
			events.forEach((name) => window.removeEventListener(name, onInput, {
				capture: true
			}));
			stop();
		};
	}, [containerRef, stop]);

	return follow;
}