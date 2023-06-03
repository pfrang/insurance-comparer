module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: [1, 'always']
  }
};
