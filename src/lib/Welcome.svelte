<script>
	import { base } from "$app/paths";
	const contents = [
		{
			name: "SvelteKit",
			link: "https://kit.svelte.dev",
			desc: "with adapter-static for easier Github Pages deployment",
		},
		{
			name: "UnoCSS",
			link: "https://github.com/unocss/unocss",
			desc: "using Svelte scoped mode, includes various plugins (see vite.config.js)",
		},
		{
			name: "Prettier Plugin TailwindCSS",
			link: "https://github.com/tailwindlabs/prettier-plugin-tailwindcss",
			desc: "for auto sorting of classes",
		},
		{
			name: "Commit-and-Tag-Version",
			link: "https://github.com/absolute-version/commit-and-tag-version",
			desc: "for CHANGELOG generation and Github tagging of versions",
		},
		{
			name: "PrismJS",
			link: "https://prismjs.com",
			desc: "with Prism-Svelte for syntax highlighting of code blocks",
		},
	];
</script>

<h1 class="text-4xl">Welcome to SvelteKit - UnoCSS template!</h1>
<p>
	Visit <a class="underline-blue-600 underline hover:text-blue-600" href="https://kit.svelte.dev"
		>kit.svelte.dev</a> to read the documentation for SvelteKit
</p>
<div class="i-noto-cat-face text-6xl" />
<p>This template includes:</p>
<ul>
	{#each contents as { name, link, desc }}
		<li class="list-none">
			<div class="flex flex-col items-start pb-4 font-serif">
				<a class="underline-blue-600 text-2xl underline hover:text-blue-600" href={link}>
					{name}
				</a>
				<span>{desc}</span>
			</div>
		</li>
	{/each}
</ul>

<style>
</style>
