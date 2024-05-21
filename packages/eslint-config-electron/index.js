/* eslint-env node */
import globals from 'globals'





export default [
	{
		extends: [
			'plugin:import/electron',
		],
		globals: {
			MAIN_WINDOW_VITE_DEV_SERVER_URL: 'readonly',
			MAIN_WINDOW_VITE_NAME: 'readonly',
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.es2021,
				...globals.node,
			},
		},
	},
]
