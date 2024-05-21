/* eslint-env node */
import { FlatCompat } from '@eslint/eslintrc'
import globals from 'globals'
import js from '@eslint/js'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import pluginReact from 'eslint-plugin-react'
import configReactJSXRuntime from 'eslint-plugin-react/configs/jsx-runtime'
import configReactRecommended from 'eslint-plugin-react/configs/recommended'





const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	allConfig: js.configs.all,
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
})





/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	...compat.extends(
		'plugin:jsx-a11y/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react-perf/recommended',
		'plugin:react-prefer-function-component/recommended',
	),
	...compat.plugins(
		'react-prefer-function-component',
	),

	configReactRecommended,
	configReactJSXRuntime,

	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.es2021,
				...globals.node,
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			react: pluginReact,
		},
		rules: {
			// react
			'react/boolean-prop-naming': ['error'],
			'react/default-props-match-prop-types': ['error'],
			'react/destructuring-assignment': ['error'],
			'react/forbid-elements': ['error', {
				forbid: [
					{
						element: 'a',
						message: 'Use <Link> component instead.',
					},
					{
						element: 'button',
						message: 'Use <Button> component instead.',
					},
				],
			}],
			'react/jsx-boolean-value': ['error'],
			'react/jsx-closing-bracket-location': ['error', 'after-props'],
			'react/jsx-curly-brace-presence': ['error', 'always'],
			'react/jsx-filename-extension': ['error'],
			'react/jsx-first-prop-new-line': ['error', 'multiline'],
			'react/jsx-handler-names': ['error'],
			'react/jsx-indent': ['error', 'tab'],
			'react/jsx-indent-props': ['error', 'tab'],
			'react/jsx-key': ['error'],
			'react/jsx-max-props-per-line': ['error'],
			'react/jsx-no-script-url': ['error'],
			'react/jsx-no-useless-fragment': ['error'],
			'react/jsx-pascal-case': ['error'],
			'react/jsx-props-no-multi-spaces': ['error'],
			'react/jsx-sort-props': ['error', {
				reservedFirst: true,
			}],
			'react/jsx-wrap-multilines': ['error', {
				declaration: 'parens-new-line',
				assignment: 'parens-new-line',
				return: 'parens-new-line',
				arrow: 'parens-new-line',
				condition: 'parens-new-line',
				logical: 'parens-new-line',
				prop: 'parens-new-line',
			}],
			'react/no-danger': ['error'],
			'react/no-invalid-html-attribute': ['error'],
			'react/no-typos': ['error'],
			'react/no-unused-prop-types': ['error'],
			'react/prefer-stateless-function': ['error'],
			'react/require-default-props': ['error', {
				functions: 'defaultArguments',
			}],
			'react/self-closing-comp': ['error'],
			'react/sort-prop-types': ['error'],
			'react/style-prop-object': ['error'],
			'react/void-dom-elements-no-children': ['error'],

			// react-prefer-function-component
			'react-prefer-function-component/react-prefer-function-component': ['error', {
				allowComponentDidCatch: false,
			}],
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
]
