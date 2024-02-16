/* eslint-env node */

module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	extends: [
		'plugin:import/electron',
	],
	globals: {
		MAIN_WINDOW_VITE_DEV_SERVER_URL: 'readonly',
		MAIN_WINDOW_VITE_NAME: 'readonly',
	},
}
