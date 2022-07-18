/*!
 * Copyright 2022 Lime Technology Inc. All rights reserved.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'xo'
    ],
    rules: {
        curly: ['error', 'multi-line'],
        'object-curly-spacing': ['error', 'always'],
		quotes: [2, 'single', { avoidEscape: true }],
		'no-restricted-imports': 'off',
		'@typescript-eslint/no-restricted-imports': ['warn', {
			patterns: [{
				group: ['./*', '../*'],
				message: 'Please use `@app/` instead of a relative import.'
			}]
		}]
	},
	overrides: [{
		files: ['*.ts', '*.tsx'],
        extends: ['xo-typescript'],
        plugins: [
            '@typescript-eslint',
            'unicorn'
        ],
		parser: '@typescript-eslint/parser',
		rules: {
			'@typescript-eslint/member-ordering': ['off'],
            '@typescript-eslint/restrict-template-expressions': ['warn', { allowNumber: true, allowBoolean: true }]
		}
	}],
    env: {
        node: true
    }
};
