# Ph0nsy's Portfolio Website

This is my personal portfolio website, built with React and bootstrapped using Create React App.
The project uses react-bits for reusable UI components and utilities, and it is deployed to GitHub Pages thanks to gitname/react-gh-pages.

> 🚀 [Live Site](https://ph0nsy.dev)

## 📚 Resources
- [Create React App](https://create-react-app.dev/)
- [react-bits](https://github.com/uidotdev/react-bits) - A collection of reusable components, hooks, and utilities for <span style="color: #61DBFB">React</span> <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/react.svg" width="14" height="14" style="filter: invert(75%) sepia(73%) saturate(625%) hue-rotate(162deg) brightness(100%) contrast(98%);"/>.
- [gitname/react-gh-pages](https://github.com/gitname/react-gh-pages) - A simple deployment solution for <span style="color: #61DBFB">React</span> <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/react.svg" width="14" height="14" style="filter: invert(75%) sepia(73%) saturate(625%) hue-rotate(162deg) brightness(100%) contrast(98%);"/> apps on <span style="background-color:white; border-radius:5px; padding: 0px 2px 2px 2px;"><span style="color: #24292e; text-shadow: 1px 1px #2b3137">GitHub Pages</span> <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/github.svg" width="13" height="13" style="filter: invert(14%) sepia(14%) saturate(679%) hue-rotate(169deg) brightness(94%) contrast(85%);"/></span>.
- [Codpen - CSS filter generator to convert from black to target hex color](https://codepen.io/sosuke/pen/Pjoqqp) by Barrett Sonntag.

## Structure overview

```
src/
├── react-bits-components/   Components/utilities imported from react-bits
├── hooks/                   Custom React hooks (state-derived mainly)
├── custom-components/       Handcrafted UI components
├── sections/                Multi-component content sections
public/                      Static assets + CNAME for custom domain
``` 

Key ideas behind the implementation:

- **Modular UI design:** Sections and custom components allow scalable layout changes.
- **Reusable logic:** The hooks folder centralizes stateful logic across multiple sections.
- **React Bits integration:** Common patterns (animations, UI elements, effects) are abstracted through lightweight utilities.
- **Static hosting with custom domain:** GitHub Pages uses CNAME to route the site to your personal domain automatically.