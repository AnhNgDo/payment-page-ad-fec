/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'desktop-bg': "url('/bg-main-desktop.png')",
				'mobile-bg': "url('/bg-main-mobile.png')"
			}
		}
	},
	plugins: [require('flowbite/plugin')]
};
