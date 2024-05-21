/* eslint-env node */
import { FlatCompat } from '@eslint/eslintrc'
import globals from 'globals'
import js from '@eslint/js'
import path from 'node:path'
import { fileURLToPath } from 'node:url'





const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	allConfig: js.configs.all,
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
})





/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	...compat.extends('plugin:import/electron'),

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
	},
]
