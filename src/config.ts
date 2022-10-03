export const SITE = {
	title: 'jspills',
	description: 'Your website description.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
	Español: 'es',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Glossary': [
			{ text: 'Apply, bind and call', link: 'en/apply-bind-call' },
			{ text: 'Async-await', link: 'en/async-await' },
			{ text: 'Block scope', link: 'en/block-scope' },
			{ text: 'Closure', link: 'en/closure' },
			{ text: 'Constructor', link: 'en/constructors' },
			{ text: 'Currying', link: 'en/currying' },
			{ text: 'Fetch', link: 'en/fetch' },
			{ text: 'HOF', link: 'en/higher-order-functions' },
			{ text: 'Hoisting', link: 'en/hoisting' },
			{ text: 'IIFE', link: 'en/iife' },
			{ text: 'Memoization', link: 'en/memoization' },
			{ text: 'Partial application', link: 'en/partial-application' },
			{ text: 'Template literals', link: 'en/template-literals' },
		],
	},
	es: {
		'Glosario': [
			{ text: 'Apply, bind y call', link: 'es/apply-bind-call' },
			{ text: 'Async-await', link: 'es/async-await' },
			{ text: 'Block scope', link: 'es/block-scope' },
			{ text: 'Closure', link: 'es/closure' },
			{ text: 'Constructor', link: 'es/constructors' },
			{ text: 'Currying', link: 'es/currying' },
			{ text: 'Fetch', link: 'es/fetch' },
			{ text: 'HOF', link: 'es/higher-order-functions' },
			{ text: 'Hoisting', link: 'es/hoisting' },
			{ text: 'IIFE', link: 'es/iife' },
			{ text: 'Memoization', link: 'es/memoization' },
			{ text: 'Partial application', link: 'es/partial-application' },
			{ text: 'Template literals', link: 'es/template-literals' },
		],
	}
};
