module.exports = {
  env: {
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks', 'react-lint'],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-console': ['error', { allow: ['tron'] }],
    'react-hooks/rules-of-hooks': 'error',
    'no-unused-vars': 'off',
    'react-lint/too-many-states': 'error',
    'react-lint/large-useeffect': 'error',
    'react-lint/no-dom-manipulation': 'error',
    'react-lint/no-missing-key': 'error',
    'react-lint/too-many-props': 'error',
    'react-lint/unnecessary-wrapper': 'error',
  },
};
