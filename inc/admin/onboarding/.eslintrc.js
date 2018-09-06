module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: 'plugin:vue/recommended',
  // required to lint *.vue files
  plugins: [
    'html',
    'vue',
  ],
  // add your custom rules here
  rules: {
    "indent": ["error", "tab"],
    "no-tabs": 0,
    "space-in-parens": ["error", "always"],
    "camelcase": [2,{"properties":"never"}],
  },
  "parserOptions":{
    "parser": "babel-eslint"
  },
  globals: {}
}