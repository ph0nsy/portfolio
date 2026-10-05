import {
	LiaArchiveSolid,
	LiaBlogSolid,
	LiaEnvelopeSolid,
	LiaGithub,
	LiaHomeSolid,
	LiaItchIo,
	LiaLinkedinIn
} from 'react-icons/lia';
import { IoIosMail } from 'react-icons/io';

/* Icons are stored as components (not <Icon />) so each place that renders them picks its size. */
export const NAV_LINKS = [{
		to: '/',
		label: 'Home',
		icon: LiaHomeSolid,
		end: true
	},
	{
		to: '/projects',
		label: 'Projects',
		icon: LiaArchiveSolid
	},
	{
		to: '/blog',
		label: 'Blog',
		icon: LiaBlogSolid
	},
	/** 
	 * `hash: true` marks links that jump to a section of a page instead of to a page. For example:
	 */ 
	{ 
		to: '/#contact', 
		label: 'Contact', 
		icon: LiaEnvelopeSolid, 
		hash: true 
	},
];

export const SOCIALS = [{
		label: 'GitHub',
		href: 'https://github.com/ph0nsy',
		icon: LiaGithub,
		color: '#000000'
	},
	{
		label: 'itch.io',
		href: 'https://ph0nsy.itch.io',
		icon: LiaItchIo,
		color: '#fa5c5c'
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/ph0nsy',
		icon: LiaLinkedinIn,
		color: '#0a66c2'
	},
	{
		label: 'Email',
		href: 'mailto:ph0nsydev@gmail.com',
		icon: IoIosMail,
		color: '#c71610'
	},
];