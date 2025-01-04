/* eslint-env node */

// Module imports
import pluginImportX from 'eslint-plugin-import-x'
import pluginJSDoc from 'eslint-plugin-jsdoc'
import tseslint from 'typescript-eslint'





export default tseslint.config(
	tseslint.configs.recommended,
	pluginImportX.flatConfigs.typescript,
	pluginJSDoc.configs['flat/recommended-typescript'],

	{
		languageOptions: {
			parser: tseslint.parser,
		},
		settings: {
			jsdoc: {
				mode: 'typescript',
			},
		},
	},

	{
		rules: {
			'@typescript-eslint/no-empty-object-type': ['error', {
				allowInterfaces: 'with-single-extends',
			}],
		},
	},
)
