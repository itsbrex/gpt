import { adapter } from "@domcojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { domco } from "domco";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		minify: true,
	},
	plugins: [
		domco({
			adapter: adapter(),
		}),
		tailwindcss(),
	],
});
