module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:effector/react',
    'plugin:effector/patronum',
    'plugin:effector/future',
    '@feature-sliced',
    'plugin:@conarti/feature-sliced/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['.eslintrc.cjs', 'node_modules', 'dist', '.swc'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['effector', '@typescript-eslint', 'react-refresh'],
  rules: {
    'effector/mandatory-scope-binding': 'error',
  },
};
