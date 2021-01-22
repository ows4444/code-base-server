module.exports = {
	extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings', 'prettier'],
	env: { jest: true, node: true, mongo: true, es6: true },

	parser: '@babel/eslint-parser',
	plugins: ['import', 'prettier'],

	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single', 'avoid-escape'],
		semi: ['error', 'never'],
		'no-undef': 1,
		'no-console': 1,
		'no-unused-vars': 2,
		'no-fallthrough': 0,
		'no-unsafe-finally': 1,
	},
}
