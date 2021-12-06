module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jasmine: true,
    'codeceptjs/codeceptjs': true
  },
  extends: [
    'standard',
    'plugin:import/recommended',
    'plugin:jasmine/recommended',
    'plugin:codeceptjs/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    semi: [2, 'always']
  },
  plugins: [
    'import',
    'jasmine',
    'codeceptjs'
  ]
};
