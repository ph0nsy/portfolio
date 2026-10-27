import { getReadTimeFromFileUrl } from "../utils/readTime";
/** 
 * One entry per post. The markdown body lives in public/posts/<slug>/index.md,
 * next to any images the post uses, so a post is one self contained folder.
 * 
 * date:     'YYYY-MM-DD' (string comparison of ISO dates sorts them correctly)
 * readTime: minutes
 * image:    path inside /public, used by the cards and as the post cover
 */
export const POSTS = [{
		slug: 'hello-world',
		title: 'Hello blog!',
		date: '2026-09-29',
		readTime: getReadTimeFromFileUrl('hello-world'), // estimated word size for this post
		description: 'Why this blog exists and what to expect from it: devlogs, notes on gameplay systems and the occasional deep dive into search and planning.',
		image: 'posts/hello-world/cover.png',
		tags: [],
	},
	{
		slug: 'r36s-driver',
		title: 'Creating a driver for R36S from scratch',
		date: '2026-10-04',
		readTime: getReadTimeFromFileUrl('r36s-driver'), // estimated word size for this post
		description: 'A learning project in embedded Linux driver development: Linux kernel module for the R36S handheld that handles input from GPIO hardware registers, and exposes them to userspace as a single packed.',
		image: 'posts/r36s-driver/cover.png',
		tags: ['Embedded Software'],
	},	
	{
		slug: 'camera-system',
		title: "Breaking down Lady Umbrella's Camera system",
		date: '2026-10-27',
		readTime: getReadTimeFromFileUrl('camera-system'), // estimated word size for this post
		description: 'Breaking down my implementation of the third person camera system for the action-adventure game Lady Umbrella.',
		image: 'posts/camera-system/cover.png',
		tags: ['Game Development'],
	},
];


/* Latest post (by date) will appear first. */
export const SORTED_POSTS = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

export const getPost = (slug) => POSTS.find((post) => post.slug === slug);

export const ALL_POST_TAGS = [...new Set(POSTS.flatMap((post) => post.tags))].sort();