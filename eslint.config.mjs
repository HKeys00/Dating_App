import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import pluginReactNative from 'eslint-plugin-react-native';
import pluginImport from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config} */
export default {
  files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],

  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      project: './tsconfig.json', // Ensure this points to your TypeScript config
    },
    globals: globals.browser,
  },

  plugins: {
    '@typescript-eslint': tseslint,
    react: pluginReact,
    'react-native': pluginReactNative,
    import: pluginImport,
    prettier: prettier,
  },

  extends: [
    pluginJs.configs.recommended,
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended', // Prettier integration
  ],

  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  rules: {
    'prettier/prettier': 'warn', // Show Prettier issues as warnings
    'react/jsx-uses-react': 'off', // For React 17+ with the new JSX transform
    'react/react-in-jsx-scope': 'off', // For React 17+ with the new JSX transform
    'react-native/no-inline-styles': 'off', // Disable if you use inline styles often
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignore unused variables starting with "_"
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
    'react/prop-types': 'off', // Disable if you're using TypeScript for type checking
  },
};
