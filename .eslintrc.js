const path = require('path');

module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb-base',
        'prettier',
        'plugin:jest/recommended'
    ],
    parser: '@typescript-eslint/parser',
    env: {
        node: true,
        browser: true,
        'jest/globals': true
    },
    globals: {
        document: false
    },
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.tsx']
            },
            alias: {
                map: [
                    ['assets', './src/assets/'],
                    ['mocks', './src/mocks/'],
                    ['baskets', './src/baskets/'],
                    ['utils', './src/utils/'],
                    ['components', './src/components/']
                ],
                extensions: ['.ts', '.js', '.jsx', '.tsx']
            }
        }
    },
    plugins: ['@typescript-eslint', 'react', 'prettier', 'jest', 'html'],
    rules: {
        'no-duplicate-imports': 'off',
        'class-methods-use-this': 'off',
        'import/extensions': ['error', 'never'],
        'import/default': ['error', 'never'],
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'index',
                    'sibling',
                    'parent'
                ]
            }
        ],
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true }
        ],
        'prettier/prettier': ['error', { singleQuote: true, tabWidth: 4 }],
        'jest/no-disabled-tests': 'error',
        'jest/prefer-to-have-length': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        'import/named': 'error',
        'import/no-named-as-default': 'off',
        'react/prop-types': 'off',
        'react/display-name': 'off'
    },
    overrides: [
        {
            files: ['**/test.ts', '**/*.test.tsx'],
            rules: {
                'global-require': 'off'
            }
        }
    ]
};
