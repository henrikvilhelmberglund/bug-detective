import { sveltekit } from "@sveltejs/kit/vite";
import UnoCSS from "unocss/vite";
import presetUno from "@unocss/preset-uno";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		UnoCSS({
			presets: [presetUno()],
			mode: "svelte-scoped",
		}),
		sveltekit(),
	],
});
