import js from '@eslint/js'
import parser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default [
    js.configs.recommended,

    {
        files: ['src/**/*.ts', 'src/**/*.tsx'],
        languageOptions: {
            parser,
            parserOptions: {
                project: './tsconfig.app.json',
                sourceType: 'module',
                ecmaFeatures: { jsx: true }
            },
            globals: {
                React: 'readonly',
                document: 'readonly',
                window: 'readonly',
                navigator: 'readonly',
                location: 'readonly',
                setTimeout: 'readonly',
                clearTimeout: 'readonly',
                setInterval: 'readonly',
                clearInterval: 'readonly',
                requestAnimationFrame: 'readonly',
                cancelAnimationFrame: 'readonly'
            }
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            react,
            'react-hooks': reactHooks,
            'jsx-a11y': jsxA11y
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/consistent-type-imports': 'error',
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'jsx-a11y/anchor-is-valid': 'warn',
            semi: ['error', 'never'],
            quotes: ['error', 'single']
        }
    },

    {
        files: ['vite.config.ts'],
        languageOptions: {
            parser,
            parserOptions: {
                project: './tsconfig.node.json',
                sourceType: 'module'
            }
        },
        plugins: {
            '@typescript-eslint': tsPlugin
        },
        rules: {
            // можно добавить правила для node-файлов, если хочешь
        }
    }
]
