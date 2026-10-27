import { useEffect } from 'react';

const SITE = "Ph0nsy";
const DESC = "Alonso Moreno's portfolio website, project gallery and blog."
const IMG = "./assets/Portfolio.png"

const MAX_TITLE_LEN = 20;

/* Sets the tab title per page, so history entries and bookmarks are distinguishable. */
export function useDocumentTitle(title) {
	useEffect(() => {
		document.title = title ? `${title} | ${SITE}` : SITE;
		document.querySelector('meta[name="og:title"]').content = title ? `${title} | ${SITE}` : SITE;
	}, [title]);
}

/* Sets the tab title per page, so history entries and bookmarks are distinguishable. */
export function useDocumentDescription(description) {
	useEffect(() => {
		document.querySelector('meta[name="description"]').content = description ? `${description}` : DESC;
		document.querySelector('meta[name="og:description"]').content = description ? `${description}` : DESC;
	}, [description]);
}

/* Sets the tab title per page, so history entries and bookmarks are distinguishable. */
export function useDocumentImage(imagePath) {
	useEffect(() => {
		document.querySelector('meta[name="og:image"]').content = imagePath ? `/${imagePath}` : IMG;
	}, [imagePath]);
}