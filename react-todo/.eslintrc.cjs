module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],

  plugins: ['react-refresh', 'react', 'import', 'sort-keys-fix'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal']],
        'newlines-between': 'ignore',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'prettier/prettier': ['error', { trailingComma: 'none' }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      {
        allowLineSeparatedGroups: true,
        caseSensitive: true,
        natural: false,
        minKeys: 2,
      },
    ],
    'sort-keys': [
      'error',
      { object: 'never' },
      {
        caseSensitive: true,
        natural: false,
        minKeys: 4,
        allowLineSeparatedGroups: true,
        allowPattern: '^(path|element)$',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
