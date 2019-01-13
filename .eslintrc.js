const path = require('path');

module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb-base',
        'prettier',
        'plugin:jest/recommended',
    ],
    parser: 'babel-eslint',
    env: {
        node: true,
        browser: true,
        'jest/globals': true,
    },
    globals: {
        document: false,
    },
    plugins: ['react', 'prettier', 'jest'],
    rules: {
        'no-duplicate-imports': 'off',

        'class-methods-use-this': 'off',

        'import/extensions': ['error', 'never'],

        'import/default': ['error', 'never'],

        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

        'prettier/prettier': 'error',

        'jest/no-disabled-tests': 'error',

        'jest/prefer-to-have-length': 'error',

        'import/named': 'error',

        'import/no-named-as-default': 'off',
    },
    overrides: [
        {
            files: ['**/test.js', '**/*.test.js'],
            rules: {
                'global-require': 'off',
            },
        },
    ],
};
