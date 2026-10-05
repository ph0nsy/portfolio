import {
	useCallback
} from 'react';
import {
	useSearchParams
} from 'react-router';

/**
 * Single tag filter stored in the URL: /projects?tag=tagName
 * 
 * Filter changes use `replace`, so they do not add history entries (back leaves the page
 * instead of undoing the last filter). Change REPLACE to false if you prefer the opposite.
 */
const REPLACE = true;

export function useTagFilter({
	allTags, // The tags that actually exist. A tag in the URL not in this list is ignored.
	param = 'tag'
}) {
	const [params, setParams] = useSearchParams();
	const raw = params.get(param);
	const tag = raw && allTags.includes(raw) ? raw : null;

	const setTag = useCallback(
		(next) => {
			setParams(
				(current) => {
					const copy = new URLSearchParams(current);
					if (next) copy.set(param, next);
					else copy.delete(param);
					return copy;
				}, {
					replace: REPLACE,
					preventScrollReset: true
				}
			);
		},
		[param, setParams]
	);

	/* Selecting the active tag again removes the filter; any other tag replaces it. */
	const toggleTag = useCallback((next) => setTag(next === tag ? null : next), [tag, setTag]);
	const clear = useCallback(() => setTag(null), [setTag]);
	const matches = useCallback((itemTags) => tag === null || itemTags.includes(tag), [tag]);

	return {
		tag,
		setTag,
		toggleTag,
		clear,
		matches
	};
}