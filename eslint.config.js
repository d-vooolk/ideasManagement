import js from '@eslint/js'
import parser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import standardWithTS from 'eslint-config-standard-with-typescript'
import prettier from 'eslint-config-prettier'

export default [
    js.configs.recommended,

    ...standardWithTS(
        {
            parserOptions: {
                project: ['./tsconfig.json'],
                tsconfigRootDir: process.cwd(),
                sourceType: 'module'
            }
        }
    ),

    prettier,

    {
        files: ['**/*.ts', '**/*.tsx'],
        ignores: ['node_modules', 'dist'],

        languageOptions: {
            parser,
            parserOptions: {
                project: ['./tsconfig.json'],
                tsconfigRootDir: process.cwd(),
                sourceType: 'module'
            }
        },
        plugins: {
            '@typescript-eslint': tsPlugin
        },
        rules: {
            'import/order': ['error', {
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: false,
                    orderImportKind: 'asc'
                }
            }],

            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            '@typescript-eslint/strict-boolean-expressions': 'off',
            '@typescript-eslint/prefer-nullish-coalescing': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/restrict-template-expressions': 'off',
            '@typescript-eslint/triple-slash-reference': 'off',
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/consistent-type-assertions': 'off',
            'jsx-a11y/anchor-is-valid': 'off',
            curly: ['error', 'all'],
            'no-irregular-whitespace': ['error', {
                skipTemplates: true,
                skipStrings: true
            }],
            'no-console': ['error', { allow: ['info', 'error', 'warn'] }]
        }
    }
]
