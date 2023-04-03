// use adapter-auto for zero config deployment to Vercel, adapter-static for Github Pages
// import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static";
import preprocess from 'svelte-preprocess'

const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
		adapter: adapter(),
		paths: {
			// change path below to your github repo if using Github Pages
			base: dev ? "" : "/sveltekit-unocss-template",
		},
	},
  vitePlugin: {
		experimental: {
			inspector: true,
		},
	},
};

export default config;
