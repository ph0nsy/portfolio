import {
	useMediaQuery
} from './useMediaQuery';

/* Value must be in sync with the @media (max-width: 768px) rules in the CSS files. */
export const MOBILE_BREAKPOINT = 768;

export function useMobile() {
	/* If the viewport is narrow, use it for layout decisions that CSS cannot make. */
	const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT}px)`);
	/* If user has a trackpad that can hover rather than a mouse, use it for pointer effects such as `TargetCursor` */
	const hasFinePointer = useMediaQuery('(hover: hover) and (pointer: fine)');
	return {
		isMobile,
		hasFinePointer
	};
}