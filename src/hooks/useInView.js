import {
	useEffect,
	useRef,
	useState
} from 'react';

/*
  Reports whether an element intersects the viewport, using `IntersectionObserver`.
  The browser computes intersections off the main thread and only calls us when the
  answer changes, which is far cheaper than measuring `getBoundingClientRect` on scroll.
 */
export function useInView({
	rootMargin = '0px',
	threshold = 0,
	once = false, // Stop observing after the first time the element becomes visible
	initial = false
} = {}) {
	const ref = useRef(null);
	const [inView, setInView] = useState(initial);

	useEffect(() => {
		const element = ref.current;
		if (!element) return undefined;

		const observer = new IntersectionObserver(
			([entry]) => {
				setInView(entry.isIntersecting);
				if (entry.isIntersecting && once) observer.disconnect();
			}, {
				rootMargin,
				threshold
			}
		);
		observer.observe(element);
		return () => observer.disconnect();
	}, [rootMargin, threshold, once]);

	return [ref, inView];
}