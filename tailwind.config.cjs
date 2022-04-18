module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#3abff8'
				}
			}
		}
	},
	plugins: [require('daisyui'), require('@tailwindcss/line-clamp')]
};
