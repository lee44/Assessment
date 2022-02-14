const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			borderWidth: (theme) => ({
				'b-1': '1px',
			}),
			height: (theme) => ({
				'screen-75%': 'calc(100vh * .75)',
				'screen-50%': 'calc(100vh / 2)',
				'screen-33%': 'calc(100vh / 3)',
				'screen-25%': 'calc(100vh / 4)',
				'screen-20%': 'calc(100vh / 5)',
			}),
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.scrollbar-hide': {
					/* IE and Edge */
					'-ms-overflow-style': 'none',

					/* Firefox */
					'scrollbar-width': 'none',

					/* Safari and Chrome */
					'&::-webkit-scrollbar': {
						display: 'none',
					},
				},
			});
		}),
	],
};
