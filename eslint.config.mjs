import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import astro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.astro/**',
      '.netlify/**',
      'coverage/**',
      'playwright-report/**',
      'test-results/**',
    ],
  },

  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [js.configs.recommended],

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  {
    files: ['src/**/*.{ts,tsx}'],

    extends: [js.configs.recommended, tseslint.configs.recommendedTypeChecked],

    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },

      globals: {
        ...globals.browser,
      },
    },
  },

  ...astro.configs.recommended,

  ...astro.configs['jsx-a11y-recommended'],

  {
    files: ['src/**/*.tsx'],

    plugins: {
      ...jsxA11y.flatConfigs.recommended.plugins,
      ...reactHooks.configs.flat.recommended.plugins,
    },

    languageOptions: {
      ...jsxA11y.flatConfigs.recommended.languageOptions,

      globals: {
        ...globals.browser,
      },
    },

    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
      ...reactHooks.configs.flat.recommended.rules,
    },
  },
]);
