/** 
 * Outside of ProjectGallery, which means it isn't rebuilt on every render and so the
 * home page can read it too.
 * 
 * slug:     stable id used in the URL (?project=lady-umbrella)
 * image:    path inside /public, or a full URL
 * imageFit: 'cover' crops to fill the panel, 'contain' shows the whole image (logos)
 * link:      the button label is derived from the domain (see linkLabel below)
 * languages: programming languages used. These are the filters on the Projects page, so write them exactly as in LANGUAGES below.
 * stack:     engines, frameworks and libraries. Shown in the panel, not filterable. 
 */
export const PROJECTS = [{
		slug: 'amancillo',
		title: 'AMAncillo Website',
		year: '2026',
		link: 'https://www.amancillo.art/',
		image: 'assets/AMAncillo.png',
		description: "Website for an independent artist to showcase and sell their work online. Iterative design process — with close client collaboration — to incorporate feedback and refine the overall visual identity.",
		languages: ['JavaScript'],
		stack: [],
		imageFit: 'cover',
	},
	{
		slug: 'lady-umbrella',
		title: 'Lady Umbrella',
		year: '2025',
		link: 'https://store.steampowered.com/app/3956890/Lady_Umbrella/',
		image: 'assets/LadyUmbrella.png',
		description: "Master's final project developed in Unreal Engine 5.5. I worked on a custom third person camera system, UI menus (design and implementation), and performance optimization, collaborating within a multidisciplinary team of about 40 developers.",
		languages: ['C / C++'],
		stack: ['Unreal Engine 5.5'],
		imageFit: 'cover',
		featured: true,
	},
	{
		slug: 'portfolio-website',
		title: 'Portfolio Website',
		year: '2025',
		link: 'https://github.com/ph0nsy/portfolio',
		image: 'assets/Portfolio.png',
		description: 'Personal portfolio built with React, using React Bits and custom components. Designed as an expandable platform to showcase projects and document ongoing work.',
		languages: ['JavaScript'],
		stack: ['React'],
		imageFit: 'cover',
	},
	{
		slug: 'pop-it-box-it',
		title: 'Pop It Box It',
		year: '2025',
		link: 'https://globalgamejam.org/games/2025/bubble-paper-shooter-fabrik-xtream-survival-and-what-hell-happening-real-popity-3',
		image: 'https://ggjv4.s3.us-west-1.amazonaws.com/files/styles/sidebar_full/s3/games/2025/428876/team_picture/WhatsApp%20Image%202025-01-26%20at%2003.40.23.jpeg?VersionId=GUAI5cUx65vHn.O_UyD9D4n2nMdDkHuP&itok=cMfKKXij',
		description: 'Global Game Jam 2025 project developed in Unity with a team of 7 under the theme "Bubbles". Rapidly prototyped the main gameplay around the theme, focused on speed, team coordination and scope management.',
		languages: ['C#'],
		stack: ['Unity'],
		imageFit: 'cover',
	},
	{
		slug: 'math-rails-line-mapper',
		title: 'Math Rails Line Mapper',
		year: '2025',
		link: 'https://ph0nsy.itch.io/math-rails-line-mapper',
		image: 'assets/MathRailsLineMapper.png',
		description: 'Proof of concept for an educational game focused on teaching mathematical function visualization. Developed in Unity as part of my Computer Science degree, exploring gameplay driven learning mechanics.',
		languages: ['C#'],
		stack: ['Unity'],
		imageFit: 'cover',
	},
	{
		slug: 'ticketing-app',
		title: 'Ticketing App',
		year: '2024',
		link: 'https://www.improntasoluciones.com/en',
		image: 'https://cdn.janto.es/pro/webImpronta23/img/20231018123300_1697625180.682Impronta.jpg',
		description: 'Frontend developer internship at Impronta Soluciones. Worked in a small team to build and maintain a React based ticketing application, focusing on UI implementation and usability.',
		languages: ['JavaScript'],
		stack: ['React'],
		imageFit: 'cover',
	},
	{
		slug: 'its-not-funny-anymore',
		title: "It's not funny anymore",
		year: '2024',
		link: 'https://ph0nsy.itch.io/its-not-funny-anymore',
		image: 'https://img.itch.zone/aW1hZ2UvMjUzNzM2OC8xNTA5NTkzNC5qcGVn/original/jH0VJ9.jpeg',
		description: 'Game jam project developed in Unity with a team of 10 under the theme "Make Me Laugh". Contributed to gameplay implementation, importing 3D models into the project and rapid iteration.',
		languages: ['C#'],
		stack: ['Unity'],
		imageFit: 'cover',
	},
	{
		slug: 'shitpost-status',
		title: 'Shitpost Status',
		year: '2023',
		link: 'https://ph0nsy.itch.io/shitpost-status',
		image: 'https://img.itch.zone/aW1hZ2UvMjIyMDQ5Ny8xMzU3MzIyOS5wbmc=/original/7Kzupq.png',
		description: 'Multiplayer browser card game hosted on itch.io and Vercel, developed as a Computer Science project using Phaser 3 and Socket.io for client server communication.',
		languages: ['JavaScript'],
		stack: ['Phaser 3', 'Socket.io'],
		imageFit: 'cover',
	},
	{
		slug: 'ai-data-mining',
		title: 'AI & Data Mining Projects',
		year: '2023',
		// TODO: this pointed at the Lady Umbrella Steam page (copy paste slip). Replace with the right repository.
		link: 'https://github.com/ph0nsy',
		image: 'assets/GitHub_Logo_White.png',
		description: 'Collection of Python projects on machine learning and data analysis, developed during my Computer Science degree using tools like Jupyter and TensorFlow.',
		languages: ['Python'],
		stack: ['Jupyter', 'TensorFlow'],
		imageFit: 'contain',
	},
	{
		slug: 'sprouts',
		title: 'Sprouts',
		year: '2023',
		link: 'https://github.com/ph0nsy/GGJ-2023',
		image: 'assets/Sprouts.png',
		description: 'Global Game Jam 2023 project developed in Unity with a team of 10, based on the theme "Roots". Helped novice Unity developers during the game creation.',
		languages: ['C#'],
		stack: ['Unity'],
		imageFit: 'cover',
	},
	{
		slug: 'vice-duo',
		title: 'Vice Duo',
		year: '2022',
		link: 'https://github.com/ph0nsy/GGJ-22',
		image: 'https://raw.githubusercontent.com/ph0nsy/GGJ-22/refs/heads/main/Assets/Sprites/Menu/bakgroundMainMenu.png',
		description: 'Game jam project developed in Unity with a team of 5 under the theme "Duality". Explored local two player controls and mechanics.',
		languages: ['C#'],
		stack: ['Unity'],
		imageFit: 'cover',
	},
	{
		slug: 'lamancha-engine',
		title: 'LaMancha Engine',
		year: 'Upcoming',
		link: 'https://github.com/ph0nsy/LaMancha-Engine',
		image: 'assets/LaMancha_Github_Repo_Logo.png',
		description: 'Lightweight 2D game engine written in C/C++, currently under development. Targeted at low end platforms (including the R36S), with scripting support via Lua and a focus on simplicity and performance.',
		languages: ['C / C++', 'Lua'],
		stack: [],
		imageFit: 'cover',
	},
];

export const FEATURED_PROJECT = PROJECTS.find((project) => project.featured) ?? PROJECTS[0];

/* List instead of collecting whatever the projects contain means a typo shows up as a missing filter instead of a new button. */
const LANGUAGES = ['C / C++', 'C#', 'JavaScript', 'Python'/*, 'Lua'*/];

/* Only languages at least one project uses, so no filter can ever show an empty roster. */
export const PROJECT_LANGUAGES = LANGUAGES.filter((language) =>
	PROJECTS.some((project) => project.languages.includes(language))
);

/* Button text for a project link, from its domain.*/
const LINK_LABELS = [
	['steampowered.com', 'View on Steam'],
	['itch.io', 'Play on itch.io'],
	['github.com', 'Source code'],
	['globalgamejam.org', 'Go to Global Game Jam'],
];
export function linkLabel(url) {
	const host = new URL(url).hostname;
	return LINK_LABELS.find(([domain]) => host.endsWith(domain))?.[1] ?? 'Visit website';
}