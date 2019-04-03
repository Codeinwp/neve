module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins: [
    'html',
  ],
  rules: {
    "indent": ["error", "tab"],
    "no-tabs": 0,
    "space-in-parens": ["error", "always"],
    "camelcase": [2,{"properties":"never"}],
  },
  "parserOptions":{
    "parser": "babel-eslint",
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
        "modules": true,
        "experimentalObjectRestSpread": true
    }
  },
  globals: {}
}