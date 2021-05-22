module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb-base'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'brace-style': ['error', 'stroustrup'],
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': ['warn'],
    'no-var': ['off'],
    'one-var': ['off'],
    'import/prefer-default-export': 0
  }
};
