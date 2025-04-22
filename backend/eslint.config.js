import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

export default [
    js.configs.recommended,

    {
        files: ['**/*.ts'],
        ignores: ['node_modules', 'dist'],
        languageOptions: {
            parser,
            parserOptions: {
                project: './tsconfig.json',
                sourceType: 'module'
            },
            globals: {
                console: 'readonly',
                process: 'readonly',
                Buffer: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                setTimeout: 'readonly',
                clearTimeout: 'readonly',
                setInterval: 'readonly',
                clearInterval: 'readonly'
            }
        },
        plugins: {
            '@typescript-eslint': ts
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/consistent-type-imports': 'error',
            semi: ['error', 'never'],
            quotes: ['error', 'single'],
            'no-console': ['error', { allow: ['info', 'error', 'warn'] }]
        },
    }
]
