/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/tw-elements/dist/js/**/*.js'],
	darkMode: 'class',
	theme: {
		extend: {}
	},
	plugins: [require('prettier-plugin-tailwindcss')]
};
