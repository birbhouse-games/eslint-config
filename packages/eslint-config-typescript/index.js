/* eslint-env node */

// Module imports
import * as pluginImport from 'eslint-plugin-import'
import pluginJSDoc from 'eslint-plugin-jsdoc'
import tseslint from 'typescript-eslint'





export default [
	...tseslint.configs.recommended,
	pluginJSDoc.configs['flat/recommended-typescript'],
	pluginImport.flatConfigs?.typescript,

	{
		languageOptions: {
			parser: tseslint.parser,
		},
		settings: {
			jsdoc: {
				mode: 'typescript',
			},
			'import/resolver': {
				typescript: true,
			},
		},
	},
]
