import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';

/**
 * Backspace as a "go back" shortcut Rules:
 *  - Never fires while the visitor is typing (inputs, textareas, contenteditable).
 *  - Only goes back to entries inside this site. location.key is 'default' for the
 *    first entry the visitor landed on.
 */
const NON_TEXT_INPUTS = new Set(['button', 'checkbox', 'radio', 'submit', 'reset', 'file', 'image', 'color', 'range']);

function isEditable(target) {
	if (!(target instanceof HTMLElement)) return false;
	if (target.isContentEditable) return true;
	if (target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') return true;
	if (target.tagName === 'INPUT') return !NON_TEXT_INPUTS.has(target.type);
	return false;
}

export function useBackspaceNavigation() {
	const navigate = useNavigate();
	const location = useLocation();

	/* A ref lets the listener read the latest key without re-subscribing on every navigation. */
	const keyRef = useRef(location.key);
	keyRef.current = location.key;

	useEffect(() => {
		const onKeyDown = (event) => {
			if (event.key !== 'Backspace') return;
			if (event.defaultPrevented || event.repeat) return;
			if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
			if (isEditable(event.target)) return;
			if (keyRef.current === 'default') return;

			event.preventDefault();
			navigate(-1);
		};

		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [navigate]);
}