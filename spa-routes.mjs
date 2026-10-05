// Runs after `npm run build` (npm calls the "postbuild" script automatically).
//
// GitHub Pages is a static file server: a request for /projects looks for
// build/projects/index.html. React Router's routes exist only in JavaScript, so without
// this step every URL except the landing page is a 404.
//
// What this script does:
// 1. Copies build/index.html into a folder for every known route, so GitHub Pages finds a
//    real file and answers 200 OK. React Router then reads the URL and renders the page.
// 2. Copies it to build/404.html too. GitHub Pages serves 404.html for anything else,
//    so unknown URLs still load the app, which shows its own "page not found" view.
//
// Blog post routes come from the folders in public/posts (one folder per post), so new
// posts are picked up without editing this file.

import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const BUILD = 'build';  // Create React App's output folder ('dist' for Vite)
const index = join(BUILD, 'index.html');

if (!existsSync(index)) {
  console.error(`spa-routes: ${index} not found. Run the build first.`);
  process.exit(1);
}

const STATIC_ROUTES = ['projects', 'blog'];

const postsDir = join(BUILD, 'posts');
const postRoutes = existsSync(postsDir)
  ? readdirSync(postsDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => `blog/${entry.name}`)
  : [];

for (const route of [...STATIC_ROUTES, ...postRoutes]) {
  const folder = join(BUILD, route);
  mkdirSync(folder, { recursive: true });
  copyFileSync(index, join(folder, 'index.html'));
}

copyFileSync(index, join(BUILD, '404.html'));

console.log(`spa-routes: wrote ${STATIC_ROUTES.length + postRoutes.length} route pages and 404.html`);
