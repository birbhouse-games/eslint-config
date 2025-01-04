/* eslint-env node */

// Module imports
import { FlatCompat } from '@eslint/eslintrc'
import pluginImportX from 'eslint-plugin-import-x'





const compat = new FlatCompat()





export default [
	pluginImportX.flatConfigs.electron,

	{
		languageOptions: {
			globals: {
				MAIN_WINDOW_VITE_DEV_SERVER_URL: 'readonly',
				MAIN_WINDOW_VITE_NAME: 'readonly',
			},
		},
	},
]
