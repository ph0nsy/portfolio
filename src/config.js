/**
 * Where the site lives on the server.
 *   - Use '' when it is served from the domain root, for example https://ph0nsy.dev
 *   - Use '/repo-name' when it is served from a subpath, for example https://ph0nsy.github.io/repo-name
 */
export const BASE_PATH = '';

/** 
 * Builds an absolute URL for a file that lives inside /public.
 * 
 * Relative paths such as './assets/me.png' break with client side 
 * routing, because the browser resolves them against the current route
 * (on /blog/my-post that becomes /blog/my-post/assets/me.png).
 */
export const publicUrl = (path) => `${BASE_PATH}/${path.replace(/^\.?\/+/, '')}`;

/**
 * Contact form delivery.
 *   - Leave CONTACT_ENDPOINT empty to fall back to opening the visitor's mail client.
 *   - Set it to a form backend URL (Formspree, Web3Forms, your own function) to send the message without leaving the page.
 */
export const CONTACT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyTX6gVAIoMevgjjvhoVfe0dJ2Yoc_pRaltoZ6Cy0qfM8JZ5J08pFKOY2xZuAPpAxNY/exec';
export const CONTACT_EMAIL = 'ph0nsydev@gmail.com';

/* Fraction of the viewport height the visitor must scroll before the navbar turns opaque. */
export const NAVBAR_SOLID_AFTER = 0.05;