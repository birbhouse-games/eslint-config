/* eslint-env node */

// Module imports
import { FlatCompat } from '@eslint/eslintrc'
import globals from 'globals'
import * as pluginImport from 'eslint-plugin-import'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginPreferFC from 'eslint-plugin-react-prefer-function-component/config'
import pluginReact from 'eslint-plugin-react'
import pluginReactPerf from 'eslint-plugin-react-perf'






// Constants
const compat = new FlatCompat()






export const react = [
	pluginImport.flatConfigs?.react,
	pluginJsxA11y.flatConfigs.recommended,
	pluginPreferFC.configs?.recommended,
	pluginReact.configs.flat?.recommended,
	pluginReact.configs.flat?.['jsx-runtime'],
	pluginReactPerf.configs.flat.recommended,

	...compat.extends('plugin:react-hooks/recommended'),

	{
    languageOptions: {
			...pluginJsxA11y.flatConfigs.recommended.languageOptions,
			...pluginReact.configs.flat?.recommended.languageOptions,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
		settings: {
			react: {
				version: 'detect',
			},
		},
	},

	// eslint-plugin-react
	{
		rules: {
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
			'react/jsx-filename-extension': ['error', {
				extensions: [
					'.jsx',
					'.tsx',
				],
			}],
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
		},
	},

	// // eslint-plugin-react-prefer-function-component
	// {
	// 	rules: {
	// 		'react-prefer-function-component/react-prefer-function-component': ['error', {
	// 			allowComponentDidCatch: false,
	// 		}],
	// 	},
	// },
]
