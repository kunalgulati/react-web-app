module.exports = {
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "env":{
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    "no-multiple-empty-lines": "warn",
    "no-var": "error",
    "prefer-const": "error"
  }
}