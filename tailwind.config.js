module.exports = {
	//mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			screens: {
				'3xl': '1900px',
			},
			colors: {
				green1: '#06202A',
				green2: '#051c25',
			},
			height: {
				screen95: '95vh',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
