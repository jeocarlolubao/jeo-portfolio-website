/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				helvetica: ['Helvetica', 'sans-serif'],
				'helvetica-bold': ['Helvetica Bold', 'sans-serif'],
				'helvetica-light': ['Helvetica Light', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
