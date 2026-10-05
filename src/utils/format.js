/**
 * Dates are stored as 'YYYY-MM-DD'. Appending a local midnight avoids bug where
 * new Date('2026-09-01') is parsed as UTC and shows up as August 31 west of Greenwich.
 */
export function formatDate(isoDate, locale = 'en-GB') {
	return new Intl.DateTimeFormat(locale, {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		})
		.format(new Date(`${isoDate}T00:00:00`));
}

/* Splits an array into rows of `size` items. */
export function chunk(items, size) {
	const rows = [];
	for (let i = 0; i < items.length; i += size) rows.push(items.slice(i, i + size));
	return rows;
}
