/* eslint-env node */

// Module imports
import { FlatCompat } from '@eslint/eslintrc'
import globals from 'globals'
import * as pluginImport from 'eslint-plugin-import'





const compat = new FlatCompat()





export default [
	pluginImport.flatConfigs?.electron,

	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.es2021,
				...globals.node,
				MAIN_WINDOW_VITE_DEV_SERVER_URL: 'readonly',
				MAIN_WINDOW_VITE_NAME: 'readonly',
			},
		},
		settings: {
			'import/core-modules': [
				'electron',
			],
			'import/resolver': {
				typescript: true,
			},
		},
	},
]
