import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import vue from 'eslint-plugin-vue';
import globals from 'globals';
import * as tseslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';

/** @type {Linter.Config[]} */
export default tseslint.config(
	// JavaScript base config
	js.configs.recommended,

	// Vue recommended configs
	...vue.configs['flat/recommended'],

	// TypeScript linting with type checking
	...tseslint.configs.recommendedTypeChecked,
	{
		files: ['**/*.vue', '**/*.ts'],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				parser: tseslint.parser,
				project: './tsconfig.json',
				tsconfigRootDir: import.meta.dirname,
				extraFileExtensions: ['.vue'],
			},
			globals: {
				...globals.browser,
				route: true,
			},
		},
		rules: {
			// Vue-specific rules
			'vue/multi-word-component-names': 'off',
			'vue/require-default-prop': 'off',
		},
	},

	// Global ignores (applied to all configurations)
	{
		ignores: [
			'vendor/**',
			'node_modules/**',
			'public/**',
			'bootstrap/ssr/**',
			'tailwind.config.js',
			'postcss.config.js',
			'prettier.config.cjs',
			'eslint.config.ts',
			'resources/js/ziggy.js',
			'vite.config.ts',
		],
	},

	// Special rules for test files
	{
		files: ['**/__tests__/**/*.ts', '**/*.test.ts'],
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
		rules: {
			// Relax some rules for test files
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/unbound-method': 'off',
		},
	},

	// Apply Prettier last to avoid conflicts
	prettier
);
