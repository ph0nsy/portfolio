import { useEffect } from 'react';

const SITE = "Ph0nsy";

/* Sets the tab title per page, so history entries and bookmarks are distinguishable. */
export function useDocumentTitle(title) {
	useEffect(() => {
		document.title = title ? `${title} | ${SITE}` : SITE;
	}, [title]);
}