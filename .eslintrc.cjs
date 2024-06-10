module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['react-refresh', 'react', 'import'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal']],
        'newlines-between': 'ignore',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'prettier/prettier': ['error', { trailingComma: 'all' }],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: true,
        natural: false,
        minKeys: 4,
        allowLineSeparatedGroups: true,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
