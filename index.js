module.exports = {
    plugins: [
        '@typescript-eslint',
        'unicorn'
    ],
    extends: [
        'xo',
        'xo-typescript',
    ],
    rules: {
        'object-curly-spacing': ['error', 'always'],
        '@typescript-eslint/restrict-template-expressions': ['warn', { allowNumber: true, allowBoolean: true }]
    }
};
